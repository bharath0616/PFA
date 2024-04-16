import express from 'express'
import { data } from '../Controllers/auth.controller.js'

const router=express.Router();

router.post("/data",data);

export default router;