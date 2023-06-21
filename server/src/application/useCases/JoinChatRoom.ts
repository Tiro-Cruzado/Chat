import { ChatRoomRepository } from "../../infrasctructure/repositories/implementations/ChatRoomRepository";

class JoinChatRoom {
  chatRoomRepository: ChatRoomRepository;

  constructor(chatRoomRepository: ChatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository;
  }

  async execute(chatRoomId: string, userId: string) {
    const chatRoomFound = this.chatRoomRepository.findById(chatRoomId);

    if (!chatRoomFound) {
      throw new Error('Chat room not found')
    }

    chatRoomFound.addUser(userId);
    this.chatRoomRepository.save(chatRoomFound);
  }
}

export { JoinChatRoom }