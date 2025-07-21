import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGameStore } from "@/store/gameStore";
import { COLORS, SIZES } from "@/constants";

export default function HomeScreen() {
  const { currentDay, currentSeason, energy, pollen, honey, level } =
    useGameStore();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🌻 Pollination Prodigy</Text>
          <Text style={styles.subtitle}>Welcome to your cozy garden!</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Day</Text>
            <Text style={styles.statValue}>{currentDay}</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Season</Text>
            <Text style={styles.statValue}>{currentSeason}</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Level</Text>
            <Text style={styles.statValue}>{level}</Text>
          </View>
        </View>

        <View style={styles.resourcesContainer}>
          <View style={styles.resourceCard}>
            <Text style={styles.resourceLabel}>⚡ Energy</Text>
            <Text style={styles.resourceValue}>{energy}/100</Text>
          </View>

          <View style={styles.resourceCard}>
            <Text style={styles.resourceLabel}>🌸 Pollen</Text>
            <Text style={styles.resourceValue}>{pollen}</Text>
          </View>

          <View style={styles.resourceCard}>
            <Text style={styles.resourceLabel}>🍯 Honey</Text>
            <Text style={styles.resourceValue}>{honey}</Text>
          </View>
        </View>

        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <Text style={styles.placeholderText}>Coming soon...</Text>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.sectionTitle}>💡 Tips</Text>
          <Text style={styles.tipText}>
            • Plant flowers to attract bees and collect pollen
          </Text>
          <Text style={styles.tipText}>
            • Water and fertilize your plants for better yields
          </Text>
          <Text style={styles.tipText}>
            • Different seasons affect plant growth and bee activity
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ui.background,
  },
  scrollContent: {
    padding: SIZES.md,
  },
  header: {
    alignItems: "center",
    marginBottom: SIZES.xl,
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
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: SIZES.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.ui.surface,
    padding: SIZES.md,
    borderRadius: SIZES.radius.md,
    marginHorizontal: SIZES.xs,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statLabel: {
    fontSize: SIZES.fontSize.sm,
    color: COLORS.ui.text.secondary,
    marginBottom: SIZES.xs,
  },
  statValue: {
    fontSize: SIZES.fontSize.xl,
    fontWeight: "bold",
    color: COLORS.primary[500],
  },
  resourcesContainer: {
    marginBottom: SIZES.lg,
  },
  resourceCard: {
    backgroundColor: COLORS.ui.surface,
    padding: SIZES.md,
    borderRadius: SIZES.radius.md,
    marginBottom: SIZES.sm,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resourceLabel: {
    fontSize: SIZES.fontSize.md,
    color: COLORS.ui.text.primary,
  },
  resourceValue: {
    fontSize: SIZES.fontSize.lg,
    fontWeight: "bold",
    color: COLORS.primary[500],
  },
  quickActions: {
    marginBottom: SIZES.lg,
  },
  sectionTitle: {
    fontSize: SIZES.fontSize.lg,
    fontWeight: "bold",
    color: COLORS.primary[500],
    marginBottom: SIZES.md,
  },
  placeholderText: {
    fontSize: SIZES.fontSize.md,
    color: COLORS.ui.text.secondary,
    fontStyle: "italic",
  },
  tipsContainer: {
    backgroundColor: COLORS.ui.surface,
    padding: SIZES.md,
    borderRadius: SIZES.radius.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipText: {
    fontSize: SIZES.fontSize.md,
    color: COLORS.ui.text.primary,
    marginBottom: SIZES.sm,
    lineHeight: 20,
  },
});
