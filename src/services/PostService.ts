import { PostBaseResponseDto } from "../interfaces/common/PostBaseResponseDto";
import { PostResponseDto } from "../interfaces/post/PostResponseDto";
import User from "../models/User";
import Post from "../models/Post";
import { PostCreateDto } from "../interfaces/post/PostCreateDto";

const readPosts = async (): Promise<PostResponseDto | null> => {
    try {
        const posts = await Post.find().populate(
            "user",
            "userName userImg userEmail"
        );

        if (!posts) {
            return null;
        }

        const postList = await Promise.all(
            posts.map(async (post: any) => {
                const result = {
                    postId: post._id,
                    userImg: post.user.userImg,
                    userName: post.user.userName,
                    userEmail: post.user.userEmail,
                    text: post.text,
                    likes: post.likes,
                    views: post.views,
                    createdAt: post.createdAt,
                };

                return result;
            })
        );

        const users = await User.find();
        const userList = await Promise.all(
            users.map(async (user: any) => {
                const result = {
                    userName: user.userName,
                    job: user.job,
                    followers: user.followers,
                };

                return result;
            })
        );

        const data = {
            posts: postList,
            hotProfiles: userList,
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createPost = async (
    postCreateDto: PostCreateDto
): Promise<PostBaseResponseDto> => {
    try {
        const post = new Post({
            user: "62888141fd5046b1d815c81d",
            text: postCreateDto.text,
            likes: 0,
            views: 0,
        });

        await post.save();

        const data = {
            _id: post.id,
        };

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export default {
    readPosts,
    createPost,
};
