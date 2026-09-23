import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"

// set dns for +srv protocol
import dns from "dns"
dns.setServers([
    '8.8.8.8', // Google Primary DNS
    '1.1.1.1', // Cloudflare Primary DNS
    '8.8.4.4', // Google Secondary DNS
    '1.0.0.1'  // Cloudflare Secondary DNS
]);

// app config
const app = express()
const port = 4000;


// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

app.get("/", (req, res) => {
    res.send("API is working...")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})