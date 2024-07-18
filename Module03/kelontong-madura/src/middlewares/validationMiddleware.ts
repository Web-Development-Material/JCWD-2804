import { Request, Response, NextFunction } from "express";

export const validateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nama, deskripsi, harga, stock } = req.body;
  if (
    nama === "" ||
    nama === undefined ||
    deskripsi === "" ||
    deskripsi === undefined ||
    harga === undefined ||
    harga === null ||
    stock === undefined ||
    stock === null ||
    stock < 0
  ) {
    res.status(400).send("isi nya tak boleh kosong");
  }

  next();
};
