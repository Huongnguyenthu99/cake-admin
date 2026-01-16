import express from "express";
import productionRoute from "./production.route.js";
import orderRoute from "./order.route.js";

const router = express.Router();

router.use("/", productionRoute);
router.use("/order", orderRoute);
    
export default router;