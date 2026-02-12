import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";
import { LoginHeader } from "../../components/ui/auth/login/LoginHeader";
import { InputField } from "../../components/ui/auth/login/InputField";
import { LoginButton } from "../../components/ui/auth/login/LoginButton";
import { SocialLoginButton } from "../../components/ui/auth/login/SocialLoginButton";
import { requestOtp } from "@/api/auth.api"; // path sende nasılsa
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<any>();

  const handleContinue = async () => {
  try {
    setLoading(true);

    const response = await requestOtp({ email: email.trim() });

    if (!response.success) {
      Alert.alert("Hata", response.message ?? "OTP gönderilemedi");
      return;
    }

    const { otpRef, expiresInSeconds } = response.data;

    navigation.navigate("OtpVerify", {
      email: email.trim(),
      otpRef,
      expiresInSeconds,
    });

  } catch (e: any) {
    Alert.alert(
      "Hata",
      e?.response?.data?.message ?? "OTP gönderilemedi"
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <View style={styles.root}>

      <ScrollView
  contentContainerStyle={styles.scrollContent}
  showsVerticalScrollIndicator={false}
>
        <LoginHeader />

        <View style={styles.content}>
          <InputField
            label="Email"
            value={email}
            placeholder="Enter email"
            onChangeText={setemail}
          />

          <TouchableOpacity style={styles.forgot} activeOpacity={0.7}>
            <Text style={styles.forgotText}>Need help?</Text>
          </TouchableOpacity>

          <LoginButton title="Continue" onPress={handleContinue} disabled={email.trim().length < 3} />

          <View style={styles.socialRow}>
            <SocialLoginButton provider="google" onPress={() => console.log("Google pressed")} />
            <SocialLoginButton provider="apple" onPress={() => console.log("Apple pressed")} />
          </View>

          <TouchableOpacity style={styles.signup} activeOpacity={0.7}>
            <Text style={styles.signupText}>
              <Text style={styles.gray}>Don't have account? </Text>
              <Text style={styles.redBold}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fff" },
  scrollContent: {
  flexGrow: 1,
  justifyContent: "center",
  paddingVertical: 40,
},
  content: { paddingHorizontal: 24 },

  forgot: { marginBottom: 32 },
  forgotText: { color: "#4B5563", fontSize: 16, textAlign: "right" },

  socialRow: { flexDirection: "row", marginBottom: 32 },
  signup: { alignItems: "center", marginBottom: 32 },
  signupText: { fontSize: 16 },
  gray: { color: "#4B5563" },
  redBold: { color: "#EF4444", fontWeight: "700" },
});