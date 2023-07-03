import { Server, Socket } from "socket.io"

import { JoinChatRoom } from "../../../application/useCases/JoinChatRoom"
import { ChatRoomRepository } from "../../../infrasctructure/repositories/implementations/ChatRoomRepository"

export const joinChatRoomHandler = (io: Server) => (
  async (socket: Socket, userId: string, chatRoomId: string) => {
    if (!userId || !chatRoomId) {
      socket.emit("error", 'Please enter user ID and chat room ID')
      return
    }

    try {
      const joinChatRoomUseCase = new JoinChatRoom(ChatRoomRepository.getInstance())
      joinChatRoomUseCase.execute(chatRoomId, userId)

      socket.join(chatRoomId);
      socket.to(chatRoomId).emit('userJoined', { chatRoomId, userId });
    } catch (error) {
      socket.emit('error', error)
    }
  }
)
