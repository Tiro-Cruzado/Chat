
interface IUserAvatarService {

  getUserAvatar: (userName: string) => Promise<string | null>;
}

export { IUserAvatarService };