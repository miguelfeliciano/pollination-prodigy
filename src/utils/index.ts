import { Plant, PlantStage, Position, Season } from "@/types";
import { GAME_CONFIG } from "@/constants";

// Time and growth utilities
export const calculatePlantStage = (plant: Plant): PlantStage => {
  const now = Date.now();
  const timeSincePlanted = (now - plant.plantedAt) / 1000; // Convert to seconds

  if (timeSincePlanted < GAME_CONFIG.GROWTH_STAGES.SEED_TO_SPROUT) {
    return "seed";
  } else if (
    timeSincePlanted <
    GAME_CONFIG.GROWTH_STAGES.SEED_TO_SPROUT +
      GAME_CONFIG.GROWTH_STAGES.SPROUT_TO_BUDDING
  ) {
    return "sprout";
  } else if (
    timeSincePlanted <
    GAME_CONFIG.GROWTH_STAGES.SEED_TO_SPROUT +
      GAME_CONFIG.GROWTH_STAGES.SPROUT_TO_BUDDING +
      GAME_CONFIG.GROWTH_STAGES.BUDDING_TO_FLOWERING
  ) {
    return "budding";
  } else if (
    timeSincePlanted <
    GAME_CONFIG.GROWTH_STAGES.SEED_TO_SPROUT +
      GAME_CONFIG.GROWTH_STAGES.SPROUT_TO_BUDDING +
      GAME_CONFIG.GROWTH_STAGES.BUDDING_TO_FLOWERING +
      GAME_CONFIG.GROWTH_STAGES.FLOWERING_TO_MATURE
  ) {
    return "flowering";
  } else {
    return "mature";
  }
};

export const getGrowthProgress = (plant: Plant): number => {
  const now = Date.now();
  const timeSincePlanted = (now - plant.plantedAt) / 1000;
  const totalGrowthTime = plant.growthTime;

  return Math.min(1, timeSincePlanted / totalGrowthTime);
};

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
};

// Position and distance utilities
export const calculateDistance = (pos1: Position, pos2: Position): number => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

export const isWithinRange = (
  pos1: Position,
  pos2: Position,
  range: number
): boolean => {
  return calculateDistance(pos1, pos2) <= range;
};

export const getAdjacentPositions = (position: Position): Position[] => {
  const { x, y } = position;
  return [
    { x: x - 1, y },
    { x: x + 1, y },
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x - 1, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y: y + 1 },
  ];
};

// Season utilities
export const getSeasonMultiplier = (
  plantSeason: Season[],
  currentSeason: Season
): number => {
  if (plantSeason.includes(currentSeason)) {
    return 1.0; // Normal growth
  } else if (plantSeason.includes(getAdjacentSeason(currentSeason))) {
    return 0.5; // Slower growth
  } else {
    return 0.25; // Very slow growth
  }
};

export const getAdjacentSeason = (season: Season): Season => {
  const seasons: Season[] = ["spring", "summer", "autumn", "winter"];
  const currentIndex = seasons.indexOf(season);
  const nextIndex = (currentIndex + 1) % seasons.length;
  return seasons[nextIndex];
};

// Pollination utilities
export const calculatePollinationYield = (
  baseYield: number,
  beeEfficiency: number,
  plantRarity: string,
  seasonMultiplier: number,
  isWatered: boolean,
  isFertilized: boolean
): number => {
  let multiplier = beeEfficiency * seasonMultiplier;

  // Rarity bonuses
  const rarityMultipliers = {
    common: 1.0,
    uncommon: 1.2,
    rare: 1.5,
    epic: 2.0,
    legendary: 3.0,
  };
  multiplier *=
    rarityMultipliers[plantRarity as keyof typeof rarityMultipliers] || 1.0;

  // Care bonuses
  if (isWatered) multiplier *= 1.1;
  if (isFertilized) multiplier *= 1.2;

  return Math.floor(baseYield * multiplier);
};

// Random utilities
export const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const randomChoice = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const randomChance = (probability: number): boolean => {
  return Math.random() < probability;
};

// Color utilities
export const getRarityColor = (rarity: string): string => {
  const colors = {
    common: "#6b7280",
    uncommon: "#10b981",
    rare: "#3b82f6",
    epic: "#a855f7",
    legendary: "#fbbf24",
  };
  return colors[rarity as keyof typeof colors] || colors.common;
};

// Validation utilities
export const isValidPosition = (
  position: Position,
  gardenSize: number
): boolean => {
  return (
    position.x >= 0 &&
    position.x < gardenSize &&
    position.y >= 0 &&
    position.y < gardenSize
  );
};

export const isPositionEmpty = (
  garden: any[][],
  position: Position
): boolean => {
  return !garden[position.y]?.[position.x]?.plant;
};

// Animation utilities
export const interpolateValue = (
  value: number,
  inputRange: [number, number],
  outputRange: [number, number]
): number => {
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;

  const ratio = (value - inputMin) / (inputMax - inputMin);
  return outputMin + ratio * (outputMax - outputMin);
};

// Storage utilities
export const generateId = (): string => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

// Game balance utilities
export const calculateLevelExperience = (level: number): number => {
  return level * GAME_CONFIG.XP_PER_LEVEL;
};

export const calculateEnergyRegenTime = (
  currentEnergy: number,
  maxEnergy: number
): number => {
  const energyNeeded = maxEnergy - currentEnergy;
  return (
    (energyNeeded / GAME_CONFIG.ENERGY_REGEN_RATE) *
    GAME_CONFIG.ENERGY_REGEN_INTERVAL
  );
};
