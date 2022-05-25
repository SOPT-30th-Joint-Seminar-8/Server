//router index file
import { Router } from "express";
import PostRouter from "./PostRouter";
import ReviewRouter from "./ReviewRouter";

const router: Router = Router();

router.use("/post", PostRouter);
router.use("/review", ReviewRouter);

export default router;
