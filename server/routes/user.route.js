import express from "express";
import {
  updateUser,
  deleteUser,
  signoutUser,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/signout", signoutUser);
router.get("/:id", verifyToken, getUser);
export default router;
