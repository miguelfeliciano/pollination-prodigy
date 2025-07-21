import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tile from "./Tile";
import { COLORS, SIZES } from "@/constants";

interface TileData {
  position: { x: number; y: number };
  isPlanted: boolean;
  plantId?: string;
}

interface GardenGridProps {
  tiles: TileData[];
  onTilePress?: (position: { x: number; y: number }) => void;
  size?: "small" | "large";
}

export default function GardenGrid({
  tiles,
  onTilePress,
  size = "small",
}: GardenGridProps) {
  const gridSize = size === "small" ? 4 : 8;
  const tileSize = size === "small" ? SIZES.tile.small : SIZES.tile.large;
  const gap = SIZES.sm;

  // Create a 2D array for easier grid rendering
  const grid: TileData[][] = [];
  for (let y = 0; y < gridSize; y++) {
    grid[y] = [];
    for (let x = 0; x < gridSize; x++) {
      const tile = tiles.find((t) => t.position.x === x && t.position.y === y);
      grid[y][x] = tile || {
        position: { x, y },
        isPlanted: false,
      };
    }
  }

  const handleTilePress = (position: { x: number; y: number }) => {
    onTilePress?.(position);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {grid.map((row, y) => (
            <View key={`row-${y}`} style={[styles.row, { gap }]}>
              {row.map((tile, x) => (
                <Tile
                  key={`${x}-${y}`}
                  position={tile.position}
                  isPlanted={tile.isPlanted}
                  onPress={() => handleTilePress(tile.position)}
                  size={size}
                  testID={`grid-tile-${x}-${y}`}
                />
              ))}
            </View>
          ))}
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
  gridContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZES.md,
  },
  grid: {
    // Grid container for rows
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
