import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "@/constants";

interface TileProps {
  position: { x: number; y: number };
  isPlanted?: boolean;
  onPress?: () => void;
  size?: "small" | "large";
  testID?: string;
}

export default function Tile({
  position,
  isPlanted = false,
  onPress,
  size = "small",
  testID,
}: TileProps) {
  const tileSize = size === "small" ? SIZES.tile.small : SIZES.tile.large;

  return (
    <TouchableOpacity
      style={[
        styles.tile,
        {
          width: tileSize,
          height: tileSize,
          backgroundColor: isPlanted
            ? COLORS.accent.green
            : COLORS.primary[300],
        },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
      testID={testID || `tile-${position.x}-${position.y}`}
    >
      {isPlanted && (
        <View style={styles.plant}>
          {/* Placeholder for plant icon */}
          <View style={styles.plantIcon} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: SIZES.radius.sm,
    borderWidth: 1,
    borderColor: COLORS.ui.border,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  plant: {
    justifyContent: "center",
    alignItems: "center",
  },
  plantIcon: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.accent.yellow,
    borderRadius: 10,
    // Placeholder for actual plant icon
  },
});
