class SendChatMessage {
  constructor(chatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository
  }

  async execute(chatRoomId, userId, message) {
    const chatRoom = await this.chatRoomRepository.findById(chatRoomId);
    const user = chatRoom.findUserById(userId);

    if (!user) {
      throw new Error('User not found in the chat room');
    }

    const newMessage = {
      user: userId,
      text: message,
      timestamp: new Date().toISOString()
    };

    chatRoom.addMessage(newMessage);
    await this.chatRoomRepository.save(chatRoom);
  }
}