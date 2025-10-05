import { ResponsiveLayout } from "@/components/responsive-layout";
import { WebStyles } from "@/components/web-styles";
import { styles as styles1 } from "@/constants/styles";
import { activities, Activity, Assignment, Discussion, OnlineClass, Quiz } from "@/constants/types";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ReactNode, useMemo } from "react";
import { Alert, Button, Dimensions, Platform, Pressable, ScrollView, StyleSheet, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActivityPage() {
  const { activityId } = useLocalSearchParams<{ activityId: string }>();
  const [screenData, setScreenData] = useState(Dimensions.get("window"));
  const router = useRouter();
  const isWeb = Platform.OS === "web";
  const isTablet = screenData.width >= 768;
  // Find activity by id
  const activity: Activity | undefined = useMemo(() => {
    if (!activityId) return undefined;
    return activities.find((a) => String(a.id) === String(activityId));
  }, [activityId]);

  const handleActionPress = () => {
    if (!activity) return;

    let msg = "";
    if (isOnlineClass(activity)) {
      msg = `Start class: ${activity.title}`;
    } else if (isAssignment(activity)) {
      msg = `Submit assignment: ${activity.title}`;
    } else if (isQuiz(activity)) {
      msg = `Take quiz: ${activity.title}`;
    } else if (isDiscussion(activity)) {
      msg = `Join discussion: ${activity.title}`;
    }

    Alert.alert("Action", msg);
  };

  if (!activity) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundText}>
          No activity found with id: {activityId}
        </Text>
        <Pressable style={{}} onPress={() => router.back()}>
          <Text style={{}}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  // Helpers to narrow types
  function isOnlineClass(act: Activity): act is OnlineClass {
    return act instanceof OnlineClass
  }
  function isAssignment(act: Activity): act is Assignment {
    return act instanceof Assignment
  }
  function isQuiz(act: Activity): act is Quiz {
    return act instanceof Quiz
  }
  function isDiscussion(act: Activity): act is Discussion {
    return act instanceof Discussion
  }

  // Format date/time nicely
  const formatDate = (d: Date) => d.toLocaleDateString();
  const formatTime = (d: Date) => d.toLocaleTimeString();

  return (
    <>
      <WebStyles />
      <SafeAreaView style={styles1.layout}>
        <Layout web={isWeb || isTablet}>


          <Text style={styles.title}>{activity.title}</Text>

          <Text style={styles.description}>{activity.description}</Text>

          {isOnlineClass(activity) && (
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Time: </Text>
              <Text style={styles.metaValue}>
                {formatDate(activity.time)} @ {formatTime(activity.time)}
              </Text>
            </View>
          )}

          {isOnlineClass(activity) && (
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Duration: </Text>
              <Text style={styles.metaValue}>{activity.duration} mins</Text>
            </View>
          )}

          {isAssignment(activity) && (
            <View style={styles.metaRow}>
              <Text style={styles.metaLabel}>Submission Due: </Text>
              <Text style={styles.metaValue}>
                {formatDate(activity.submission)}
              </Text>
            </View>
          )}

          {isQuiz(activity) && (
            <>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Time: </Text>
                <Text style={styles.metaValue}>
                  {formatDate(activity.time)} @ {formatTime(activity.time)}
                </Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Duration: </Text>
                <Text style={styles.metaValue}>{activity.duration} mins</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Marks: </Text>
                <Text style={styles.metaValue}>{activity.marks}</Text>
              </View>
            </>
          )}

          {isDiscussion(activity) && (
            <>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Time: </Text>
                <Text style={styles.metaValue}>
                  {formatDate(activity.time)} @ {formatTime(activity.time)}
                </Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaLabel}>Duration: </Text>
                <Text style={styles.metaValue}>{activity.duration} mins</Text>
              </View>
            </>
          )}

          <Pressable style={styles.actionButton} onPress={handleActionPress}>
            <Text style={styles.actionButtonText}>
              {isOnlineClass(activity)
                ? "Start Class"
                : isAssignment(activity)
                  ? "Submit"
                  : isQuiz(activity)
                    ? "Take Quiz"
                    : isDiscussion(activity)
                      ? "Join Discussion"
                      : "Do Activity"}
            </Text>
          </Pressable>
        </Layout>
      </SafeAreaView>
    </>
  )
}

function Layout({ web, children }: { web: boolean, children: ReactNode }) {
  const systemColorScheme = useColorScheme();
  const colorScheme = systemColorScheme ?? "light";
  if (web) {
    return (
      <ResponsiveLayout colorScheme={colorScheme}>
        {children}
      </ResponsiveLayout>
    )
  } else return (
    <>
      {children}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
  },
  metaRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  metaLabel: {
    fontWeight: "500",
    fontSize: 14,
  },
  metaValue: {
    fontSize: 14,
    color: "#555",
  },
  actionButton: {
    marginTop: 32,
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  notFoundText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

