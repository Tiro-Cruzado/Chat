import express from "express";
import mainRouter from "./routes";
import cors from "cors";

const createApp = () => {
  const app = express();
  const useCors: boolean = process.env.ENABLE_CORS == "true";

  if (useCors) app.use(cors());

  app.use(express.json());
  app.use("/", mainRouter);

  return app;
};

export default createApp;
