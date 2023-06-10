import React from 'react';
import ActionAreaCard from "./Card";

const Cards = ({ messages }) => {
  return (
    <div>
      {/* {messages.map((message, index) => (
        <Card
          key={index}
          message={message.content}
          author={message.author}
        />
      ))} */}
      <ActionAreaCard />
    </div>
  );
};

export default Cards;
