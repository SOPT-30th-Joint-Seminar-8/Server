import mongoose, { mongo } from "mongoose";
import { PostInfo } from "../interfaces/post/PostInfo";

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
        text: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<PostInfo>("Post", PostSchema);
