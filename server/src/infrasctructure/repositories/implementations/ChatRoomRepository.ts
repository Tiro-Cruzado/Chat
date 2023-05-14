import { ChatRoom } from "../../../domain/entities/ChatRoom";
import { IChatRoomRepository } from "../IChatRoomRepository";

class ChatRoomRepository implements IChatRoomRepository {
  private chatRooms: ChatRoom[];
  private static INSTANCE: ChatRoomRepository;

  constructor() {
    this.chatRooms = []
  }

  static getInstance(): ChatRoomRepository {
    if (!ChatRoomRepository.INSTANCE) {
      ChatRoomRepository.INSTANCE = new ChatRoomRepository();
    }

    return ChatRoomRepository.INSTANCE;
  }

  save(chatRoom: ChatRoom): void {
    this.chatRooms.push(chatRoom);
  }

  getAll(): ChatRoom[] {
    return [...this.chatRooms]
  }

  findById(id: string): ChatRoom | undefined {
    const chatRoomFound = this.chatRooms.find((chatRoom) => chatRoom.id === id)

    return chatRoomFound;
  }

}



export { ChatRoomRepository }