import { Server } from "socket.io";
import http from "node:http";

import { ChatSocket } from "../../interfaces/socketio/ChatSocket";
import { ChatRoomRepository } from "../../infrasctructure/repositories/implementations/ChatRoomRepository";

export const createChatSocket = (httpServer: http.Server): ChatSocket => {
  const io = new Server(httpServer);
  return new ChatSocket(io, ChatRoomRepository.getInstance())
}