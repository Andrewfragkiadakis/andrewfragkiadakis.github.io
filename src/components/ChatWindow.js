// src/components/ChatWindow.js
import React, { useState, useEffect, useRef } from 'react';

const ChatWindow = ({ messages, onSendMessage, isChatOpen, onClose, t_chatbot }) => {
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSendMessage(userInput.trim());
      setUserInput('');
    }
  };

  if (!isChatOpen) {
    return null;
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>Chat with AI Assistant</span>
        <button onClick={onClose} className="close-chat-btn" aria-label="Close Chat">&times;</button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p dangerouslySetInnerHTML={{ __html: msg.text }} />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={t_chatbot?.inputPlaceholder || "Ask something..."}
          aria-label="Chat input"
        />
        <button type="submit" aria-label="Send Message">
            <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;