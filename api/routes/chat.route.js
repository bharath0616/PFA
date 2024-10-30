import express from 'express';
import { sendMessageToBot, getChatHistory } from '../Controllers/chat.controller.js';
import { verifyToken } from '../Utils/verifyUser.js';
const router = express.Router();

// Route to send message to bot and get response
router.post('/send-message',verifyToken, sendMessageToBot);

// Route to fetch chat history
router.get('/history', verifyToken, getChatHistory);

export default router;
