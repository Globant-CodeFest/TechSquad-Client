import React from 'react';
import { Card } from './Card';

const Cards = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <Card
          key={index}
          message={message.content}
          author={message.author}
        />
      ))}
    </div>
  );
};

export default Cards;
