import express from 'express';
import { sendMessageToBot, getChatHistory } from '../Controllers/chat.controller.js';

const router = express.Router();

// Route to send message to bot and get response
router.post('/send-message', sendMessageToBot);

// Route to fetch chat history
router.get('/history', getChatHistory);

export default router;
