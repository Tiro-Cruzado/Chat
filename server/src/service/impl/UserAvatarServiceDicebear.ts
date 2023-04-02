import axios, { AxiosInstance } from "axios";
import { AbstractUserAvatarService } from "../AbstractUserAvatarService";


class UserAvatarServiceDicebear extends AbstractUserAvatarService {

  private axiosInstance: AxiosInstance;

  constructor(){
    super();

    this.axiosInstance = axios.create({
      baseURL: process.env.DICEBEAR_API_URL || ""
    })
  }

  protected getUserAvatarEspecificStyle(userName: string, styleName: string): Promise<string | null> {
        
    return this.axiosInstance.get(`/${styleName}/svg?seed=${userName}`)
      .then(response => response.data as string)
      .catch(err => {
        console.error(err);
        return null;
    	});
  }
}

export { UserAvatarServiceDicebear }