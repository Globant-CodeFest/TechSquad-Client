import React, { useState } from 'react';
import InputText from './InputText';
import Cards from './Cards';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (message) => {
    const newMessage = {
      content: message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat" style={{ height: '100%', display:'flex', justifyContent: 'space-between', flexDirection:'column', marginBottom: '32px'}}>
      <Cards messages={messages} />
      <InputText onSubmit={handleMessageSubmit} />
    </div>
  );
};

export default Chat;
