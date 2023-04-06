import axios, { AxiosInstance } from "axios";
import { AbstractUserAvatarService } from "../AbstractUserAvatarService";


class UserAvatarServiceDicebear extends AbstractUserAvatarService {

  private static INSTANCE: UserAvatarServiceDicebear;

  private axiosInstance: AxiosInstance;

  private constructor(){
    super();

    this.axiosInstance = axios.create({
      baseURL: process.env.DICEBEAR_API_URL || ""
    })
  }

  public static getInstance(): UserAvatarServiceDicebear {
    if(!UserAvatarServiceDicebear.INSTANCE){
      UserAvatarServiceDicebear.INSTANCE = new UserAvatarServiceDicebear();
    }
    return UserAvatarServiceDicebear.INSTANCE;
  }

  public getUserAvatarEspecificStyle(userName: string, styleName: string): Promise<string | null> {
        
    return this.axiosInstance.get(`/${styleName}/svg?seed=${userName}`)
      .then(response => response.data as string)
      .catch(err => {
        console.error(err);
        return null;
    	});
  }
}

export { UserAvatarServiceDicebear }