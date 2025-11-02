import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// 🧠 Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check user existence
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: "fail", message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: "fail", message: "Invalid credentials" });
    }

    res.json({ status: "success", message: "Login successful" });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Server error" });
  }
});

export default router;
