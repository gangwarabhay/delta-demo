const User = require("../models/user");
module.exports.renderSignupForm = async (req, res) => {
  res.render("users/signup.ejs");
};
module.exports.signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    let regiteredUser = await User.register(newUser, password);
    console.log(regiteredUser);
    req.login(regiteredUser, (err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "welcome to wanderlust");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("failure", e.message);
    res.redirect("/signup");
  }
};
module.exports.renderLoginForm = async (req, res) => {
  res.render("users/login.ejs");
};
module.exports.login = async (req, res) => {
  req.flash("success", "welcome to wanderlust! you are logged in");
  let redirectUrl = req.session.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};
module.exports.logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out");
    res.redirect("/listings");
  });
};
