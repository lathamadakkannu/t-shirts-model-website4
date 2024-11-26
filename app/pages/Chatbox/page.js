"use client";

import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai"; // Open chat icon
import { IoClose } from "react-icons/io5"; // Close chat icon

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: "user", text: userInput },
      ];

      // Get bot response based on user input
      const botResponse = getBotResponse(userInput);

      setMessages(newMessages);
      setIsTyping(true);

      // Simulate bot typing and response delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botResponse },
        ]);
        setIsTyping(false);
      }, 1000);

      setUserInput("");
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    // Prioritize specific conditions
    if (message.includes("t-shirt") || message.includes("tshirt")) {
      if (message.includes("size")) {
        return "We have T-shirts available in sizes Small, Medium, Large, and Extra Large. Which size are you looking for?";
      }
      if (message.includes("color")) {
        return "Our T-shirts come in a variety of colors including red, blue, black, white, and green. Which color would you like?";
      }
      if (message.includes("price")) {
        return "Our T-shirts start at $20. Are you looking for a specific style or budget?";
      }
      if (message.includes("availability")) {
        return "T-shirts are in stock! Let me know your size and color preference to check specific availability.";
      }
      return "We have a great collection of T-shirts! Let me know if you're looking for a specific size, color, or style.";
    }

    if (message.includes("hello") || message.includes("hi")) {
      return "Hi there! How can I assist you today?";
    }
    if (message.includes("help")) {
      return "I'm here to assist you with any questions. How can I help you?";
    }
    if (message.includes("bye") || message.includes("goodbye")) {
      return "Goodbye! Have a great day!";
    }

    return `You asked: "${userMessage}". Unfortunately, I don't have an answer for that yet, but I am constantly learning!`;
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleChatbox} className="toggle-button">
        {isOpen ? <IoClose size={24} /> : <AiFillMessage size={24} />}
      </button>

      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <AiFillMessage /> 
            <span>Chat with us</span>
          </div>
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
              >
                <p>{message.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="bot-typing">
                <p>Typing...</p>
              </div>
            )}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
