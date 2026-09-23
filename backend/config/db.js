// config/db.js
import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://md_shoaib:12345@cluster0.hsvsadg.mongodb.net/food-del", {family: 4});
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
}