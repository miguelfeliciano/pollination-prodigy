import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GameState,
  Plant,
  Bee,
  GardenTile,
  Position,
  PlantStage,
  Season,
  GameSettings,
  PollinationEvent,
  InventoryItem,
  Achievement,
  GardenSize,
} from "@/types";
import { GAME_CONFIG } from "@/constants";
import { PLANTS_DATA, getPlantById } from "@/data/plants";
import { BEES_DATA, getBeeById } from "@/data/bees";

interface GameStore extends GameState {
  // Garden state
  garden: GardenTile[][];
  activeBees: Bee[];

  // Game actions
  plantFlower: (position: Position, plantSpecies: string) => void;
  harvestFlower: (position: Position) => void;
  waterTile: (position: Position) => void;
  fertilizeTile: (position: Position) => void;

  // Bee actions
  addBee: (beeSpecies: string) => void;
  removeBee: (beeId: string) => void;

  // Game progression
  addPollen: (amount: number) => void;
  addHoney: (amount: number) => void;
  addExperience: (amount: number) => void;
  unlockPlant: (plantSpecies: string) => void;
  unlockBee: (beeSpecies: string) => void;

  // Settings
  updateSettings: (settings: Partial<GameSettings>) => void;

  // Time management
  advanceDay: () => void;
  updateSeason: () => void;

  // Energy system
  useEnergy: (amount: number) => void;
  regenerateEnergy: () => void;

  // Inventory
  addToInventory: (item: InventoryItem) => void;
  removeFromInventory: (itemId: string, quantity?: number) => void;

  // Achievements
  updateAchievement: (achievementId: string, progress: number) => void;

  // Pollination events
  addPollinationEvent: (event: PollinationEvent) => void;

  // Reset game
  resetGame: () => void;
}

