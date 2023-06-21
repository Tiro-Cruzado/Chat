import { ChatMessage } from "../../domain/entities/ChatMessage";
import { IChatRoomRepository } from "../../infrasctructure/repositories/IChatRoomRepository";

class SendChatMessage {
  chatRoomRepository: IChatRoomRepository;

  constructor(chatRoomRepository: IChatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository
  }

  async execute(chatRoomId: string, userId: string, message: string) {
    const chatRoomFound = this.chatRoomRepository.findById(chatRoomId);

    if (!chatRoomFound) {
      throw new Error('Chat room not found');
    }

    const isUserInTheRoom = chatRoomFound.isUserInTheRoom(userId);

    if (!isUserInTheRoom) {
      throw new Error('User not found in the chat room');
    }

    const newMessage = new ChatMessage(userId, message)
    chatRoomFound.addMessage(newMessage);

    this.chatRoomRepository.save(chatRoomFound);
  }
}

export { SendChatMessage };