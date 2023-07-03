import NodeCache, { Key } from "node-cache";
import { AVATAR_CACHE_CONFIG } from "../../constants";
import { AbstractGenerateUserAvatar } from "./AbstractGenerateUserAvatar";

class GenerateUserAvatarWithCaching extends AbstractGenerateUserAvatar {
  private static INSTANCE: GenerateUserAvatarWithCaching;

  private readonly cache: NodeCache;
  private readonly realUseCase: AbstractGenerateUserAvatar;

  private constructor(generateUserAvatar: AbstractGenerateUserAvatar) {
    super();
    this.realUseCase = generateUserAvatar;
    this.cache = new NodeCache(AVATAR_CACHE_CONFIG);
  }

  public static getInstance(
    generateUserAvatar: AbstractGenerateUserAvatar
  ): GenerateUserAvatarWithCaching {
    if (!GenerateUserAvatarWithCaching.INSTANCE) {
      GenerateUserAvatarWithCaching.INSTANCE =
        new GenerateUserAvatarWithCaching(generateUserAvatar);
    }
    return GenerateUserAvatarWithCaching.INSTANCE;
  }

  public async executeSpecificStyle(
    userName: string,
    styleName: string
  ): Promise<string | null> {
    const cacheKey = this.buildKey(userName, styleName);
    const avatarFromCache = this.cache.get(cacheKey) as string;

    if (avatarFromCache) {
      return Promise.resolve(avatarFromCache);
    }

    const avatar = await this.realUseCase.executeSpecificStyle(
      userName,
      styleName
    );
    if (avatar) {
      this.cache.set(cacheKey, avatar);
    }

    return Promise.resolve(avatar);
  }

  private buildKey = (userName: string, styleName: string): Key =>
    `${userName}_${styleName}`;
}

export { GenerateUserAvatarWithCaching };
