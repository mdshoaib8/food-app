import express from "express"
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"
import authMiddleWare from "../middleware/auth.js";

const cartRouter = express.Router();

// url: http://localhost:4000/api/cart/add
cartRouter.post("/add", authMiddleWare, addToCart);
// url: http://localhost:4000/api/cart/remove
cartRouter.post("/remove", authMiddleWare, removeFromCart);
// url: http://localhost:4000/api/cart/get
cartRouter.post("/get", authMiddleWare, getCart);

export default cartRouter;