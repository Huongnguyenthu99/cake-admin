import express from "express";
import { getProductions } from "../controllers/production.controller.js";

const router = express.Router();

router.get("/", getProductions);

export default router;
