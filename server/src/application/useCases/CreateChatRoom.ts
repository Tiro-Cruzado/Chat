import { v4 as uuidV4 } from "uuid";

import { ChatRoom } from "../../domain/entities/ChatRoom";

class CreateChatRoom {
  constructor(chatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository;
  }

  async execute(name) {
    const id = uuidV4();
    const chatRoom = new ChatRoom(id, name, []);
    await this.chatRoomRepository.save(chatRoom);
    return chatRoom;
  }
}

export { CreateChatRoom }