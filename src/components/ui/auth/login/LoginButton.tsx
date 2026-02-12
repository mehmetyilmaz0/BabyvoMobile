import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface LoginButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({
  title = "Login",
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
      style={[styles.btn, disabled ? styles.btnDisabled : null]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#EF4444",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 32,
    alignItems: "center",
  },
  btnDisabled: { opacity: 0.6 },
  text: { color: "#fff", fontSize: 18, fontWeight: "600" },
});