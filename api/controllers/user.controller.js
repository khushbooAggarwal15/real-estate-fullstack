import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
export const updateUser = async (req, res, next) => {
  console.log(req.user.id != req.params.id, req.params.id, req.user.id);
  if (req.user.id !== req.params.id)
    return res
      .status(403)
      .json({ message: "You are not authorized to update this user" });
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.passsword, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    const { passsword: pass, ...rest } = updateUser._doc;
    res.status(201).json({
      success: true,
      message: "User updated successfully",
      user: rest,
    });
  } catch (err) {
    next(err);
  }
};
