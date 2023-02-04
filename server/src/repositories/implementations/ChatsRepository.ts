import { Chat } from "../../models/Chat";
import { Message } from "../../models/Message";
import { IChatsRepository } from "../IChatsRepository";

class ChatsRepository implements IChatsRepository {
    private chats: Chat[];
    private static INSTANCE: ChatsRepository;

    private constructor() {
        this.chats = [];
    }

    public static getInstance(): IChatsRepository {
        if (!ChatsRepository.INSTANCE) {
            ChatsRepository.INSTANCE = new ChatsRepository();
        }
    
        return ChatsRepository.INSTANCE;
    }

    public addUserToChat(userId: string, chatId: string){
        const chat = this.getChatWithValidation(chatId);
        chat.userIds.push(userId);
    }

    public addMessage(chatId: string, message: Message){
        const chat = this.getChatWithValidation(chatId);
        chat.messages.push(message);
    }

    private getChat(chatId: string):Chat|undefined {
        return this.chats.find(({id}) => id === chatId);
    }

    private getChatWithValidation(chatId: string):Chat{
        const chat = this.getChat(chatId);
        if(!chat){
            throw new Error(`Chat ${chatId} doesn't exist.`)
        }
        return chat;
    }
}


export { ChatsRepository }