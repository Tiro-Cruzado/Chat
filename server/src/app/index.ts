import express from "express";
import mainRouter from "./routes";
import cors from "cors";

const app = express();

const useCors: boolean = process.env.ENABLE_CORS == "true";

if(useCors) app.use(cors());

app.use("/", mainRouter);

export default app;
