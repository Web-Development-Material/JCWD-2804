import { Request, Response, NextFunction } from "express";

export const validateTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user_id, hotel_id, booking_date, nights, total_amount } = req.body;

  if (!user_id || !hotel_id || !booking_date || !nights || !total_amount) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  next();
};
