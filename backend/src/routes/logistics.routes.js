import { Router } from "express";
import { getOrders, createOrder } from "../controllers/logistics.controller.js";

const router = Router();

router.get("/orders", getOrders);
router.post("/orders", createOrder);

export default router;
