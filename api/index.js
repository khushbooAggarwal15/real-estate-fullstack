import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongo DB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
