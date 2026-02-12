import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
};

export const OtpVerifyButton: React.FC<Props> = ({ disabled, loading, onPress }) => {
  const isDisabled = !!disabled || !!loading;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      style={{
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        backgroundColor: isDisabled ? "#D1D5DB" : "#2563EB",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "700", color: isDisabled ? "#6B7280" : "white" }}>
        {loading ? "Verifying..." : "Verify"}
      </Text>
    </TouchableOpacity>
  );
};