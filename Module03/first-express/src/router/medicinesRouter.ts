import express, { Router } from "express";

import { checkStockMiddleware } from "../middleware/checkStockMiddleware.ts";
import {
  getMedicine,
  createMedicine,
  updateMedicine,
  updateMedicinePartial,
  deleteMedicine,
} from "../controller/medicineController.ts";

const router: Router = express.Router();

router.get("/", getMedicine);
router.post("/", createMedicine);
router.put("/:id", checkStockMiddleware, updateMedicine);
router.patch("/:id", updateMedicinePartial);
router.delete("/:id", deleteMedicine);

export { router as medicineRouter };
