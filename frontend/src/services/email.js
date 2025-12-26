import api from "./api";

export const sendContactMessage = async (payload) => {
  const { data } = await api.post("/emails/contact", payload);
  return data;
};

export const sendPartnershipRequest = async (payload) => {
  const { data } = await api.post("/emails/partner", payload);
  return data;
};
