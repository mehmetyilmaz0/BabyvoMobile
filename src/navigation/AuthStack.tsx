import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import OtpVerifyScreen from "../screens/auth/OtpVerifyScreen";
import HomeScreen from "../screens/home/HomeScreen";

export type AuthStackParamList = {
  Login: undefined;
  OtpVerify: { 
    email: string;
    otpRef: string;
    expiresInSeconds: number; };
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OtpVerify" component={OtpVerifyScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}