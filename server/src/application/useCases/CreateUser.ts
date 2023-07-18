import { User } from "../../domain/entities/User";
import { IUsersRepository } from "../../infrasctructure/repositories/IUsersRepository";

class CreateUser {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute = async (userName: string, image: string): Promise<string> => {
    const user = new User();
    user.name = userName;
    user.image = image;

    this.usersRepository.addUser(user);

    return user.id;
  };
}

export { CreateUser };
