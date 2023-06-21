import { ChatRoom } from "../../../domain/entities/ChatRoom";
import { ChatMessage } from "../../../domain/entities/ChatMessage";
import { IChatsRepository } from "../IChatsRepository";

class ChatsRepository implements IChatsRepository {
    private chats: ChatRoom[];
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
        chat.users.push(userId);
    }

    public addMessage(chatId: string, message: ChatMessage){
        const chat = this.getChatWithValidation(chatId);
        chat.messages.push(message);
    }

    private getChat(chatId: string):ChatRoom|undefined {
        return this.chats.find(({id}) => id === chatId);
    }

    private getChatWithValidation(chatId: string):ChatRoom{
        const chat = this.getChat(chatId);
        if(!chat){
            throw new Error(`Chat ${chatId} doesn't exist.`)
        }
        return chat;
    }
}


export { ChatsRepository }