import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;

  constructor(id?: string) {
    this.id = id || uuidV4();
  }
}

export { User };
