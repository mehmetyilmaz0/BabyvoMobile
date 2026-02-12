import React from "react";
import { TextInput, View } from "react-native";

type Props = {
  value: string;
  inputRef?: (ref: TextInput | null) => void;
  autoFocus?: boolean;
  hasError?: boolean;
  onChangeText: (text: string) => void;
  onKeyPress?: (key: string) => void;
};

const onlyDigits = (s: string) => s.replace(/\D/g, "");

export const OtpDigitInput: React.FC<Props> = ({
  value,
  inputRef,
  autoFocus,
  hasError,
  onChangeText,
  onKeyPress,
}) => {
  return (
    <View
      style={{
        width: 52,
        height: 52,
        borderWidth: 2,
        borderColor: hasError ? "#EF4444" : "#D1D5DB",
        borderRadius: 12,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
        ref={inputRef}
        value={value}
        autoFocus={autoFocus}
        keyboardType="number-pad"
        maxLength={1}
        textAlign="center"
        onChangeText={(t) => onChangeText(onlyDigits(t).slice(-1))}
        onKeyPress={(e) => onKeyPress?.(e.nativeEvent.key)}
        style={{
          width: "100%",
          height: "100%",
          fontSize: 22,
          fontWeight: "700",
          color: "#111827",
        }}
      />
    </View>
  );
};