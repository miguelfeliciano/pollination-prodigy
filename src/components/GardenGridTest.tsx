import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GardenGrid from "./GardenGrid";
import { COLORS, SIZES } from "@/constants";

interface TileData {
  position: { x: number; y: number };
  isPlanted: boolean;
  plantId?: string;
}

export default function GardenGridTest() {
  const [tiles, setTiles] = useState<TileData[]>([
    { position: { x: 0, y: 0 }, isPlanted: true, plantId: "plant1" },
    { position: { x: 1, y: 1 }, isPlanted: true, plantId: "plant2" },
    { position: { x: 2, y: 2 }, isPlanted: true, plantId: "plant3" },
  ]);

  const handleTilePress = (position: { x: number; y: number }) => {
    console.log(`Tile pressed at position:`, position);

    // Toggle planted state for demo
    setTiles((prevTiles) => {
      const existingTile = prevTiles.find(
        (tile) =>
          tile.position.x === position.x && tile.position.y === position.y
      );

      if (existingTile) {
        // Remove tile if it exists
        return prevTiles.filter(
          (tile) =>
            !(tile.position.x === position.x && tile.position.y === position.y)
        );
      } else {
        // Add new planted tile
        return [
          ...prevTiles,
          {
            position,
            isPlanted: true,
            plantId: `plant${Date.now()}`,
          },
        ];
      }
    });
  };

  const resetGrid = () => {
    setTiles([]);
  };

  const addRandomPlant = () => {
    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 4);
    const position = { x, y };

    const existingTile = tiles.find(
      (tile) => tile.position.x === x && tile.position.y === y
    );

    if (!existingTile) {
      setTiles((prevTiles) => [
        ...prevTiles,
        {
          position,
          isPlanted: true,
          plantId: `plant${Date.now()}`,
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Garden Grid Test</Text>

      <View style={styles.stats}>
        <Text style={styles.statText}>Planted Tiles: {tiles.length}/16</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={resetGrid}>
          <Text style={styles.buttonText}>Reset Grid</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={addRandomPlant}>
          <Text style={styles.buttonText}>Add Random Plant</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <GardenGrid tiles={tiles} onTilePress={handleTilePress} size="small" />
      </View>

      <View style={styles.instructions}>
        <Text style={styles.instructionText}>
          • Tap tiles to plant/remove flowers
        </Text>
        <Text style={styles.instructionText}>
          • Use buttons to test grid functionality
        </Text>
        <Text style={styles.instructionText}>
          • Check console for tile press events
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ui.background,
    padding: SIZES.lg,
  },
  title: {
    fontSize: SIZES.fontSize.xxl,
    fontWeight: "bold",
    color: COLORS.primary[500],
    textAlign: "center",
    marginBottom: SIZES.xl,
  },
  stats: {
    alignItems: "center",
    marginBottom: SIZES.md,
  },
  statText: {
    fontSize: SIZES.fontSize.lg,
    color: COLORS.ui.text.primary,
    fontWeight: "600",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: SIZES.xl,
  },
  button: {
    backgroundColor: COLORS.accent.green,
    paddingHorizontal: SIZES.md,
    paddingVertical: SIZES.sm,
    borderRadius: SIZES.radius.md,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: SIZES.fontSize.sm,
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.xl,
    minHeight: 300, // Provide minimum height for grid
  },
  instructions: {
    marginTop: SIZES.xxl,
    padding: SIZES.md,
    backgroundColor: COLORS.ui.surface,
    borderRadius: SIZES.radius.md,
    borderWidth: 1,
    borderColor: COLORS.ui.border,
  },
  instructionText: {
    fontSize: SIZES.fontSize.sm,
    color: COLORS.ui.text.secondary,
    marginBottom: SIZES.xs,
  },
});
