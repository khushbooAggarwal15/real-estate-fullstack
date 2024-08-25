import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOx3ICIIaQaKmfxlhiZNU2lh7ST07Hxmjsw&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
