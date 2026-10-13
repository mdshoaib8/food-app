import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

// url: http://localhost:5000/api/orders/place-order
orderRouter.post("/place-order", authMiddleware, placeOrder);



export default orderRouter;