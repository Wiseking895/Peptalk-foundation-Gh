import Donation from "../models/Donation.js";

export const createDonation = async (req, res) => {
  try {
    const { name, email, amount, paymentMethod, transactionId } = req.body;

    const donation = await Donation.create({
      name,
      email,
      amount,
      paymentMethod,
      transactionId,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: "Donation initiated successfully",
      data: donation,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
