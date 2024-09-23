import express from 'express'
import {data} from '../Controllers/calc.controller.js'
const router=express.Router();

router.post('/data',data);

export default router;