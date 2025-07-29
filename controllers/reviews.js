const Listing = require("../models/listing");
const Reviews = require("../models/reviews.js");
module.exports.createReview = async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newReview = new Reviews(req.body.reviews);
  newReview.author = req.user._id;
  if (!listing) {
    throw new ExpressError(404, "Listing not found");
  }

  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "new review created");

  res.redirect(`/listings/${listing._id}`); // ✅ correct way
};
module.exports.destroyReview = async (req, res) => {
  let { id, reviewsId } = req.params;

  if (reviews.author._id.equals(res.locals.currUser._id)) {
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewsId } });
    await Reviews.findByIdAndDelete(reviewsId);
    res.redirect(`/listings/${id}`);
  }
};
