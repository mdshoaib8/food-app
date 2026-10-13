import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.status(200).json({ success: true, message: "Item added to cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding item to cart" });
    }
};


// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
            if (cartData[req.body.itemId] <= 0) {
                delete cartData[req.body.itemId];
            }
            await userModel.findByIdAndUpdate(req.body.userId, { cartData });
            res.status(200).json({ success: true, message: "Item removed from cart" });
        } else {
            res.status(400).json({ success: false, message: "Item not found in cart" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error removing item from cart" });
    }
}


// fetch user cart data
const getCart = async (req, res) => {

}


export {
    addToCart,
    removeFromCart,
    getCart
}