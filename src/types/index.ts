// Core game types for Pollination Prodigy

export interface Plant {
  id: string;
  name: string;
  species: string;
  growthTime: number; // in seconds
  currentStage: PlantStage;
  plantedAt: number; // timestamp
  position: Position;
  traits: PlantTraits;
  rarity: Rarity;
  unlocked: boolean;
}

export interface Bee {
  id: string;
  name: string;
  species: string;
  efficiency: number; // 0-1
  range: number; // pollination range in tiles
  speed: number; // movement speed
  traits: BeeTraits;
  rarity: Rarity;
  unlocked: boolean;
}

export interface Position {
  x: number;
  y: number;
}

export interface PlantTraits {
  color: string;
  size: "small" | "medium" | "large";
  season: Season[];
  waterNeeds: "low" | "medium" | "high";
  sunNeeds: "shade" | "partial" | "full";
}

export interface BeeTraits {
  color: string;
  size: "small" | "medium" | "large";
  season: Season[];
  flowerPreference: string[]; // plant species IDs
}

export type PlantStage = "seed" | "sprout" | "budding" | "flowering" | "mature";
export type Season = "spring" | "summer" | "autumn" | "winter";
export type Rarity = "common" | "uncommon" | "rare" | "epic" | "legendary";

export interface GardenTile {
  position: Position;
  plant: Plant | null;
  isWatered: boolean;
  isFertilized: boolean;
}

export interface GameState {
  currentDay: number;
  currentSeason: Season;
  energy: number;
  maxEnergy: number;
  pollen: number;
  honey: number;
  experience: number;
  level: number;
  unlockedPlants: string[];
  unlockedBees: string[];
  gardenSize: GardenSize;
  settings: GameSettings;
}

export type GardenSize = "small" | "large";

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  vibrationEnabled: boolean;
  notificationsEnabled: boolean;
}

export interface PollinationEvent {
  id: string;
  plantId: string;
  beeId: string;
  timestamp: number;
  pollenYield: number;
  honeyYield: number;
}

export interface InventoryItem {
  id: string;
  type: "plant" | "bee" | "tool" | "decoration";
  name: string;
  quantity: number;
  maxQuantity: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  progress: number;
  maxProgress: number;
  reward?: {
    type: "pollen" | "honey" | "experience" | "item";
    amount: number;
    itemId?: string;
  };
}
