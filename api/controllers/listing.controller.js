import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};
export const showListing = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listing = await Listing.find({ userRef: req.params.id });
      if (!listing) {
        next(error);
      }
      res.status(200).json(listing);
    } catch (error) {
      next(error);
    }
  } else {
    next(errorHandler(401, "You can only view your own listings"));
  }
};
