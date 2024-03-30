import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world!!1");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`server runnig is port ${PORT}`));
