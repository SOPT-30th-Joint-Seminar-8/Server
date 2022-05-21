import mongoose from "mongoose";

export interface ReviewInfo {
    user: mongoose.Types.ObjectId;
    post: mongoose.Types.ObjectId;
    text: string;
}
