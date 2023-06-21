import { User } from "../../domain/entities/User";

interface IUsersRepository {
    addUser: (user: User) => void;
    getUser: (userId: string) => User | undefined;
}

export { IUsersRepository };
