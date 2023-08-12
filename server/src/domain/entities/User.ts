import { v4 as uuidV4 } from "uuid";

class User {
  id: string;
  name: string;
  image?: string;

  constructor(name: string, image?: string, id?: string) {
    this.id = id || uuidV4();
    this.name = name;
    this.image = image;
  }
}

export { User };
