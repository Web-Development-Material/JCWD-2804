import { Request, Response } from "express";
import { QueryError, RowDataPacket } from "mysql2";

import database from "../config/database.ts";
import madura from "../../dummy/madura.json" assert { type: "json" };

interface Product {
  id_barang: number;
  nama_barang: string;
  stok: number;
  harga: number;
  kategori: string;
}

export const getProducts = (req: Request, res: Response) => {
  database.query(
    "SELECT * FROM barang",
    (err: QueryError, result: Product[]) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send({
        data: result,
      });
    }
  );
};

export const getProductById = (req: Request, res: Response) => {
  const { id } = req.params;
  const query = "SELECT * FROM barang WHERE id_barang = ?";
  const params = [id];

  database.query(
    query,
    params,
    (err: QueryError | null, rows: RowDataPacket[]) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).send("Internal Server Error");
      }

      if (rows.length === 0) {
        return res.status(404).send("Product not found");
      }

      const product: Product = {
        id_barang: rows[0].id_barang,
        nama_barang: rows[0].nama_barang,
        stok: rows[0].stok,
        harga: rows[0].harga,
        kategori: rows[0].kategori,
      };

      res.status(200).json(product);
    }
  );
};

export const createProduct = (req: Request, res: Response) => {
  const prod = req.body;
  const newProduct = { ...prod, id: madura.productsData.length + 1 };
  madura.productsData.push(newProduct);
  return res.status(201).send(newProduct);
};

export const updateProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const updateStock = req.body;
  const index = madura.productsData.findIndex(
    (madura) => madura.id === parseInt(id)
  );
  if (index !== -1) {
    madura.productsData[index] = {
      ...madura.productsData[index],
      ...updateStock,
    };
    return res.status(200).send(madura.productsData[index]);
  }
  return res.status(404).send("Product not found");
};

export const deleteProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const index = madura.productsData.findIndex(
    (madura) => madura.id === parseInt(id)
  );
  if (index !== -1) {
    const [deleteProduct] = madura.productsData.splice(index, 1);
    return res.status(200).send(deleteProduct);
  }
};
