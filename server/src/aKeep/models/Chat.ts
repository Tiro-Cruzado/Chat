import { v4 as uuidV4 } from "uuid";
import { Message } from "./Message";

class Chat {
  id: string;
  name: string;
  userIds: string[];
  messages: Message[];
  creationDate: Date;

  constructor(name: string, creationDate: Date, id?:string) {
    this.id = id || uuidV4();
    this.name = name;
    this.creationDate = creationDate;
    this.userIds = [];
    this.messages = [];
  }
}

export { Chat };
