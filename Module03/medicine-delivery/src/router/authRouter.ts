import { Router } from "express";
import { register, login } from "../controller/authController.ts";
import upload from "../middleware/uploadMiddleware.ts";
// import { validateUser } from "../middleware/validateUserMiddleware.ts";

const router = Router();

router.post("/register", upload.single("image"), register);
router.post("/login", login);

export default router;
