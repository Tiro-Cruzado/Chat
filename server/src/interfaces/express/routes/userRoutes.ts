import express from "express";
import { createUser, generateUserAvatar } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get("/generateAvatar", generateUserAvatar);
userRouter.put("/create", createUser);

export default userRouter;
