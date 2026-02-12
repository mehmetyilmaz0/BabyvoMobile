import React from "react";
import { View } from "react-native";
import Svg, { Rect, Path, Line } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
};

export const MailboxIcon: React.FC<Props> = ({ width = 140, height = 120 }) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} viewBox="0 0 140 120">
        <Rect x="50" y="30" width="90" height="80" rx="8" fill="#E8491C" />
        <Rect x="50" y="30" width="90" height="20" rx="4" fill="#B83819" />
        <Path d="M 50 50 Q 35 60 50 70 L 50 50 Z" fill="#E8491C" />
        <Rect
          x="15"
          y="45"
          width="50"
          height="40"
          rx="4"
          fill="#E8491C"
          stroke="#1F2937"
          strokeWidth="3"
        />
        <Rect x="20" y="52" width="40" height="26" fill="#1F2937" />
        <Path
          d="M 25 58 L 35 65 L 55 52 L 45 58 Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <Path
          d="M 25 72 L 35 65 L 55 78 L 45 72 Z"
          fill="white"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <Line x1="25" y1="58" x2="25" y2="72" stroke="white" strokeWidth="2" />
        <Line x1="55" y1="52" x2="55" y2="78" stroke="white" strokeWidth="2" />
        <Line x1="35" y1="65" x2="35" y2="65" stroke="white" strokeWidth="2" />
        <Rect x="8" y="20" width="16" height="90" rx="2" fill="#E8491C" />
        <Rect
          x="8"
          y="20"
          width="16"
          height="90"
          rx="2"
          fill="#E8491C"
          stroke="#1F2937"
          strokeWidth="3"
        />
      </Svg>
    </View>
  );
};