
interface IUsersAvatarService {

  getUserAvatar: (userName: string) => Promise<string | null>;
}

export { IUsersAvatarService };