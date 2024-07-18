import express, { Response, Request, Router } from "express";
import users from "../../dummy/users.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.send(users);
});

export { router as usersRouter };
