import { Router } from "express";
import { registration } from "../controllers/userController.js";
import upload from "../middleware/upload.js";

const router = new Router();

router.post('/register', upload.single('avatar'), registration);

export default router;