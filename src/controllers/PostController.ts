import express, { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import util from "../modules/util";
import { validationResult } from "express-validator";
import { PostService } from "../services";
import { PostCreateDto } from "../interfaces/post/PostCreateDto";

/**
 *  @route GET /post
 *  @desc READ Post
 *  @access Public
 */
const readPosts = async (req: Request, res: Response) => {
    try {
        const data = await PostService.readPosts();

        if (!data) {
            return res
                .status(statusCode.NOT_FOUND)
                .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
        }

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_POSTS_SUCCESS, data)
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
 *  @route POST /post
 *  @desc Create Post
 *  @access Public
 */
const createPost = async (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
    }
    const postCreateDto: PostCreateDto = req.body;

    try {
        const data = await PostService.createPost(postCreateDto);

        res.status(statusCode.CREATED).send(
            util.success(statusCode.CREATED, message.CREATE_POST_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

export default {
    readPosts,
    createPost,
};
