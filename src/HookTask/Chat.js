import React, { useContext, useEffect, useState } from 'react';
import { ChatContext, UserContext } from '../App';

const Chat = () => {
    const { user } = useContext(UserContext);
    const { messages, dispatch } = useContext(ChatContext);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const randomMessages = [
                { user: 'Alice', text: 'Hello!' },
                { user: 'Bob', text: 'How are you?' },
                { user: 'Charlie', text: 'What\'s up?' },
            ];
            const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
            dispatch({ type: 'ADD_MESSAGE', payload: randomMessage });
        }, 5000);

        return () => clearInterval(interval);
    }, [dispatch]);

    const handleSendMessage = () => {
        if (message.trim()) {
            dispatch({ type: 'ADD_MESSAGE', payload: { user: user.name, text: message } });
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <strong>{msg.user}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div className="input-group">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
