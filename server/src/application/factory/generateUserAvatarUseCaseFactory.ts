import { GenerateUserAvatarDicebear } from "../useCases/userAvatar/GenerateUserAvatarDicebear";
import { GenerateUserAvatarWithCaching } from "../useCases/userAvatar/GenerateUserAvatarWithCaching";
import { IGenerateUserAvatar } from "../useCases/userAvatar/IGenerateUserAvatar";

export default (): IGenerateUserAvatar => {
  return GenerateUserAvatarWithCaching.getInstance(
    GenerateUserAvatarDicebear.getInstance()
  );
};
