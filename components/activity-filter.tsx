import { createStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import React from "react";
import {
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type ActivityType =
  | "All"
  | "Online Class"
  | "Assignment"
  | "Quiz"
  | "Discussion";

interface ActivityFilterProps {
  selectedType: ActivityType;
  onTypeChange: (type: ActivityType) => void;
  colorScheme: "light" | "dark";
}

const activityTypes: ActivityType[] = [
  "All",
  "Online Class",
  "Assignment",
  "Quiz",
  "Discussion",
];

export const ActivityFilter: React.FC<ActivityFilterProps> = ({
  selectedType,
  onTypeChange,
  colorScheme,
}) => {
  const styles = createStyles(colorScheme);
  const colors = Colors[colorScheme];
  const isWeb = Platform.OS === "web";

  const getTypeColor = (type: ActivityType) => {
    switch (type) {
      case "Online Class":
        return colors.onlineClass;
      case "Assignment":
        return colors.assignment;
      case "Quiz":
        return colors.quiz;
      case "Discussion":
        return colors.discussion;
      default:
        return colors.primary;
    }
  };

  return (
    <View style={styles.filterContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterScrollContent}
      >
        {activityTypes.map((type) => {
          const isSelected = selectedType === type;
          const typeColor = getTypeColor(type);

          return (
            <TouchableOpacity
              key={type}
              style={[
                styles.filterChip,
                isSelected && {
                  backgroundColor: typeColor,
                  borderColor: typeColor,
                },
                isWeb && styles.webButton,
              ]}
              onPress={() => onTypeChange(type)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.filterChipText,
                  isSelected && styles.filterChipTextSelected,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
