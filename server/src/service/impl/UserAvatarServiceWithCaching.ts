import NodeCache, { Key } from "node-cache";
import { AVATAR_CACHE_CONFIG } from "../../constants";
import { AbstractUserAvatarService } from "../AbstractUserAvatarService";

class UserAvatarServiceWithCaching extends AbstractUserAvatarService {

  private static INSTANCE: UserAvatarServiceWithCaching;

  private readonly cache: NodeCache
  private readonly realUserAvatarService: AbstractUserAvatarService;

  private constructor(userAvatarService: AbstractUserAvatarService){
    super();
    this.realUserAvatarService = userAvatarService;
    this.cache = new NodeCache(AVATAR_CACHE_CONFIG);
  }
  
  public static getInstance(userAvatarService: AbstractUserAvatarService): UserAvatarServiceWithCaching {
    if(!UserAvatarServiceWithCaching.INSTANCE){
      UserAvatarServiceWithCaching.INSTANCE = new UserAvatarServiceWithCaching(userAvatarService);
    }
    return UserAvatarServiceWithCaching.INSTANCE;
  }

  public async getUserAvatarEspecificStyle(userName: string, styleName: string): Promise<string | null> {

    const cacheKey = this.buildKey(userName, styleName);
    const avatarFromCache = this.cache.get(cacheKey) as string;

    if(avatarFromCache){
      return Promise.resolve(avatarFromCache);
    }
    
    const avatar = await this.realUserAvatarService.getUserAvatarEspecificStyle(userName, styleName);
    if(avatar){
      this.cache.set(cacheKey, avatar);
    }

    return Promise.resolve(avatar);
  }

  private buildKey = (userName: string, styleName: string): Key => `${userName}_${styleName}`;
}

export { UserAvatarServiceWithCaching }
