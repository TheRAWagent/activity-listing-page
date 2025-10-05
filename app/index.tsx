import { ActivityCard } from "@/components/activity-card";
import { ActivityFilter, ActivityType } from "@/components/activity-filter";
import { ResponsiveLayout } from "@/components/responsive-layout";
import { SearchBar } from "@/components/search-bar";
import { WebHeader } from "@/components/web-header";
import { WebStyles } from "@/components/web-styles";
import { createStyles } from "@/constants/styles";
import { Colors } from "@/constants/theme";
import { activities, Activity } from "@/constants/types";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, FlatList, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Helper function to get activity type (same as in activity-card.tsx)
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

const Index = () => {
  const systemColorScheme = useColorScheme();
  const [screenData, setScreenData] = useState(Dimensions.get("window"));
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ActivityType>("All");
  const isWeb = Platform.OS === "web";
  const isTablet = screenData.width >= 768;

  // Use system theme
  const colorScheme = systemColorScheme ?? "light";
  const styles = createStyles(colorScheme);
  const colors = Colors[colorScheme];

  // Handle screen size changes for responsive design
  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ window }) => {
      setScreenData(window);
    });

    return () => subscription?.remove();
  }, []);

  // Web-specific effects
  useEffect(() => {
    if (isWeb) {
      // Set page title
      document.title = "Activity Dashboard";

      // Add meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Manage your activities, assignments, and classes in one place"
        );
      }
    }
  }, [isWeb]);

  // Filter activities based on search query and selected type
  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      // Filter by search query
      const matchesSearch =
        activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by activity type
      const activityType = getActivityType(activity);
      const matchesType =
        selectedType === "All" || activityType === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const renderActivityItem = ({ item }: { item: any }) => (
    <ActivityCard activity={item} colorScheme={colorScheme} />
  );

  return (
    <>
      <WebStyles />
      <StatusBar
        backgroundColor={colors.primary}
        style={colorScheme === "dark" ? "light" : "dark"}
      />
      <SafeAreaView style={styles.layout}>
        {isWeb ? (
          <WebHeader colorScheme={colorScheme} />
        ) : (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Activity Dashboard</Text>
            <Text style={styles.headerSubtitle}>
              Your upcoming activities and assignments
            </Text>
          </View>
        )}

        <View style={styles.listWrapper}>
          {/* Search and Filter Controls */}
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            colorScheme={colorScheme}
          />

          <ActivityFilter
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            colorScheme={colorScheme}
          />

          {isWeb && isTablet ? (
            // Grid layout for tablet and desktop web
            <ResponsiveLayout colorScheme={colorScheme}>
              {filteredActivities.map((activity, index) => (
                <ActivityCard
                  key={index}
                  activity={activity}
                  colorScheme={colorScheme}
                />
              ))}
            </ResponsiveLayout>
          ) : (
            // List layout for mobile and mobile web
            <FlatList
              data={filteredActivities}
              renderItem={renderActivityItem}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              showsVerticalScrollIndicator={isWeb ? true : false}
              contentContainerStyle={{ paddingBottom: 16 }}
              style={isWeb ? { maxHeight: "60vh" as any } : undefined}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Index;
