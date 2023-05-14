import { v4 as uuidV4 } from "uuid";

import { ChatMessage } from "./ChatMessage";
import { User } from "./User";

class ChatRoom {
  id: string;
  name: string;
  user: User[];
  messages: ChatMessage[];
  creationDate: Date = new Date();

  constructor(name: string, id?: string) {
    this.id = id || uuidV4();
    this.name = name;
    this.user = [];
    this.messages = [];
  }
}

export { ChatRoom };
