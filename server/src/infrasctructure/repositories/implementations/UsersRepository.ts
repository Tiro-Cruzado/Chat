import { User } from "../../../domain/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): IUsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  public addUser(user: User){
    if(user.id &&  this.getUser(user.id)){
      throw new Error("User already exists");
    }

    this.users.push(user);
  }

  public getUser(userId: string){
    return this.users.find(({id}) => userId === id);
  }
}

export { UsersRepository };
