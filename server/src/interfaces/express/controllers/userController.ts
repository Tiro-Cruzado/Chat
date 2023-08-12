import { Request, Response } from "express";
import {
  createGenerateUserAvatarUseCase,
  createUserUseCase,
} from "../../../application/factory";
import { IGenerateUserAvatar } from "../../../application/useCases/userAvatar/IGenerateUserAvatar";

interface IGenerateUserAvatarRequest extends Request {
  query: {
    name: string;
  };
}

interface ICreateUserAvatarRequest extends Request {
  query: {
    name: string;
    image: string;
  };
}

export const generateUserAvatar = async (
  request: ICreateUserAvatarRequest,
  response: Response
) => {
  const gernerateUserAvatar: IGenerateUserAvatar =
    createGenerateUserAvatarUseCase();

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

export const createUser = async (
  request: IGenerateUserAvatarRequest,
  response: Response
) => {
  if (!request.body) {
    return response.status(400).json({ error: "Missing request body" });
  }

  const { name, image } = request.body;

  if (!stringFieldValid(name)) {
    return response.status(400).json({ error: "Invalid user name" });
  }

  if (!stringFieldValid(image)) {
    return response.status(400).json({ error: "Invalid user image" });
  }

  return createUserUseCase()
    .execute(name, image)
    .then((userId) => response.status(200).json({ userId }))
    .catch((err) => response.status(500).json({ error: err.message }));
};

const stringFieldValid = (value: string): boolean => {
  return (value || "").trim().length > 0;
};
