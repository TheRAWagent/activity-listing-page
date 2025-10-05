import { createStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import React from "react";
import { Platform, TextInput, View } from "react-native";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  colorScheme: "light" | "dark";
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  colorScheme,
  placeholder = "Search activities...",
}) => {
  const styles = createStyles(colorScheme);
  const colors = Colors[colorScheme];
  const isWeb = Platform.OS === "web";

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={[styles.searchInput, isWeb && styles.webInput]}
        value={searchQuery}
        onChangeText={onSearchChange}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
    </View>
  );
};
