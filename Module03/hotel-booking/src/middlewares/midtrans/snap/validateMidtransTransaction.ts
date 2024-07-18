import { Request, Response, NextFunction } from "express";

export const validateMidtransTransaction = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fields = [
    { field: "order_id", message: "Order ID is required" },
    { field: "gross_amount", message: "Gross amount is required" },
    { field: "first_name", message: "First name is required" },
    { field: "last_name", message: "Last name is required" },
    { field: "email", message: "Email is required" },
    { field: "phone", message: "Phone number is required" },
  ];

  const errors: string[] = [];

  for (const { field, message } of fields) {
    if (!req.body[field]) {
      errors.push(message);
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};
