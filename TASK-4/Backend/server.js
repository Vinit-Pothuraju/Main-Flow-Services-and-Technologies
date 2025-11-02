import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use("/api", authRoutes);

app.get("/", (req, res) => res.send("🚀 Login API is running"));

app.listen(process.env.PORT, () => console.log(`✅ Server running on port ${process.env.PORT}`));
