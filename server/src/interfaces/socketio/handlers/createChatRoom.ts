import { Socket } from 'socket.io';

import { CreateChatRoom } from '../../../application/useCases/CreateChatRoom';
import { ChatRoomRepository } from '../../../infrasctructure/repositories/implementations/ChatRoomRepository';

export const createChatRoomHandler = (chatRoomRepository: ChatRoomRepository) => (
  async (socket: Socket, name: string, users: string[]) => {
    if (!name) {
      socket.emit('error', 'Please provide a name for this chat room')
      return;
    }

    try {
      const createChatRoomUseCase = new CreateChatRoom(chatRoomRepository);
      const chatRoom = await createChatRoomUseCase.execute(name, users);
      console.log('chatRoom', chatRoom)

      socket.emit('chatRoomCreated', chatRoom);
    } catch (error) {
      socket.emit('error', 'Failed to create a chat room.')
    }
  }
)
