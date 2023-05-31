import { DICEBEAR_STYLE_OPTIONS } from "../../constants";
import { IGenerateUserAvatar } from "./IGenerateUserAvatar";

abstract class AbstractGenerateUserAvatar implements IGenerateUserAvatar {
  public abstract executeSpecificStyle(
    userName: string,
    styleName: string
  ): Promise<string | null>;

  public execute(userName: string): Promise<string | null> {
    const stylePosition = this.randomPosition(DICEBEAR_STYLE_OPTIONS.length);
    return this.executeSpecificStyle(
      userName,
      DICEBEAR_STYLE_OPTIONS[stylePosition]
    );
  }

  private randomPosition = (size: number): number =>
    Math.floor(Math.random() * (size - 1));
}

export { AbstractGenerateUserAvatar };
