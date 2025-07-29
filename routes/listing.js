const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const router = express.Router();
const { isLoggedIN, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const { storage } = require("../cloudConfig"); // ✅ Your Cloudinary setup
const multer = require("multer");
const upload = multer({ storage }); // ✅ Cloudinary storage

// router.put("listings/update-image/:id", async (req, res) => {
//   const { id } = req.params;
//   const { newImageUrl } = req.body;

//   await Listing.updateMany(
//     { _id: id },
//     {
//       $set: {
//         "image.url":
//           "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//     }
//   );

//   res.redirect("/listings");
// });
// new route
router.get("/new", isLoggedIN, wrapAsync(listingController.renderNewForm));

router
  .route("/:id")
  .get(wrapAsync(listingController.showListings))
  .put(
    isLoggedIN,
    isOwner,
    upload.single("image"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIN, isOwner, wrapAsync(listingController.destroyListing));

// create route
router.post(
  "/",
  upload.single("image"),
  validateListing,
  isLoggedIN,

  wrapAsync(listingController.createListing)
);

// Edit route
router.get(
  "/:id/edit",
  isLoggedIN,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);
module.exports = router;
