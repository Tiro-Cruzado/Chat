import { ChatRoom } from "../../domain/entities/ChatRoom";
import { ChatRoomRepository } from "../../infrasctructure/repositories/implementations/ChatRoomRepository";

class CreateChatRoom {
  chatRoomRepository: ChatRoomRepository;

  constructor(chatRoomRepository: ChatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository;
  }

  async execute(name: string, users: string[]) {
    const chatRoom = new ChatRoom(name, users);
    this.chatRoomRepository.save(chatRoom);

    return chatRoom;
  }
}

export { CreateChatRoom }