import { Server, Socket } from "socket.io"

import { SendChatMessage } from "../../../application/useCases/SendChatMessage"
import { ChatRoomRepository } from "../../../infrasctructure/repositories/implementations/ChatRoomRepository"

export const sendChatMessageHandler = (io: Server, chatRoomRepository: ChatRoomRepository) => (
  async (socket: Socket, userId: string, chatRoomId: string, message: string) => {
    if (!chatRoomId) {
      socket.emit('error', 'Please enter chat room identifier')
    }

    if (!userId) {
      socket.emit('error', 'Please enter user identifier')
    }

    if (!message) {
      socket.emit('error', 'Please enter message')
    }

    try {
      const sendChatMessageUseCase = new SendChatMessage(chatRoomRepository)
      sendChatMessageUseCase.execute(chatRoomId, userId, message)

      socket.to(chatRoomId).emit('chatMessageSent', { chatRoomId, userId, message });
    } catch (error) {
      socket.emit('error', error)
    }

  }
)
