import { Request, Response, NextFunction } from "express";
import medicines from "../../dummy/medicines.json" assert { type: "json" };

const checkStockMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const medicine = medicines.data.find((item) => item.id === parseInt(id));
  if (!medicine) {
    return res.status(404).send("Medicine not found");
  }

  const newStock = req.body.stock;
  if (newStock < 0) {
    return res.status(400).send({
      response: "Stock cannot be negative",
    });
  }

  if (newStock !== undefined && newStock < medicine.stock) {
    return res.status(400).send({
      response: "Stock cannot be less than current stock",
    });
  }

  next();
};

export { checkStockMiddleware };
