// pages/ChatBot.tsx
import React, { useEffect, useState } from 'react';
import './ChatBot.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const chatEndRef = document.getElementById('reference')

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    // Add user message to the chat
    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Clear input field
    setInput('');

    // Add bot response (here we just simulate a bot response)
    setTimeout(() => {
      const botResponse: Message = { text: `Bot: I received your message: "${input}"`, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const scrollToBottom = () => {
    chatEndRef?.scrollIntoView({ behavior: 'smooth' });
  };

  // Efecto que hace scroll cuando cambian los mensajes
  useEffect(() => {
    if(messages && messages.length>4){
      scrollToBottom();
    }
    
  }, [messages]); 


  return (
    <div className="chatbot-container">
      <div className='chat-outer-box'>
      <div className="chatbox">
        <div className="messages">
          {messages && messages.length>0 && messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender}`}
            >
              <p>{message.text}</p>
            </div>
          ))}
          {!messages || messages.length === 0 && <div
             
              className={`message bot`}
            >
              <p>Inicia una nova conversa</p>
            </div>}
          <div className='reference' id='reference'></div>
        </div>
        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ChatBot;
