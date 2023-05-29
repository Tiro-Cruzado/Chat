import express from "express";
import { generateUserAvatar } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get("/generateAvatar", generateUserAvatar);

export default userRouter;