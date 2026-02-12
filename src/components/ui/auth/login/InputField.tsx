import React, { useState } from "react";
import { View, Text, TextInput, Image, Pressable, StyleSheet } from "react-native";

interface InputFieldProps {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  onChangeText: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  placeholder,
  secureTextEntry = false,
  showPasswordToggle = false,
  onChangeText,
}) => {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={hidden}
          onChangeText={onChangeText}
          style={styles.input}
        />

        {showPasswordToggle ? (
          <Pressable onPress={() => setHidden((p) => !p)} style={styles.toggle}>
            <Image
              source={{
                uri: "https://api.builder.io/api/v1/image/assets/73b3b33b1fe94f7d9ef8b0b0ce8ac914/51606f16f01e7a420b1848f4395c4aa318556f74?placeholderIfAbsent=true",
              }}
              style={styles.toggleIcon}
              resizeMode="contain"
            />
            <Image
              source={{
                uri: "https://api.builder.io/api/v1/image/assets/73b3b33b1fe94f7d9ef8b0b0ce8ac914/10519848c014301aea7a93a8bc91c02f403e241b?placeholderIfAbsent=true",
              }}
              style={styles.toggleIcon}
              resizeMode="contain"
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { marginBottom: 24 },
  label: {
    color: "#374151",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 12,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#111827",
    fontSize: 16,
    padding: 0,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingLeft: 12,
  },
  toggleIcon: { width: 20, height: 20 },
});