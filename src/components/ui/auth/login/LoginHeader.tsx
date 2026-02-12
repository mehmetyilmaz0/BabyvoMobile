import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Logo from "../../../../assets/images/logo.svg";

export const LoginHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo width={96} height={96} />

      <View style={styles.textWrap}>
        <Text style={styles.title}>BabyVo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 24,
  },
  textWrap: {
    alignItems: "center",
  },
  subtitle: {
    color: "#4B5563",
    fontSize: 18,
    marginBottom: 4,
  },
  title: {
    color: "#111827",
    fontSize: 32,
    fontWeight: "700",
  },
});