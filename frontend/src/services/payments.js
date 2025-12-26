import api from "./api";

export const initiateDonation = async (payload) => {
  const { data } = await api.post("/payments/donate", payload);
  return data;
};

export const verifyPayment = async (reference) => {
  const { data } = await api.get(`/payments/verify/${reference}`);
  return data;
};
