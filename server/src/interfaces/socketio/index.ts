import { Server } from "socket.io";

import { ChatSocket } from "../../interfaces/socketio/ChatSocket";
import { ChatRoomRepository } from "../../infrasctructure/repositories/implementations/ChatRoomRepository";

export const createChatSocket = (httpServer: any): ChatSocket => {
  const io = new Server(httpServer);
  return new ChatSocket(io, ChatRoomRepository.getInstance())
}