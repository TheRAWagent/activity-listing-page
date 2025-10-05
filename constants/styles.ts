import { Dimensions, Platform, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "./theme";

const { width: screenWidth } = Dimensions.get("window");
const isWeb = Platform.OS === "web";
const isTablet = screenWidth >= 768;

// Helper function to create theme-aware styles
export const createStyles = (colorScheme: "light" | "dark" = "light") => {
  const colors = Colors[colorScheme];

  return StyleSheet.create({
    // Layout styles
    layout: {
      flex: 1,
      padding: isWeb ? 24 : 16,
      backgroundColor: colors.background,
      ...(isWeb && {
        maxWidth: 1200,
        marginHorizontal: "auto" as any,
        minHeight: "100vh" as any,
      }),
    } as ViewStyle,

    // Header styles
    header: {
      paddingVertical: isWeb ? 32 : 20,
      paddingHorizontal: isWeb ? 32 : 16,
      backgroundColor: colors.primary,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      marginBottom: isWeb ? 24 : 16,
      shadowColor: colors.cardBorder,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      ...(isWeb && {
        cursor: "default" as any,
        userSelect: "none" as any,
      }),
    },
    headerTitle: {
      fontSize: isWeb ? 32 : 24,
      fontWeight: "bold",
      color: colors.textPrimary,
      textAlign: "center",
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    headerSubtitle: {
      fontSize: isWeb ? 18 : 16,
      color: colors.textSecondary,
      textAlign: "center",
      marginTop: 4,
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },

    // List wrapper styles
    listWrapper: {
      flex: 1,
      padding: isWeb ? 24 : 16,
      backgroundColor: colors.cardBackground,
      borderWidth: 2,
      borderColor: colors.cardBorder,
      borderRadius: 20,
      shadowColor: colors.cardBorder,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      ...(isWeb && {
        maxWidth: isTablet ? "100%" : 800,
        marginHorizontal: isTablet ? 0 : "auto",
      }),
    },

    // Activity item styles
    item: {
      minHeight: "auto",
      padding: isWeb ? 20 : 16,
      backgroundColor: colors.cardBackground,
      borderRadius: 12,
      marginVertical: 4,
      borderWidth: 1,
      borderColor: colors.cardBorder,
      shadowColor: colors.cardBorder,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
      ...(isWeb && {
        cursor: "default" as any,
        transition: "all 0.2s ease-in-out" as any,
        ":hover": {
          transform: "translateY(-2px)" as any,
          shadowOpacity: 0.1,
          shadowRadius: 4,
          borderColor: colors.primary,
        } as any,
      }),
    },
    itemHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 8,
    },
    itemTitle: {
      fontSize: isWeb ? 20 : 18,
      fontWeight: "600",
      color: colors.textPrimary,
      flex: 1,
      marginRight: 8,
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
        lineHeight: 24,
      }),
    },
    itemType: {
      paddingHorizontal: isWeb ? 12 : 8,
      paddingVertical: isWeb ? 6 : 4,
      borderRadius: 12,
      alignSelf: "flex-start",
      ...(isWeb && {
        transition: "all 0.2s ease-in-out" as any,
        ":hover": {
          transform: "scale(1.05)" as any,
        } as any,
      }),
    },
    itemTypeText: {
      fontSize: isWeb ? 13 : 12,
      fontWeight: "500",
      color: colors.textPrimary,
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    itemDescription: {
      fontSize: isWeb ? 15 : 14,
      color: colors.textSecondary,
      lineHeight: isWeb ? 22 : 20,
      marginBottom: 8,
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    itemMeta: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    },
    itemTime: {
      fontSize: isWeb ? 13 : 12,
      color: colors.textMuted,
      fontWeight: "500",
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    itemDuration: {
      fontSize: isWeb ? 13 : 12,
      color: colors.textMuted,
      fontWeight: "500",
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    itemMarks: {
      fontSize: isWeb ? 13 : 12,
      color: colors.warning,
      fontWeight: "600",
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    itemSubmission: {
      fontSize: isWeb ? 13 : 12,
      color: colors.error,
      fontWeight: "500",
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },

    // Separator styles
    itemSeparator: {
      height: 1,
      backgroundColor: colors.separator,
      marginVertical: 8,
      opacity: 0.3,
    },

    // Search bar styles
    searchContainer: {
      marginBottom: 16,
    },
    searchInput: {
      height: isWeb ? 48 : 44,
      paddingHorizontal: isWeb ? 16 : 12,
      backgroundColor: colors.cardBackground,
      borderWidth: 2,
      borderColor: colors.cardBorder,
      borderRadius: 12,
      fontSize: isWeb ? 16 : 15,
      color: colors.textPrimary,
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
        outline: "none" as any,
      }),
    },

    // Filter styles
    filterContainer: {
      marginBottom: 20,
    },
    filterScrollContent: {
      paddingHorizontal: isWeb ? 0 : 4,
      gap: 8,
    },
    filterChip: {
      paddingHorizontal: isWeb ? 16 : 12,
      paddingVertical: isWeb ? 8 : 6,
      backgroundColor: colors.cardBackground,
      borderWidth: 2,
      borderColor: colors.cardBorder,
      borderRadius: 20,
      marginRight: 8,
      ...(isWeb && {
        transition: "all 0.2s ease-in-out" as any,
        cursor: "pointer" as any,
        userSelect: "none" as any,
      }),
    },
    filterChipText: {
      fontSize: isWeb ? 14 : 13,
      fontWeight: "500",
      color: colors.textSecondary,
      ...(isWeb && {
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' as any,
      }),
    },
    filterChipTextSelected: {
      color: colors.textPrimary,
      fontWeight: "600",
    },

    // Activity type specific colors
    onlineClassType: {
      backgroundColor: colors.onlineClass,
    },
    assignmentType: {
      backgroundColor: colors.assignment,
    },
    quizType: {
      backgroundColor: colors.quiz,
    },
    discussionType: {
      backgroundColor: colors.discussion,
    },

    // Empty state styles
    emptyState: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 32,
    },
    emptyStateText: {
      fontSize: 16,
      color: colors.textMuted,
      textAlign: "center",
      marginTop: 16,
    },

    // Loading styles
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 32,
    },
    loadingText: {
      fontSize: 16,
      color: colors.textMuted,
      marginTop: 16,
    },

    // Web-specific styles
    ...(isWeb
      ? {
          // Grid layout for web
          gridContainer: {
            display: "grid" as any,
            gridTemplateColumns: isTablet
              ? ("repeat(auto-fit, minmax(350px, 1fr))" as any)
              : ("1fr" as any),
            gap: "16px" as any,
            padding: "0" as any,
            width: "100%" as any,
          } as any,

          // Web-specific button styles
          webButton: {
            cursor: "pointer" as any,
            userSelect: "none" as any,
            transition: "all 0.2s ease-in-out" as any,
            ":hover": {
              opacity: 0.8,
            } as any,
            ":active": {
              transform: "scale(0.98)" as any,
            } as any,
          } as any,

          // Web-specific input styles
          webInput: {
            transition: "border-color 0.2s ease-in-out" as any,
            ":focus": {
              borderColor: colors.primary,
              outline: "none" as any,
            } as any,
          } as any,

          // Web-specific scrollbar styles
          webScrollbar: {
            "::-webkit-scrollbar": {
              width: "8px" as any,
            } as any,
            "::-webkit-scrollbar-track": {
              background: colors.cardBackground,
              borderRadius: "4px" as any,
            } as any,
            "::-webkit-scrollbar-thumb": {
              background: colors.cardBorder,
              borderRadius: "4px" as any,
            } as any,
            "::-webkit-scrollbar-thumb:hover": {
              background: colors.primary,
            } as any,
          } as any,

          // Responsive breakpoints
          mobile: {
            maxWidth: "480px" as any,
          } as any,
          tablet: {
            maxWidth: "768px" as any,
          } as any,
          desktop: {
            maxWidth: "1200px" as any,
          } as any,
        }
      : {}),
  });
};

// Default styles for backward compatibility
export const styles = createStyles("light");
