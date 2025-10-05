/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from "react-native";

const tintColorLight = "#A763D7";
const tintColorDark = "#B875E8";

export const Colors = {
  light: {
    // Primary colors
    text: "#1A1A1A",
    background: "#FFE5D1",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    // Activity listing specific colors
    cardBackground: "#FFFFFF",
    cardBorder: "#000000",
    separator: "#000000",
    primary: "#A763D7",
    secondary: "#8B5A9F",
    accent: "#D4A5E8",

    // Text colors
    textPrimary: "#1A1A1A",
    textSecondary: "#4A4A4A",
    textMuted: "#6B6B6B",

    // Status colors
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",

    // Activity type colors
    onlineClass: "#3B82F6",
    assignment: "#10B981",
    quiz: "#F59E0B",
    discussion: "#8B5CF6",
  },
  dark: {
    // Primary colors
    text: "#F5F5F5",
    background: "#1A1A1A",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    // Activity listing specific colors
    cardBackground: "#2D2D2D",
    cardBorder: "#404040",
    separator: "#404040",
    primary: "#B875E8",
    secondary: "#9B6BB8",
    accent: "#E1B5F0",

    // Text colors
    textPrimary: "#F5F5F5",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",

    // Status colors
    success: "#34D399",
    warning: "#FBBF24",
    error: "#F87171",
    info: "#60A5FA",

    // Activity type colors
    onlineClass: "#60A5FA",
    assignment: "#34D399",
    quiz: "#FBBF24",
    discussion: "#A78BFA",
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
