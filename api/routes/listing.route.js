import express from "express";
import {
  createListing,
  deleteListing,
  showListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();
router.post("/create", verifyToken, createListing);
router.get("/showlisting/:id", verifyToken, showListing);
router.delete("/deletelisting/:id", verifyToken, deleteListing);
export default router;
