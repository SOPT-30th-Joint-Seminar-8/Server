import mongoose from "mongoose";

export interface ReviewResponseDto {
    reviewId: mongoose.Types.ObjectId;
    userName: string;
    userEmail: string;
    userImg: string;
    text: string;
    createdAt: string;
}
