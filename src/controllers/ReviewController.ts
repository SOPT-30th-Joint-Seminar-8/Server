import express, { Request, Response } from "express";
import { validationResult } from "express-validator";
import { ReviewCreateDto } from "../interfaces/review/ReviewCreateDto";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import ReviewService from "../services/ReviewService";

/**
 * @route POST review//post/:postId
 * @desc Create Review
 * @access PUblic
 */
const createReview = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
    }

    const reviewCreateDto: ReviewCreateDto = req.body;
    const { postId } = req.params;

    try {
        const data = await ReviewService.createReview(postId, reviewCreateDto);
        res.status(statusCode.CREATED).send(
            util.success(
                statusCode.CREATED,
                message.CREATE_REVIEW_SUCCESS,
                data
            )
        );
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

/**
 * @route GET review/post/:postId
 * @desc Create Review
 * @access PUblic
 */
const getReviews = async (req: Request, res: Response) => {
    const { postId } = req.params;
    try {
        const data = await ReviewService.getReviews(postId);
        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_REVIEW_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

export default {
    createReview,
    getReviews,
};
