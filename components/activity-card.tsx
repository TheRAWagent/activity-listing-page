import { createStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { Activity } from "@/constants/types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

interface ActivityCardProps {
  activity: Activity;
  colorScheme: "light" | "dark";
}

// Helper function to get activity type
const getActivityType = (activity: Activity): string => {
  if ("time" in activity && "duration" in activity) {
    if ("marks" in activity) {
      return "Quiz";
    } else if ("submission" in activity) {
      return "Assignment";
    } else {
      return "Online Class";
    }
  }
  return "Discussion";
};

// Helper function to get activity type color
const getActivityTypeColor = (
  activity: Activity,
  colorScheme: "light" | "dark"
) => {
  const colors = Colors[colorScheme];
  if ("time" in activity && "duration" in activity) {
    if ("marks" in activity) {
      return colors.quiz;
    } else if ("submission" in activity) {
      return colors.assignment;
    } else {
      return colors.onlineClass;
    }
  }
  return colors.discussion;
};

// Helper function to format date
const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Helper function to format duration
const formatDuration = (duration: number): string => {
  if (duration < 60) {
    return `${duration}m`;
  }
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
};

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  colorScheme,
}) => {
  const styles = createStyles(colorScheme);
  const colors = Colors[colorScheme];
  const activityType = getActivityType(activity);
  const typeColor = getActivityTypeColor(activity, colorScheme);
  const [isHovered, setIsHovered] = useState(false);
  const isWeb = Platform.OS === "web";
  const router = useRouter();

  const handlePress = () => {
    // Add click functionality for web
    if (isWeb) {
      console.log("Activity clicked:", activity.title);
    }
    router.push(`/${activity.id}`)
  };

  const cardStyle = [
    styles.item,
    isWeb && styles.webButton,
    isHovered &&
      isWeb && {
        transform: [{ translateY: -2 }],
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderColor: colors.primary,
      },
  ];

  const TouchableComponent = isWeb ? View : TouchableOpacity;
  const touchableProps = isWeb
    ? {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        onClick: handlePress,
      }
    : {
        onPress: handlePress,
        activeOpacity: 0.7,
      };

  return (
    <TouchableComponent style={cardStyle} {...touchableProps}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>{activity.title}</Text>
        <View style={[styles.itemType, { backgroundColor: typeColor }]}>
          <Text style={styles.itemTypeText}>{activityType}</Text>
        </View>
      </View>

      <Text style={styles.itemDescription}>{activity.description}</Text>

      <View style={styles.itemMeta}>
        <View>
          {"time" in activity && (
            <Text style={styles.itemTime}>📅 {formatDate(activity.time)}</Text>
          )}
          {"submission" in activity && (
            <Text style={styles.itemSubmission}>
              ⏰ Due: {formatDate(activity.submission)}
            </Text>
          )}
        </View>

        <View style={{ alignItems: "flex-end" }}>
          {"duration" in activity && (
            <Text style={styles.itemDuration}>
              ⏱️ {formatDuration(activity.duration)}
            </Text>
          )}
          {"marks" in activity && (
            <Text style={styles.itemMarks}>📊 {activity.marks} marks</Text>
          )}
        </View>
      </View>
    </TouchableComponent>
  );
};
