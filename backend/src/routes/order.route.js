import express from "express";
import { createOrder, getListOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/list", getListOrder)

export default router;
