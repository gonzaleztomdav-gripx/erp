import { Router } from "express";
import { getEntries, createEntry } from "../controllers/accounting.controller.js";

const router = Router();

router.get("/entries", getEntries);
router.post("/entries", createEntry);

export default router;
