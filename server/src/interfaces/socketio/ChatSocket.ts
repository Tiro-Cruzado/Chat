import { Server, Socket } from 'socket.io';

import { ChatRoomRepository } from '../../infrasctructure/repositories/implementations/ChatRoomRepository';

import { createChatRoomHandler } from './handlers/createChatRoom';
import { joinChatRoomHandler } from './handlers/joinChatRoom';
import { sendChatMessageHandler } from './handlers/sendChatMessage';

class ChatSocket {
  private io: Server;
  private chatRoomRepository: ChatRoomRepository;
  private eventHandlers: Map<string, ((socket: Socket, ...args: any[]) => Promise<void>)[]>;

  constructor(io: Server, chatRoomRepository: ChatRoomRepository) {
    this.io = io;
    this.chatRoomRepository = chatRoomRepository;
    this.eventHandlers = new Map();
  }

  on(event: string, handler: (socket: Socket, ...args: any[]) => Promise<void>) {
    if (this.eventHandlers.has(event)) {
      const eventFound = this.eventHandlers.get(event)

      if (eventFound) {
        eventFound.push(handler);
      }
    } else {
      this.eventHandlers.set(event, [handler]);
    }
  }

  private setUpHandlers() {
    this.on('createChatRoom', createChatRoomHandler(this.chatRoomRepository));
    this.on('joinChatRoom', joinChatRoomHandler(this.io))
    this.on('sendChatMessage', sendChatMessageHandler(this.io, this.chatRoomRepository));
  }

  init() {
    this.setUpHandlers()

    this.io.on('connection', (socket: Socket) => {
      console.log('A user connected:', socket.id);

      this.eventHandlers.forEach((handlers, event) => {
        socket.on(event, async (...args: any[]) => {
          for (const handler of handlers) {
            await handler(socket, ...args);
          }
        });
      });

      socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
      });
    });
  }
}

export { ChatSocket }