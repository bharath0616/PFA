import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showHistory, setShowHistory] = useState(false); // State to toggle chat history visibility

    // Refs for input focus and scrolling to bottom
    const inputRef = useRef(null);
    const chatBoxRef = useRef(null);

    useEffect(() => {
        // Fetch chat history on load, but don't display it immediately
        const fetchChatHistory = async () => {
            try {
                const res = await axios.get('/api/chat/history');
                setMessages(res.data.data); 
            } catch (error) {
                console.error('Error fetching chat history:', error);
            }
        };

        // Focus on the input box when the page loads
        if (inputRef.current) {
            inputRef.current.focus();
        }
        fetchChatHistory();
    }, []);

    useEffect(() => {
        // Scroll to the bottom of the chat box when messages update
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (input.trim() === '') return;
        const tempUserMessage = input; // Store the user message before clearing the input
        setInput(''); // Clear the input field immediately for better user experience
    
        // Optimistically add the user's message to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { userMessage: tempUserMessage, botResponse: 'Typing...' } // Temporary response until the bot replies
        ]);
    
        try {
            const res = await axios.post('/api/chat/send-message', {
                userMessage: tempUserMessage,
            });
    
            // Update the latest message with the actual bot response
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages];
                updatedMessages[updatedMessages.length - 1].botResponse = res.data.message;
                return updatedMessages;
            });
    
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { userMessage: tempUserMessage, botResponse: 'Error sending message.' }
            ]);
        }
    };

    // Function to toggle chat history visibility
    const toggleHistory = () => {
        setShowHistory((prevShowHistory) => !prevShowHistory);
    };

    return (
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-xl p-6 shadow-2xl mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Chatbot</h2>

            {/* Button to toggle chat history */}
            <button
                className="mb-4 bg-gray-700 text-gray-100 rounded-lg px-4 py-2 text-sm hover:bg-gray-600 transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={toggleHistory}
            >
                {showHistory ? 'Hide History' : 'Show History'}
            </button>

            <div ref={chatBoxRef} className="chat-box h-96 w-full bg-gray-800 bg-opacity-30 backdrop-blur-lg border border-gray-600 rounded-lg overflow-y-auto p-4 mb-4 shadow-inner transition-all duration-300">
                {/* Display history only if showHistory is true */}
                {showHistory ? (
                    <>
                        <h4 className="text-gray-400 text-sm mb-4">Chat History</h4>
                        {messages.slice().reverse().map((msg, index) => (
                            <div key={index} className="chat-message mb-4">
                                <div className="user-message bg-gray-600 bg-opacity-70 backdrop-blur-md text-gray-100 rounded-lg p-4 mb-2 max-w-xs self-start shadow-lg">
                                    <p className="text-sm"><strong>User:</strong> {msg.userMessage}</p>
                                </div>
                                <div className="bot-message bg-gray-700 bg-opacity-70 backdrop-blur-md text-gray-100 rounded-lg p-4 max-w-xs self-end shadow-lg">
                                    <p className="text-sm"><strong>Finance Fix:</strong> {msg.botResponse}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <h4 className="text-gray-400 text-sm mb-4">Current Chat</h4>
                        {/* Show only the latest message when history is hidden */}
                        {messages.slice(-1).map((msg, index) => (
                            <div key={index} className="chat-message mb-4">
                                <div className="user-message bg-gray-600 bg-opacity-70 backdrop-blur-md text-gray-100 rounded-lg p-4 mb-2 max-w-xs self-start shadow-lg">
                                    <p className="text-sm"><strong>User:</strong> {msg.userMessage}</p>
                                </div>
                                <div className="bot-message bg-gray-700 bg-opacity-70 backdrop-blur-md text-gray-100 rounded-lg p-4 max-w-xs self-end shadow-lg">
                                    <p className="text-sm"><strong>Finance Fix:</strong> {msg.botResponse}</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>

            <div className="flex w-full">
                <input
                    type="text"
                    value={input}
                    ref={inputRef}  // Attach the ref to the input field
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow border border-gray-600 bg-gray-700 bg-opacity-50 text-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg backdrop-blur-md"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    }}
                />
                <button
                    className="ml-3 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
