const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const Reviews = require("../models/reviews.js");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");

const {
  validateReview,
  isLoggedIN,
  isReviewAuthor,
} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

router.post(
  "/",
  isLoggedIN,
  validateReview,
  wrapAsync(reviewController.createReview)
);
// review delete route
router.delete(
  "/:reviewsId",
  isLoggedIN,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);
module.exports = router;
