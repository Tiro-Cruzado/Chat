import axios, { AxiosInstance } from "axios";
import { AbstractGenerateUserAvatar } from "./AbstractGenerateUserAvatar";

class GenerateUserAvatarDicebear extends AbstractGenerateUserAvatar {
  private static INSTANCE: GenerateUserAvatarDicebear;
  private axiosInstance: AxiosInstance;

  private constructor() {
    super();

    this.axiosInstance = axios.create({
      baseURL: process.env.DICEBEAR_API_URL || "",
    });
  }

  public static getInstance(): GenerateUserAvatarDicebear {
    if (!GenerateUserAvatarDicebear.INSTANCE) {
      GenerateUserAvatarDicebear.INSTANCE = new GenerateUserAvatarDicebear();
    }

    return GenerateUserAvatarDicebear.INSTANCE;
  }

  public executeSpecificStyle = (
    userName: string,
    styleName: string
  ): Promise<string | null> =>
    this.axiosInstance
      .get(`/${styleName}/svg?seed=${userName}`)
      .then((response) => response.data as string)
      .catch((err) => {
        console.error(err);
        return null;
      });
}

export { GenerateUserAvatarDicebear };
