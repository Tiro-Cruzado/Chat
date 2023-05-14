import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;

  constructor(name: string, id?: string) {
    this.id = id || uuidV4();
    this.name = name
  }
}

export { User };
