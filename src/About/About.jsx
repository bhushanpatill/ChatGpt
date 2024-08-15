import React, { useState, useEffect } from "react";
import chatgptlogo from '../assets/chatgptlogo.png'
import chatgptlogo2 from '../assets/chatgptlogo2.png'
import './About.css';

const RightSection = () => {
  const [message, setMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  const sendMessage = async () => {
    const url = "https://api.openai.com/v1/chat/completions";
  
    const token = `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
    console.log(token);
    const model = "gpt-3.5-turbo";
    const messagesToSend = [
      ...allMessages,
      {
        role: "user",
        content: message,
      },
    ];
    
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: model,
          messages: messagesToSend,
        }),
      });

      const resjson = await res.json();

      if (resjson) {
        const newAllMessages = [
          ...messagesToSend,
          resjson.choices[0].message,
        ];
        setAllMessages(newAllMessages);
        setMessage('');
      }
    } 
    catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="rightSection">
      <div className="chatgptversion">
        <p className="text1">ChatGPT 3.5</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {allMessages.length > 0 ? (
        <div className="messages">
          {allMessages.map((msg, index) => (
            <div key={index} className="message">
              <img
                src={msg.role === 'user' ? "/path/to/userlogo" : chatgptlogo2} // Adjust the path
                width={50}
                height={50}
                alt=""
              />
              <div className="details">
                <h2>{msg.role === 'user' ? 'You' : 'ChatGPT'}</h2>
                <p>{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="nochat">
          <div className="s1">
            <img src={chatgptlogo} alt="Chatgpt" height={70} width={70} />
            <h1>How Can I help you today?</h1>
          </div>
          <div className="s2">
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>Psychology behind decision-making</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>Psychology behind decision-making</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>Psychology behind decision-making</p>
            </div>
            <div className="suggestioncard">
              <h2>Recommend activities</h2>
              <p>Psychology behind decision-making</p>
            </div>
          </div>
        </div>
      )}

      <div className="bottomsection">
        <div className="messagebar">
          <input
            type="text"
            placeholder="Message ChatGPT.."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <svg
            onClick={sendMessage}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </div>
        <p>ChatGPT can make mistakes. Consider checking important information.</p>
      </div>
    </div>
  );
};

export default RightSection;

