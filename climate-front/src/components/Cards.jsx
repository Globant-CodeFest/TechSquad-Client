import React from 'react';
import ActionAreaCard from "./Card";

const Cards = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <ActionAreaCard
          key={index}
          message={message.content}
          type={message.type}
        />
      ))}  
    </div>
  );
};

export default Cards;
