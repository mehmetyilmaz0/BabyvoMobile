import React, { createContext, useContext, useState } from "react";
import { requestOtp as requestOtpApi } from "../api/auth.api";

type AuthContextValue = {
  isLoggedIn: boolean;
  requestOtp: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn] = useState(false);

  const requestOtp = async (email: string) => {
    await requestOtpApi({ email });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, requestOtp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}