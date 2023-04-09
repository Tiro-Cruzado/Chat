import { Request, Response } from "express";
import { createUserAvatarService } from "../../factory";
import { IUserAvatarService } from "../../service/IUserAvatarService";


export const generateUserAvatar = async (req: Request, res: Response) => {
    const userAvatarService: IUserAvatarService = createUserAvatarService();

    try{
        const name = req.query.name as string;
        const avatarImage = await userAvatarService.getUserAvatar(name);

        if(avatarImage){
            res.type("image/svg+xml").send(avatarImage);
        } else {
            res.sendStatus(400);
        }
        
        
    } catch (err) {
        res.status(500).send(err);
    }
}