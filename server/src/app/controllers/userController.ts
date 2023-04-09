import { Request, Response } from "express";

export const generateUserAvatar = async (req: Request, res: Response) => {
    try{
        //TODO: Call user avatar service
        res.send("OK!");

    } catch (err) {
        res.status(500).send(err);
    }
}