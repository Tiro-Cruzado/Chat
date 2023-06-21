import { v4 as uuidV4 } from "uuid";

class ChatMessage {
  id: string;
  userId: string;
  content: string;
  dateTime: Date = new Date();

  constructor(userId: string, content: string, id?: string) {
    this.id = id || uuidV4();
    this.content = content;
    this.userId = userId;
  }
}

export { ChatMessage };
