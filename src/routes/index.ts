//router index file
import { Router } from "express";
import PostRouter from "./PostRouter";

const router: Router = Router();

router.use("/post", PostRouter);

export default router;
