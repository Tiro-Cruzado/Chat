interface IGenerateUserAvatar {
  execute: (userName: string) => Promise<string | null>;
}

export { IGenerateUserAvatar };
