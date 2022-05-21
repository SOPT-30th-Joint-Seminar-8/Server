import { Router } from "express";
import { body } from "express-validator/check";
import { PostController } from "../controllers";

const router: Router = Router();

router.get("/", PostController.readPosts);
router.post("/", [body("text").notEmpty()], PostController.createPost);

export default router;
