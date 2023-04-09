import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import { Server } from "socket.io";
import app from "./app";


const APP_PORT = process.env.APP_PORT || 3000;

const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("someone has connected");
});

httpServer.listen(APP_PORT, () => {
  console.log(`Listening on port: ${APP_PORT}`);
});
