import express from "express";
import productionRoute from "./production.route.js";

const router = express.Router();

router.use("/production", productionRoute);
    
export default router;