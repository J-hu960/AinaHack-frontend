// pages/ChatBot.tsx
import React, { useEffect, useState } from 'react';
import './ChatBot.css';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner'; // Importa el spinner que más te guste


interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error,setError] = useState<boolean>(false)
  const [loading,setLoading] = useState<boolean>(false)
  const [input, setInput] = useState<string>('');
  const chatEndRef = document.getElementById('reference')

  const handleSendMessage = async() => {
    setLoading(true)
    try {
      const userMessage: Message = { text:input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const response = await axios.post('http://localhost:8000/cb/query', {question:input})
      console.log(response.data)
      //hacer call a endpoint
      if (input.trim() === '') return;
      const botMessage: Message = { text:response.data.answer, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Add user message to the chat
  
      // Clear input field
      setInput('');
  
      // Add bot response (here we just simulate a bot response)
      
      
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
   
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
          {loading && <ThreeDots />}
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
