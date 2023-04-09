import { DICEBEAR_STYLE_OPTIONS } from "../constants";
import { IUserAvatarService } from "./IUserAvatarService";


abstract class AbstractUserAvatarService implements IUserAvatarService {

  public abstract getUserAvatarEspecificStyle(userName: string, styleName: string): Promise<string | null>; 
    
  public getUserAvatar(userName: string): Promise<string | null> {

    const stylePosition = this.randomPosition(DICEBEAR_STYLE_OPTIONS.length);
    return this.getUserAvatarEspecificStyle(userName, DICEBEAR_STYLE_OPTIONS[stylePosition]);
  };


  private randomPosition = (size: number): number => Math.floor(Math.random() * size-1);
}


export { AbstractUserAvatarService }