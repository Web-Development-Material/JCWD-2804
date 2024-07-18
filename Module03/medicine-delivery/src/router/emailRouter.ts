import { Router } from "express";
import { createEmail } from "../controller/emailController";

const router = Router();

router.post("/send-email", createEmail);

export default router;
