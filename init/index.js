const mongoose = require("mongoose");
const initData = require("./project.js");
const Listing = require("../models/listing.js");

const MONGOURL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGOURL);
}
const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "687f2d449042931af690f8b2",
  }));

  await Listing.insertMany(initData.data);

  console.log("data was initialized");
};
initDB();
