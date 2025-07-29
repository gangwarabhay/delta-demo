const Listing = require("../models/listing");
module.exports.renderNewForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/new.ejs");
};
module.exports.showListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("failure", "listing you requested for does not exist");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("./listings/show.ejs", { listing });
};
module.exports.createListing = async (req, res, next) => {
  let newListing = new Listing(req.body.listing);
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    newListing.image = { url, filename };
  }

  newListing.owner = req.user._id;
  await newListing.save();
  console.log("REQ FILE:", req.file);

  req.flash("success", "new post added succesfully");
  res.redirect("/listings");
};
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("failure", "listing you requested for does not exist");
    res.redirect("/listings");
  }
  res.render("./listings/edit.ejs", { listing });
};
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    Listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing updated succesfully");
  res.redirect(`/listings/${id}`);
};
module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("failure", "listed deleteed succesfully");
  console.log(deletedListing);
  res.redirect("/listings");
};
