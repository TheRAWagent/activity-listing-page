import { createStyles } from "@/constants/styles";
import React from "react";
import { Dimensions, Platform, View } from "react-native";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  colorScheme: "light" | "dark";
}

const { width: screenWidth } = Dimensions.get("window");
const isWeb = Platform.OS === "web";
const isTablet = screenWidth >= 768;

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  children,
  colorScheme,
}) => {
  const styles = createStyles(colorScheme);

  if (isWeb && isTablet) {
    // Grid layout for tablet and desktop web
    return (
      <View
        style={[
          styles.gridContainer,
          {
            maxHeight: "60vh" as any,
            overflowY: "auto" as any,
            padding: 16,
          } as any,
        ]}
      >
        {children}
      </View>
    );
  }

  // List layout for mobile and mobile web
  return (
    <View
      style={
        {
          maxHeight: "60vh" as any,
          overflowY: "auto" as any,
          padding: 16,
        } as any
      }
    >
      {children}
    </View>
  );
};
