import { allowedNodeEnvironmentFlags } from "process";
import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import { ReviewResponseDto } from "../interfaces/review/ReviewResponseDto";
import Review from "../models/Review";

const createReview = async (
    postId: string,
    reviewCreateDto: ReviewCreateDto
): Promise<PostBaseResponseDto> => {
    try {
        const review = new Review({
            user: "62888141fd5046b1d815c81d",
            post: postId,
            text: reviewCreateDto.text,
        });

        await review.save();

        const data = {
            _id: review._id,
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getReviews = async (postId: string): Promise<ReviewResponseDto[]> => {
    try {
        const reviews = await Review.find({ post: postId }).populate(
            "user",
            "userName userImg userEmail"
        );

        const data = await Promise.all(
            reviews.map((review: any) => {
                const result = {
                    reviewId: review._id,
                    userName: review.user.userName,
                    userEmail: review.user.userEmail,
                    userImg: review.user.userImg,
                    text: review.text,
                    createdAt: review.createdAt,
                };
                return result;
            })
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    createReview,
    getReviews,
};
