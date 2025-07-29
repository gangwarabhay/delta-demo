if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");
const listings = require("./routes/listing.js");
const review = require("./routes/review.js");

const userRouter = require("./routes/user.js");
const cors = require("cors");
const reviews = require("./models/reviews.js");
app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const db_url = process.env.ATLAS_DB;
main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(db_url);
}

const store = MongoStore.create({
  mongoUrl: db_url,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});
store.on("error", () => {
  console.log("mongo session error", err);
});

const sessionOption = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 24 * 7 * 60 * 60 * 1000,
    maxAge: 24 * 7 * 60 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.failure = req.flash("failure");
  res.locals.currUser = req.user;
  next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", review);
app.use("/", userRouter);

app.get("/listings", async (req, res) => {
  // Query the database for all listings
  const allListings = await Listing.find();
  // Ensure each listing has a valid image URL (full path)
  allListings.forEach((listing) => {
    if (listing.image.url && !listing.image.url.startsWith("http")) {
      // Make sure the image URL is complete (adjust accordingly to your setup)
      listing.image.url = "https://yourdomain.com/" + listing.image.url;
    }
  });
  res.render("listings", { allListings });
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});
app.use((err, req, res, next) => {
  console.error("ERROR ➤", err);
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).render("./listings/error.ejs", { err });
  // res.status(statusCode).send(message);
});
app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
