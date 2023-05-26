import dotenv from "dotenv";
import http from "node:http";
import { Server } from "socket.io";

import createApp from "./interfaces/express";
import { ChatSocket } from "./interfaces/socketio/ChatSocket";
import { ChatRoomRepository } from "./infrasctructure/repositories/implementations/ChatRoomRepository";

dotenv.config();

const APP_PORT = process.env.APP_PORT || 3000;

const app = createApp();
const httpServer = http.createServer(app);
const io = new Server(httpServer);
const chatSocket = new ChatSocket(io, ChatRoomRepository.getInstance())

chatSocket.init()

httpServer.listen(APP_PORT, () => {
  console.log(`Listening on port: ${APP_PORT}`);
});
