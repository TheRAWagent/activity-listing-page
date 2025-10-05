import { createStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { activities } from "@/constants/types";
import React from "react";
import { Platform, Text, View } from "react-native";

interface WebHeaderProps {
  colorScheme: "light" | "dark";
}

export const WebHeader: React.FC<WebHeaderProps> = ({ colorScheme }) => {
  const styles = createStyles(colorScheme);
  const colors = Colors[colorScheme];
  const isWeb = Platform.OS === "web";

  if (!isWeb) {
    return null; // Only render on web
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Activity Dashboard</Text>
      <Text style={styles.headerSubtitle}>
        Your upcoming activities and assignments
      </Text>
      <View
        style={{
          marginTop: 16,
          padding: 12,
          backgroundColor: colors.cardBackground,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: colors.cardBorder,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: colors.textSecondary,
            textAlign: "center",
            fontFamily:
              'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          📊 {[...activities, ...activities].length} activities • 🎯{" "}
          {
            [...activities, ...activities].filter((a) => "submission" in a)
              .length
          }{" "}
          assignments • 📚{" "}
          {
            [...activities, ...activities].filter(
              (a) => "time" in a && "duration" in a && !("marks" in a)
            ).length
          }{" "}
          classes
        </Text>
      </View>
    </View>
  );
};
