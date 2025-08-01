const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controllers/users");

router.get("/signup", wrapAsync(userController.renderSignupForm));
router.post("/signup", wrapAsync(userController.signup));

router.get("/login", wrapAsync(userController.renderLoginForm));
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.login)
);
router.get("/logout", userController.logout);

module.exports = router;
