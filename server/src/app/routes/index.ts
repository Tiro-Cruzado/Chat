import express from "express";
import userRouter from "./userRoutes";

const mainRouter = express.Router();
mainRouter.use("/user", userRouter);

export default mainRouter;