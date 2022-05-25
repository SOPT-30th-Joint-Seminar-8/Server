import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
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

export default {
    createReview,
};
