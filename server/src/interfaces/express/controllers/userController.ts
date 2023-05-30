import { Request, Response } from "express";
import { createGenerateUserAvatarUseCase } from "../../../application/factory";
import { IGenerateUserAvatar } from "../../../application/useCases/userAvatar/IGenerateUserAvatar";

interface IGenerateUserAvatarRequest extends Request {
  query: {
    name: string;
  };
}

export const generateUserAvatar = async (
  request: IGenerateUserAvatarRequest,
  response: Response
) => {
  const gernerateUserAvatar: IGenerateUserAvatar = createGenerateUserAvatarUseCase();

  try {
    const { name } = request.query;

    if (!name || name === "") {
      return response
        .status(400)
        .json({ error: "Missing required parameter 'name'" });
    }

    const avatarImage = await gernerateUserAvatar.execute(name);

    if (avatarImage) {
      return response.type("image/svg+xml").send(avatarImage);
    } else {
      return response
        .status(400)
        .json({ error: "The 'name' parameter is not valid" });
    }
  } catch (err) {
    return response.status(500).send(err);
  }
};
