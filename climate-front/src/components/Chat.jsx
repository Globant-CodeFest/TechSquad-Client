import React, { useState } from 'react';
import InputText from './InputText';
import Cards from './Cards';

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ content: 'Bienvenido a SafeTravel. Te ayudare a encontrar informacion sobre desastres naturales. Puedes realizar tu consulta en lenguaje natural.', timestamp: new Date().toLocaleTimeString(), type: 'Initial'}]);

  const fetchData = async (message) => {
    try {
      setLoading(true);
      const response = await fetch('http://10.21.40.115:3000/v1/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Si necesitas enviar algún dato en el cuerpo de la solicitud, puedes hacerlo de esta manera:
        body: JSON.stringify({ query: message }),
      });
      setLoading(false);
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const data = await response.json();
      console.log(data); // Aquí puedes hacer algo con los datos recibidos
  
      console.log(messages)
      const newMessage = {
        content: data.response,
        timestamp: new Date().toLocaleTimeString(),
        type: 'Answer'
      };

      setMessages(prevMessages => {
        const newMessages = [...prevMessages, newMessage];
        console.log(newMessages); // Aquí puedes hacer algo con los nuevos mensajes
        return newMessages;
      });
     
    } catch (error) {
      console.error(error);
    }
  };
  
  // Llama a la función para realizar la solicitud

  const handleMessageSubmit = (message) => {
    const newMessage = {
      content: message,
      timestamp: new Date().toLocaleTimeString(),
      type: 'Question'
    };
    setMessages([...messages, newMessage]);

    fetchData(message);
  };

  return (
    <div className="chat" style={{ height: '100%', width: '60%', display:'flex', justifyContent: 'space-between', flexDirection:'column', marginBottom: '32px'}}>
      <Cards messages={messages} />
      <InputText onSubmit={handleMessageSubmit} loading={loading}/>
    </div>
  );
};

export default Chat;
