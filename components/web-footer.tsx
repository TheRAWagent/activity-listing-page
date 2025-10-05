import { Colors } from "@/constants/theme";
import React from "react";
import { Platform, Text, View } from "react-native";

interface WebFooterProps {
  colorScheme: "light" | "dark";
}

export const WebFooter: React.FC<WebFooterProps> = ({ colorScheme }) => {
  const colors = Colors[colorScheme];
  const isWeb = Platform.OS === "web";

  if (!isWeb) {
    return null; // Only render on web
  }

  return (
    <View
      style={{
        marginTop: 32,
        padding: 16,
        backgroundColor: colors.cardBackground,
        borderTopWidth: 1,
        borderTopColor: colors.separator,
        borderRadius: 12,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: colors.textMuted,
          textAlign: "center",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        Activity Dashboard v1.0
      </Text>
    </View>
  );
};
