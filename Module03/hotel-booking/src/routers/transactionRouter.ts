import { Router } from "express";
import {
  createTransaction,
  getTransactionsByUserId,
  createSnapTransaction,
  createCreditCardTransaction,
  createBankTransferTransaction,
} from "../controllers/transactionController";
import { validateTransaction } from "../middlewares/validateTransaction";
import { validateMidtransTransaction } from "../middlewares/midtrans/snap/validateMidtransTransaction";

const router = Router();

router.post("/", validateTransaction, createTransaction);
router.get("/:user_id", getTransactionsByUserId);
router.post(
  "/snap-transaction",
  validateMidtransTransaction,
  createSnapTransaction
);
router.post("/core/credit-card", createCreditCardTransaction);
router.post("/core/bank-transfer", createBankTransferTransaction);

export { router as transactionRouter };
