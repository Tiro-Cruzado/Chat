import { v4 as uuidV4 } from "uuid";

class Message {
  id: string;
  userId: string;
  content: string;
  dateTime: Date;

  constructor(userId: string, dateTime: Date, id?:string) {
    this.id = id || uuidV4();
    this.userId = userId;
    this.dateTime = dateTime;
  }
}

export { Message };
