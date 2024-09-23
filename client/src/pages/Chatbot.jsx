import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Fetch chat history on load
        const fetchChatHistory = async () => {
            try {
                const res = await axios.get('/api/chat/history');
                setMessages(res.data.data); 
            } catch (error) {
                console.error('Error fetching chat history:', error);
            }
        };
        fetchChatHistory();
    }, []);

    const sendMessage = async () => {
        if (input.trim() === '') return;
        try {
            const res = await axios.post('/api/chat/send-message', {
                userMessage: input,
            });

            // Add user message and bot response to state
            setMessages((prevMessages) => [
                ...prevMessages,
                { userMessage: input, botResponse: res.data.message }, // Ensure you are accessing 'message' from backend response
            ]);

            setInput('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Chatbot</h2>
            <div className="chat-box h-96 w-full bg-white border border-gray-300 rounded-lg overflow-y-scroll p-4 mb-4">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message mb-4">
                        <div className="user-message bg-gray-200 rounded-lg p-3 mb-2 max-w-xs self-start">
                            <p className="text-sm text-gray-700"><strong>User:</strong> {msg.userMessage}</p>
                        </div>
                        <div className="bot-message bg-blue-100 rounded-lg p-3 max-w-xs self-end">
                            <p className="text-sm text-gray-700"><strong>Finance Fix:</strong> {msg.botResponse}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex w-full">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                    className="flex-grow border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                />
                <button
                    className="ml-3 bg-blue-500 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
