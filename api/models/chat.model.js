import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userMessage: {
        type: String,
        required: true,
    },
    botResponse: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
