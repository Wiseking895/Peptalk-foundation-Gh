import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import donationRoutes from "./routes/donationRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PepTalk Foundation API is running...");
});

app.use("/api/donations", donationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;
