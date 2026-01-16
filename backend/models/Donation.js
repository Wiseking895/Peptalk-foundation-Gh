import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, default: "MoMo" },
    transactionId: { type: String },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
