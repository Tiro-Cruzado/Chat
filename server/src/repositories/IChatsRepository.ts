import { Message } from "../models/Message";

interface IChatsRepository{
    addUserToChat: (userId: string, chatId: string) => void;
    addMessage: (chatId: string, message: Message) => void;
}

export { IChatsRepository }