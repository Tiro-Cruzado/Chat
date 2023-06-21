import dotenv from "dotenv";
import http from "node:http";

import createApp from "./interfaces/express";
import { createChatSocket } from "./interfaces/socketio";

dotenv.config();

const APP_PORT = process.env.APP_PORT || 3000;

const app = createApp();
const httpServer = http.createServer(app);
const chatSocket = createChatSocket(httpServer);

chatSocket.init()

httpServer.listen(APP_PORT, () => {
  console.log(`Listening on port: ${APP_PORT}`);
});
