import { ChatRoom } from "../../domain/entities/ChatRoom";

interface IChatRoomRepository {
  save(chatRoom: ChatRoom): void;
  getAll(): ChatRoom[];
  // Validar sobre o undefined
  findById(id: string): ChatRoom | undefined;
}

export { IChatRoomRepository }
