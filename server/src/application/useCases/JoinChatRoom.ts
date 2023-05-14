class JoinChatRoom {
  constructor(chatRoomRepository) {
    this.chatRoomRepository = chatRoomRepository;
  }

  async execute(chatRoomId: string, userId: string) {
    const chatRoom = await this.chatRoomRepository.findById(chatRoomId);
    chatRoom.addUser(userId);
    await this.chatRoomRepository.save(chatRoom);
  }
}