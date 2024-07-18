import { Router } from "express";
import * as drugController from "../controller/drugController.ts";
import { authenticateToken } from "../middleware/authMiddleware.ts";

const router = Router();

router.post("/drug", authenticateToken, drugController.createDrug);
router.put("/drug/:id", authenticateToken, drugController.updateDrug);
router.delete("/drug/:id", authenticateToken, drugController.deleteDrug);
router.get("/drug/:id", authenticateToken, drugController.getDrugById);
router.get("/drug", authenticateToken, drugController.getAllDrugs);

export default router;