const createInitialGarden = (size: GardenSize): GardenTile[][] => {
  const gardenSize =
    size === "small"
      ? GAME_CONFIG.SMALL_GARDEN_SIZE
      : GAME_CONFIG.LARGE_GARDEN_SIZE;
  const garden: GardenTile[][] = [];

  for (let y = 0; y < gardenSize; y++) {
    garden[y] = [];
    for (let x = 0; x < gardenSize; x++) {
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

const initialSettings: GameSettings = {
  soundEnabled: true,
  musicEnabled: true,
  vibrationEnabled: true,
  notificationsEnabled: true,
};

const initialGameState: Omit<GameState, "garden" | "activeBees"> = {
  currentDay: 1,
  currentSeason: "spring",
  energy: GAME_CONFIG.MAX_ENERGY,
  maxEnergy: GAME_CONFIG.MAX_ENERGY,
  pollen: 0,
  honey: 0,
  experience: 0,
  level: 1,
  unlockedPlants: PLANTS_DATA.filter((p) => p.unlocked).map((p) => p.species),
  unlockedBees: BEES_DATA.filter((b) => b.unlocked).map((b) => b.species),
  gardenSize: "small",
  settings: initialSettings,
};

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      ...initialGameState,
      garden: createInitialGarden("small"),
      activeBees: [],

      // Garden actions
      plantFlower: (position: Position, plantSpecies: string) => {
        const { garden, energy, unlockedPlants } = get();
        const plantData = getPlantById(plantSpecies);

        if (
          !plantData ||
          !unlockedPlants.includes(plantSpecies) ||
          energy < 10
        ) {
          return;
        }

        const newPlant: Plant = {
          id: `${plantSpecies}_${Date.now()}`,
          ...plantData,
          plantedAt: Date.now(),
          position,
          currentStage: "seed",
        };

        set((state) => ({
          garden: state.garden.map((row, y) =>
            row.map((tile, x) =>
              x === position.x && y === position.y
                ? { ...tile, plant: newPlant }
                : tile
            )
          ),
          energy: state.energy - 10,
        }));
      },

      harvestFlower: (position: Position) => {
        const { garden, energy } = get();
        const tile = garden[position.y]?.[position.x];

        if (
          !tile?.plant ||
          tile.plant.currentStage !== "mature" ||
          energy < 5
        ) {
          return;
        }

        const pollenYield = GAME_CONFIG.BASE_POLLEN_YIELD;
        const honeyYield = GAME_CONFIG.BASE_HONEY_YIELD;

        set((state) => ({
          garden: state.garden.map((row, y) =>
            row.map((tile, x) =>
              x === position.x && y === position.y
                ? { ...tile, plant: null }
                : tile
            )
          ),
          pollen: state.pollen + pollenYield,
          honey: state.honey + honeyYield,
          energy: state.energy - 5,
        }));
      },

      waterTile: (position: Position) => {
        const { garden, energy } = get();
        const tile = garden[position.y]?.[position.x];

        if (!tile || tile.isWatered || energy < 3) {
          return;
        }

        set((state) => ({
          garden: state.garden.map((row, y) =>
            row.map((tile, x) =>
              x === position.x && y === position.y
                ? { ...tile, isWatered: true }
                : tile
            )
          ),
          energy: state.energy - 3,
        }));
      },

      fertilizeTile: (position: Position) => {
        const { garden, energy } = get();
        const tile = garden[position.y]?.[position.x];

        if (!tile || tile.isFertilized || energy < 5) {
          return;
        }

        set((state) => ({
          garden: state.garden.map((row, y) =>
            row.map((tile, x) =>
              x === position.x && y === position.y
                ? { ...tile, isFertilized: true }
                : tile
            )
          ),
          energy: state.energy - 5,
        }));
      },

      // Bee actions
      addBee: (beeSpecies: string) => {
        const { activeBees, unlockedBees } = get();
        const beeData = getBeeById(beeSpecies);

        if (!beeData || !unlockedBees.includes(beeSpecies)) {
          return;
        }

        const newBee: Bee = {
          id: `${beeSpecies}_${Date.now()}`,
          ...beeData,
        };

        set((state) => ({
          activeBees: [...state.activeBees, newBee],
        }));
      },

      removeBee: (beeId: string) => {
        set((state) => ({
          activeBees: state.activeBees.filter((bee) => bee.id !== beeId),
        }));
      },

      // Game progression
      addPollen: (amount: number) => {
        set((state) => ({ pollen: state.pollen + amount }));
      },

      addHoney: (amount: number) => {
        set((state) => ({ honey: state.honey + amount }));
      },

      addExperience: (amount: number) => {
        set((state) => {
          const newExperience = state.experience + amount;
          const newLevel =
            Math.floor(newExperience / GAME_CONFIG.XP_PER_LEVEL) + 1;

          return {
            experience: newExperience,
            level: newLevel,
          };
        });
      },

      unlockPlant: (plantSpecies: string) => {
        set((state) => ({
          unlockedPlants: [...new Set([...state.unlockedPlants, plantSpecies])],
        }));
      },

      unlockBee: (beeSpecies: string) => {
        set((state) => ({
          unlockedBees: [...new Set([...state.unlockedBees, beeSpecies])],
        }));
      },

      // Settings
      updateSettings: (settings: Partial<GameSettings>) => {
        set((state) => ({
          settings: { ...state.settings, ...settings },
        }));
      },

      // Time management
      advanceDay: () => {
        set((state) => ({ currentDay: state.currentDay + 1 }));
      },

      updateSeason: () => {
        set((state) => {
          const daysInSeason = GAME_CONFIG.DAYS_PER_SEASON;
          const currentDay = state.currentDay;
          const seasonIndex = Math.floor((currentDay - 1) / daysInSeason) % 4;
          const seasons: Season[] = ["spring", "summer", "autumn", "winter"];

          return { currentSeason: seasons[seasonIndex] };
        });
      },

      // Energy system
      useEnergy: (amount: number) => {
        set((state) => ({ energy: Math.max(0, state.energy - amount) }));
      },

      regenerateEnergy: () => {
        set((state) => ({
          energy: Math.min(
            state.maxEnergy,
            state.energy + GAME_CONFIG.ENERGY_REGEN_RATE
          ),
        }));
      },

      // Inventory
      addToInventory: (item: InventoryItem) => {
        // Implementation for inventory management
      },

      removeFromInventory: (itemId: string, quantity = 1) => {
        // Implementation for inventory management
      },

      // Achievements
      updateAchievement: (achievementId: string, progress: number) => {
        // Implementation for achievement tracking
      },

      // Pollination events
      addPollinationEvent: (event: PollinationEvent) => {
        // Implementation for pollination tracking
      },

      // Reset game
      resetGame: () => {
        set({
          ...initialGameState,
          garden: createInitialGarden("small"),
          activeBees: [],
        });
      },
    }),
    {
      name: "pollination-prodigy-game-state",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        currentDay: state.currentDay,
        currentSeason: state.currentSeason,
        energy: state.energy,
        pollen: state.pollen,
        honey: state.honey,
        experience: state.experience,
        level: state.level,
        unlockedPlants: state.unlockedPlants,
        unlockedBees: state.unlockedBees,
        gardenSize: state.gardenSize,
        settings: state.settings,
        garden: state.garden,
        activeBees: state.activeBees,
      }),
    }
  )
);
