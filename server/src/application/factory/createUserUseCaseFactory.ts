import { UsersRepository } from "../../infrasctructure/repositories/implementations/UsersRepository";
import { CreateUser } from "../useCases/CreateUser";

export default (): CreateUser => {
  return new CreateUser(UsersRepository.getInstance());
};
