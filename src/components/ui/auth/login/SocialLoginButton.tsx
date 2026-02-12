import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Google from "../../../../assets/icons/google.svg";
import Apple from "../../../../assets/icons/apple.svg";

interface SocialLoginButtonProps {
  provider: "google" | "apple";
  onPress?: () => void;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  onPress,
}) => {
  const isGoogle = provider === "google";

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.75} style={styles.btn}>
      <View style={styles.inner}>
        {isGoogle ? (
          <Google width={24} height={24} />
        ) : (
          <Apple width={24} height={24} />
        )}
        <Text style={styles.text}>{isGoogle ? "Google" : "Apple"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icon: { width: 24, height: 24 },
  text: { color: "#374151", fontSize: 16, fontWeight: "500" },
});