import express from "express";
import { 
  getListingById,
  showListing,
  getListings,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/create", verifyToken, createListing);
router.get("/showlisting/:id", verifyToken, showListing);
router.delete("/deletelisting/:id", verifyToken, deleteListing);
router.put("/editlisting/:id", verifyToken, editListing);
router.get("/getlisting/:id", verifyToken, getListingById);
router.get("/getlistings", getListings);
export default router;
