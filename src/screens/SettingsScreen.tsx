import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "@/constants";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>⚙️ Settings</Text>
        <Text style={styles.subtitle}>Customize your experience!</Text>

        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>Settings Coming Soon</Text>
          <Text style={styles.placeholderSubtext}>
            Configure audio, notifications, and game preferences!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ui.background,
  },
  content: {
    flex: 1,
    padding: SIZES.md,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: SIZES.fontSize.xxxl,
    fontWeight: "bold",
    color: COLORS.primary[500],
    marginBottom: SIZES.sm,
  },
  subtitle: {
    fontSize: SIZES.fontSize.lg,
    color: COLORS.ui.text.secondary,
    textAlign: "center",
    marginBottom: SIZES.xl,
  },
  placeholderContainer: {
    backgroundColor: COLORS.ui.surface,
    padding: SIZES.xl,
    borderRadius: SIZES.radius.lg,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  placeholderText: {
    fontSize: SIZES.fontSize.xl,
    fontWeight: "bold",
    color: COLORS.primary[500],
    marginBottom: SIZES.md,
  },
  placeholderSubtext: {
    fontSize: SIZES.fontSize.md,
    color: COLORS.ui.text.secondary,
    textAlign: "center",
    lineHeight: 20,
  },
});
