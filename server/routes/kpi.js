import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  console.log("GET request to /kpis endpoint"); // Log request
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    console.error("Error fetching KPIs:", error); // Log error
    res.status(404).json({ message: error.message });
  }
});

export default router;
