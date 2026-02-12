import React, { useMemo, useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MailboxIcon } from "../../components/ui/auth/otp/MailboxIcon";
import { OtpCodeInputGroup } from "../../components/ui/auth/otp/OtpCodeInputGroup";
import { OtpResendSection } from "../../components/ui/auth/otp/OtpResendSection";
import { OtpVerifyButton } from "../../components/ui/auth/otp/OtpVerifyButton";
import { requestOtp, verifyOtp } from "../../api/auth.api";

type Props = {
  navigation: any;
  route: {
    params: {
      email: string;
      otpRef: string;
      expiresInSeconds: number;
    };
  };
};

export default function OtpVerifyScreen({ navigation, route }: Props) {
  const { email, otpRef, expiresInSeconds } = route.params;

  const [code, setCode] = useState("");
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isComplete = useMemo(() => code.length === 6, [code]);

  const handleVerify = async () => {
    if (!email) {
      Alert.alert("Hata", "E-posta bilgisi bulunamadı. Lütfen tekrar deneyin.");
      navigation.goBack();
      return;
    }
    if (!isComplete) return;

    try {
      setError(null);
      setLoadingVerify(true);

      await verifyOtp({
  otpRef,
  otp: code,
});

      // Başarılı giriş → uygulamanın auth sonrası ekranına
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }], // sende hangi route ise
      });
    } catch (e: any) {
      setError(e?.response?.data?.message ?? e?.message ?? "Kod doğrulanamadı.");
    } finally {
      setLoadingVerify(false);
    }
  };

  const handleResend = async () => {
    if (!email) return;

    try {
      setError(null);
      setLoadingResend(true);

      await requestOtp({ email });

      Alert.alert("Gönderildi", "Yeni doğrulama kodu e-posta adresine gönderildi.");
      setCode(""); // inputlar temizlensin
    } catch (e: any) {
      setError(e?.response?.data?.message ?? e?.message ?? "Kod tekrar gönderilemedi.");
    } finally {
      setLoadingResend(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 24, paddingVertical: 32 }}>
          <Text style={{ fontSize: 24, fontWeight: "700", color: "#111827", textAlign: "center" }}>
            Enter your 6 digit code
          </Text>

          <Text style={{ marginTop: 8, fontSize: 14, color: "#6B7280", textAlign: "center" }}>
            We sent a code to {email}
          </Text>

          <View style={{ marginTop: 32, alignItems: "center" }}>
            <MailboxIcon width={140} height={120} />
          </View>

          <View style={{ marginTop: 32 }}>
            <OtpCodeInputGroup onCodeChange={setCode} hasError={!!error} />
          </View>

          {error ? (
            <Text style={{ marginTop: 16, color: "#EF4444", textAlign: "center" }}>
              {error}
            </Text>
          ) : null}

          <View style={{ marginTop: 24 }}>
            <OtpResendSection loading={loadingResend} onResend={handleResend} />
          </View>

          <View style={{ marginTop: 28 }}>
            <OtpVerifyButton disabled={!isComplete} loading={loadingVerify} onPress={handleVerify} />
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 16, alignItems: "center" }}>
            <Text style={{ color: "#6B7280" }}>Back</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}