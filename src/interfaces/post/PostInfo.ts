import mongoose from "mongoose";

export interface PostInfo {
    user: mongoose.Types.ObjectId;
    text: string;
    likes: number;
    views: number;
}
