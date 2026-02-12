import {api} from "./client";

export type RequestOtpPayload = {
  email: string;
};

export type VerifyOtpPayload = {
  otpRef: string;
  otp: string;
};

export async function requestOtp(payload: RequestOtpPayload) {
  const res = await api.post("/auth/email/start", payload);
  return res.data;
}

export async function verifyOtp(payload: VerifyOtpPayload) {
  const res = await api.post("/auth/email/verify", payload);
  return res.data;
}