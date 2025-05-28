// src/components/ChatbotIcon.js
import React from 'react';

const ChatbotIcon = ({ onClick, isChatOpen }) => {
  return (
    <button 
      className={`chatbot-icon ${isChatOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label={isChatOpen ? "Close Chat" : "Open Chat"}
      title={isChatOpen ? "Close Chat" : "Open Chat"}
    >
      {/* Using Font Awesome icons, ensure you have them linked or installed */}
      <i className={`fas ${isChatOpen ? 'fa-times' : 'fa-comments'}`}></i>
    </button>
  );
};

export default ChatbotIcon;