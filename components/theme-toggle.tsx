import { createStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import React, { useState } from "react";
import { Platform, Switch, Text, TouchableOpacity, View } from "react-native";

interface ThemeToggleProps {
  onThemeChange?: (theme: "light" | "dark") => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");
  const [isHovered, setIsHovered] = useState(false);
  const isWeb = Platform.OS === "web";

  const currentTheme = isDarkMode ? "dark" : "light";
  const styles = createStyles(currentTheme);
  const colors = Colors[currentTheme];

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    onThemeChange?.(newTheme);
  };

  const toggleStyle = [
    styles.item,
    {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    isWeb && styles.webButton,
    isHovered &&
      isWeb && {
        transform: [{ scale: 1.02 }],
        borderColor: colors.primary,
      },
  ];

  const TouchableComponent = isWeb ? View : TouchableOpacity;
  const touchableProps = isWeb
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onClick: toggleTheme,
      }
    : {
        onPress: toggleTheme,
        activeOpacity: 0.7,
      };

  return (
    <TouchableComponent style={toggleStyle} {...touchableProps}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginRight: 8 }}>
          {isDarkMode ? "🌙" : "☀️"}
        </Text>
        <Text style={[styles.itemTitle, { marginBottom: 0 }]}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>
      </View>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{ false: colors.cardBorder, true: colors.primary }}
        thumbColor={isDarkMode ? colors.accent : colors.textPrimary}
        ios_backgroundColor={colors.cardBorder}
      />
    </TouchableComponent>
  );
};
