import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  loading?: boolean;
  onResend?: () => void;
};

export const OtpResendSection: React.FC<Props> = ({ loading = false, onResend }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#4B5563", fontSize: 16 }}>Didn’t get the code? </Text>
      <TouchableOpacity onPress={onResend} activeOpacity={0.7} disabled={loading}>
        <Text
          style={{
            color: "#2563EB",
            fontSize: 16,
            fontWeight: "600",
            textDecorationLine: "underline",
          }}
        >
          {loading ? "Sending..." : "Resend"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};