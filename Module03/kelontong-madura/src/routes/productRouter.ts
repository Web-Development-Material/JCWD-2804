import express, { Router } from "express";
// Import controller functions and middleware
import { validateProduct } from "../middlewares/validationMiddleware.ts";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.ts";

const router: Router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.put("/products/:id", validateProduct, updateProduct);
router.post("/products", validateProduct, createProduct);
router.delete("products/:id", deleteProduct);
export { router as productRouter };
