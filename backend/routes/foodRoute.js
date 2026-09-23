import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
})

// router end point
// post: http://localhost:4000/api/food/add
foodRouter.post("/add", upload.single("image"), addFood)
// get: http://localhost:4000/api/food/list
foodRouter.get("/list", listFood)
// post: http://localhost:4000/api/food/remove
foodRouter.post("/remove", removeFood)

export default foodRouter;