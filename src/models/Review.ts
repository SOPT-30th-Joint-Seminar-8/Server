import mongoose from "mongoose";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";

const ReviewScheme = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
        post: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Post",
        },
        text: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<ReviewInfo & mongoose.Document>(
    "Review",
    ReviewScheme
);
