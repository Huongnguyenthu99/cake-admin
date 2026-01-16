import express from "express";
import { getProductions, getListLoaiBanh } from "../controllers/production.controller.js";

const router = express.Router();

router.get("/production", getProductions);
router.get("/product-type", getListLoaiBanh);

export default router;
