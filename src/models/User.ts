import mongoose from "mongoose";
import { UserInfo } from "../interfaces/user/UserInfo";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userImg: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  job: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
  },
});

export default mongoose.model<UserInfo & mongoose.Document>("User", UserSchema);
