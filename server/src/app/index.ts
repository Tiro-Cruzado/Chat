import express from "express";
import mainRouter from "./routes";
import cors from "cors";

const app = express();
app.use("/", mainRouter);

const useCors: boolean = process.env.ENABLE_CORS === "true";

if(useCors)
  app.use(cors());

export default app;