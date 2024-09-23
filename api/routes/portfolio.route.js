import express from 'express';
import { getUserPositions } from '../Controllers/portfolio.controller.js';

const router = express.Router();

// Route to get user positions
router.get('/positions', getUserPositions);

export default router;
