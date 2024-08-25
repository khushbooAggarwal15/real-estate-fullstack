import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";

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

app.use(cookieParser());
app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
app.use("/api/user", userRouter);

app.use("/api/auth", authRouter);
// app.post("/test", (req, res) => {
//   console.log(req.headers.access_token);
//   console.log(req.cookies);
//   res.send("Cookies logged successfully");
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message: message,
  });
});
