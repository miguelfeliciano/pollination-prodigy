import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tile from "./Tile";
import { COLORS, SIZES } from "@/constants";

export default function TileTest() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tile Component Test</Text>

      <View style={styles.testSection}>
        <Text style={styles.sectionTitle}>Empty Tiles</Text>
        <View style={styles.tileRow}>
          <Tile position={{ x: 0, y: 0 }} />
          <Tile position={{ x: 1, y: 0 }} />
          <Tile position={{ x: 2, y: 0 }} />
        </View>
      </View>

      <View style={styles.testSection}>
        <Text style={styles.sectionTitle}>Planted Tiles</Text>
        <View style={styles.tileRow}>
          <Tile position={{ x: 0, y: 1 }} isPlanted />
          <Tile position={{ x: 1, y: 1 }} isPlanted />
          <Tile position={{ x: 2, y: 1 }} isPlanted />
        </View>
      </View>

      <View style={styles.testSection}>
        <Text style={styles.sectionTitle}>Large Tiles</Text>
        <View style={styles.tileRow}>
          <Tile position={{ x: 0, y: 2 }} size="large" />
          <Tile position={{ x: 1, y: 2 }} size="large" isPlanted />
        </View>
      </View>

      <View style={styles.testSection}>
        <Text style={styles.sectionTitle}>Interactive Tiles</Text>
        <View style={styles.tileRow}>
          <Tile
            position={{ x: 0, y: 3 }}
            onPress={() => console.log("Tile pressed!")}
          />
          <Tile
            position={{ x: 1, y: 3 }}
            isPlanted
            onPress={() => console.log("Planted tile pressed!")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ui.background,
    padding: SIZES.md,
  },
  title: {
    fontSize: SIZES.fontSize.xxl,
    fontWeight: "bold",
    color: COLORS.primary[500],
    textAlign: "center",
    marginBottom: SIZES.lg,
  },
  testSection: {
    marginBottom: SIZES.xl,
  },
  sectionTitle: {
    fontSize: SIZES.fontSize.lg,
    fontWeight: "bold",
    color: COLORS.ui.text.primary,
    marginBottom: SIZES.sm,
  },
  tileRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZES.sm,
  },
});
