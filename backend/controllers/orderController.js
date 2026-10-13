import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';
import stripe from 'stripe';


// placing user order for frontend
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address
        });
        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
};

export { placeOrder };