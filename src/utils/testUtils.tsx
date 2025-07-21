import React from "react";
import { render } from "@testing-library/react-native";

// Mock game store for testing
export const mockGameStore = {
  currentDay: 1,
  currentSeason: "spring" as const,
  energy: 100,
  maxEnergy: 100,
  pollen: 0,
  honey: 0,
  experience: 0,
  level: 1,
  unlockedPlants: ["helianthus_annuus", "bellis_perennis"],
  unlockedBees: ["apis_mellifera", "bombus"],
  gardenSize: "small" as const,
  settings: {
    soundEnabled: true,
    musicEnabled: true,
    vibrationEnabled: true,
    notificationsEnabled: true,
  },
  garden: [],
  activeBees: [],
  plantFlower: jest.fn(),
  harvestFlower: jest.fn(),
  waterTile: jest.fn(),
  fertilizeTile: jest.fn(),
  addBee: jest.fn(),
  removeBee: jest.fn(),
  addPollen: jest.fn(),
  addHoney: jest.fn(),
  addExperience: jest.fn(),
  unlockPlant: jest.fn(),
  unlockBee: jest.fn(),
  updateSettings: jest.fn(),
  advanceDay: jest.fn(),
  updateSeason: jest.fn(),
  useEnergy: jest.fn(),
  regenerateEnergy: jest.fn(),
  addToInventory: jest.fn(),
  removeFromInventory: jest.fn(),
  updateAchievement: jest.fn(),
  addPollinationEvent: jest.fn(),
  resetGame: jest.fn(),
};

// Mock the Zustand store
jest.mock("@/store/gameStore", () => ({
  useGameStore: jest.fn(() => mockGameStore),
}));

// Test wrapper with navigation (commented out due to import issues)
// export const renderWithNavigation = (component: React.ReactElement) => {
//   return render(<NavigationContainer>{component}</NavigationContainer>);
// };

// Test wrapper with game store
export const renderWithGameStore = (component: React.ReactElement) => {
  return render(component);
};

// Mock plant data for testing
export const mockPlant = {
  id: "test_plant_1",
  name: "Test Sunflower",
  species: "helianthus_annuus",
  growthTime: 1800,
  currentStage: "seed" as const,
  plantedAt: Date.now(),
  position: { x: 0, y: 0 },
  traits: {
    color: "#fbbf24",
    size: "large" as const,
    season: ["summer", "autumn"] as const,
    waterNeeds: "medium" as const,
    sunNeeds: "full" as const,
  },
  rarity: "common" as const,
  unlocked: true,
};

// Mock bee data for testing
export const mockBee = {
  id: "test_bee_1",
  name: "Test Honey Bee",
  species: "apis_mellifera",
  efficiency: 0.7,
  range: 2,
  speed: 1.0,
  traits: {
    color: "#fbbf24",
    size: "medium" as const,
    season: ["spring", "summer", "autumn"] as const,
    flowerPreference: ["helianthus_annuus", "bellis_perennis"],
  },
  rarity: "common" as const,
  unlocked: true,
};

// Helper to reset all mocks
export const resetMocks = () => {
  jest.clearAllMocks();
  Object.values(mockGameStore).forEach((mock) => {
    if (typeof mock === "function" && mock.mock) {
      mock.mockClear();
    }
  });
};

// Helper to create mock garden grid
export const createMockGarden = (size: 4 | 8 = 4) => {
  const garden: any[][] = [];
  for (let y = 0; y < size; y++) {
    garden[y] = [];
    for (let x = 0; x < size; x++) {
      garden[y][x] = {
        position: { x, y },
        plant: null,
        isWatered: false,
        isFertilized: false,
      };
    }
  }
  return garden;
};
