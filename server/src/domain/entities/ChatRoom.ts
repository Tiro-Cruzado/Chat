import { v4 as uuidV4 } from "uuid";

import { ChatMessage } from "./ChatMessage";

class ChatRoom {
  id: string;
  name: string;
  users: string[];
  messages: ChatMessage[];
  createdAt: Date;

  constructor(name: string, users: string[] = [], id?: string) {
    this.id = id || uuidV4();
    this.name = name;
    this.users = users || [];
    this.messages = [];
    this.createdAt = new Date()
  }

  isUserInTheRoom(userId: string) {
    return this.users.some((userIdInRoom) => userIdInRoom === userId)
  }

  addMessage(message: ChatMessage) {
    this.messages.push(message)
  }

  addUser(userId: string) {
    if (!this.isUserInTheRoom(userId)) {
      this.users.push(userId)
    }
  }
}

export { ChatRoom };
