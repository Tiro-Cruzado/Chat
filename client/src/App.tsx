import React from 'react';
import { Avatar } from './components/Avatar';
import { Button } from './components/Button';
import { ChatInput } from './components/ChatInput';
import { Header } from './components/Header';
import { HistoricConversations } from './components/HistoricConversations';
import { Message } from './components/Message';
import { MessagesList } from './components/MessagesList';
import { Profile } from './components/Profile';

function App() {
  return (
   <>
    <h1>New World!</h1>
    <Avatar/>
    <Button/>
    <ChatInput/>
    <Header/>
    <HistoricConversations/>
    <Message/>
    <MessagesList/>
    <Profile/>
   </>
  );
}

export default App;
