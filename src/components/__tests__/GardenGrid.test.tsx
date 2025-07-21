import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import GardenGrid from "../GardenGrid";

describe("GardenGrid Component", () => {
  const mockTiles = [
    { position: { x: 0, y: 0 }, isPlanted: true, plantId: "plant1" },
    { position: { x: 1, y: 1 }, isPlanted: false },
    { position: { x: 2, y: 2 }, isPlanted: true, plantId: "plant2" },
  ];

  const mockOnTilePress = jest.fn();

  beforeEach(() => {
    mockOnTilePress.mockClear();
  });

  it("renders without crashing", () => {
    const { toJSON } = render(
      <GardenGrid tiles={mockTiles} onTilePress={mockOnTilePress} />
    );
    expect(toJSON()).toBeTruthy();
  });

  it("renders correct number of tiles for small grid", () => {
    const { getAllByTestId } = render(
      <GardenGrid
        tiles={mockTiles}
        onTilePress={mockOnTilePress}
        size="small"
      />
    );

    // Should render 4x4 = 16 tiles
    const tiles = getAllByTestId(/grid-tile-/);
    expect(tiles).toHaveLength(16);
  });

  it("renders correct number of tiles for large grid", () => {
    const { getAllByTestId } = render(
      <GardenGrid
        tiles={mockTiles}
        onTilePress={mockOnTilePress}
        size="large"
      />
    );

    // Should render 8x8 = 64 tiles
    const tiles = getAllByTestId(/grid-tile-/);
    expect(tiles).toHaveLength(64);
  });

  it("calls onTilePress when tile is pressed", () => {
    const { getByTestId } = render(
      <GardenGrid tiles={mockTiles} onTilePress={mockOnTilePress} />
    );

    const tile = getByTestId("grid-tile-0-0");
    fireEvent.press(tile);

    expect(mockOnTilePress).toHaveBeenCalledWith({ x: 0, y: 0 });
  });

  it("handles empty tiles array", () => {
    const { getAllByTestId } = render(
      <GardenGrid tiles={[]} onTilePress={mockOnTilePress} />
    );

    // Should still render 16 tiles (all empty)
    const tiles = getAllByTestId(/grid-tile-/);
    expect(tiles).toHaveLength(16);
  });

  it("renders planted tiles correctly", () => {
    const { getByTestId } = render(
      <GardenGrid tiles={mockTiles} onTilePress={mockOnTilePress} />
    );

    // Check that planted tiles exist
    const plantedTile = getByTestId("grid-tile-0-0");
    expect(plantedTile).toBeTruthy();
  });

  it("renders empty tiles correctly", () => {
    const { getByTestId } = render(
      <GardenGrid tiles={mockTiles} onTilePress={mockOnTilePress} />
    );

    // Check that empty tiles exist
    const emptyTile = getByTestId("grid-tile-3-3");
    expect(emptyTile).toBeTruthy();
  });

  it("matches snapshot for small grid", () => {
    const tree = render(
      <GardenGrid
        tiles={mockTiles}
        onTilePress={mockOnTilePress}
        size="small"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches snapshot for large grid", () => {
    const tree = render(
      <GardenGrid
        tiles={mockTiles}
        onTilePress={mockOnTilePress}
        size="large"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
