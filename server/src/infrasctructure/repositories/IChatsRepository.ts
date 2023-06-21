import { ChatMessage } from "../../domain/entities/ChatMessage";

interface IChatsRepository{
    addUserToChat: (userId: string, chatId: string) => void;
    addMessage: (chatId: string, message: ChatMessage) => void;
}

export { IChatsRepository }