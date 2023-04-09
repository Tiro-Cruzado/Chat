import { UserAvatarServiceDicebear } from "../service/impl/UserAvatarServiceDicebear"
import { UserAvatarServiceWithCaching } from "../service/impl/UserAvatarServiceWithCaching"
import { IUserAvatarService } from "../service/IUserAvatarService";


export default (): IUserAvatarService => {
  return UserAvatarServiceWithCaching.getInstance(
    UserAvatarServiceDicebear.getInstance()
  );
}