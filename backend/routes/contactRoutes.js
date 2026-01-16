import express from "express";
import { submitContactForm, getMessages } from "../controllers/contactController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", submitContactForm);
router.get("/", protect, getMessages);

export default router;
