import { Router } from "express";
import { body } from "express-validator/check";
import ReviewController from "../controllers/ReviewController";

const router: Router = Router();

router.post(
    "/post/:postId",
    body("text").notEmpty(),
    ReviewController.createReview
);

export default router;
