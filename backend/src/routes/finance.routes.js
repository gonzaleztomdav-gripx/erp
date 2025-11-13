import { Router } from "express";
import { getFinancialReport } from "../controllers/finance.controller.js";

const router = Router();

router.get("/reports", getFinancialReport);

export default router;
