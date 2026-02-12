import React, { useEffect, useMemo, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { OtpDigitInput } from "./OtpDigitInput";

type Props = {
  length?: number; // default 4
  onCodeChange?: (code: string) => void;
  autoFocus?: boolean;
  clearOnMount?: boolean;
  hasError?: boolean;
};

export const OtpCodeInputGroup: React.FC<Props> = ({
  length = 6,
  onCodeChange,
  autoFocus = true,
  clearOnMount = true,
  hasError = false,
}) => {
  const [digits, setDigits] = useState<string[]>(Array.from({ length }, () => ""));
  const refs = useRef<(TextInput | null)[]>([]);

  const code = useMemo(() => digits.join(""), [digits]);

  useEffect(() => {
    onCodeChange?.(code);
  }, [code, onCodeChange]);

  useEffect(() => {
    if (clearOnMount) setDigits(Array.from({ length }, () => ""));
  }, [clearOnMount, length]);

  const setDigit = (index: number, value: string) => {
    const next = [...digits];
    next[index] = value;
    setDigits(next);

    if (value && index < length - 1) refs.current[index + 1]?.focus();
  };

  const onKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && digits[index] === "" && index > 0) {
      refs.current[index - 1]?.focus();
      const next = [...digits];
      next[index - 1] = "";
      setDigits(next);
    }
  };

  const focusFirst = () => refs.current[0]?.focus();
  const clear = () => {
    setDigits(Array.from({ length }, () => ""));
    setTimeout(focusFirst, 0);
  };

  // İstersen parent tarafında kullanmak için dışarı açarız; şimdilik screen resend sonrası state resetleyebilir.
  // (İstersen ben bunu forwardRef ile expose ederim.)

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {digits.map((d, i) => (
        <View key={i} style={{ marginHorizontal: 8 }}>
          <OtpDigitInput
            value={d}
            autoFocus={autoFocus && i === 0}
            hasError={hasError}
            inputRef={(r) => (refs.current[i] = r)}
            onChangeText={(t) => setDigit(i, t)}
            onKeyPress={(k) => onKeyPress(i, k)}
          />
        </View>
      ))}
    </View>
  );
};