import { Plant, PlantTraits, Season, Rarity } from "@/types";

export const PLANTS_DATA: Omit<
  Plant,
  "id" | "plantedAt" | "position" | "currentStage"
>[] = [
  // Common plants (free tier)
  {
    name: "Sunflower",
    species: "helianthus_annuus",
    growthTime: 1800, // 30 minutes
    traits: {
      color: "#fbbf24",
      size: "large",
      season: ["summer", "autumn"],
      waterNeeds: "medium",
      sunNeeds: "full",
    },
    rarity: "common",
    unlocked: true,
  },
  {
    name: "Daisy",
    species: "bellis_perennis",
    growthTime: 1200, // 20 minutes
    traits: {
      color: "#ffffff",
      size: "small",
      season: ["spring", "summer"],
      waterNeeds: "low",
      sunNeeds: "partial",
    },
    rarity: "common",
    unlocked: true,
  },
  {
    name: "Dandelion",
    species: "taraxacum_officinale",
    growthTime: 900, // 15 minutes
    traits: {
      color: "#fbbf24",
      size: "small",
      season: ["spring", "summer"],
      waterNeeds: "low",
      sunNeeds: "full",
    },
    rarity: "common",
    unlocked: true,
  },

  // Uncommon plants
  {
    name: "Rose",
    species: "rosa",
    growthTime: 2400, // 40 minutes
    traits: {
      color: "#ec4899",
      size: "medium",
      season: ["spring", "summer", "autumn"],
      waterNeeds: "medium",
      sunNeeds: "full",
    },
    rarity: "uncommon",
    unlocked: false,
  },
  {
    name: "Lavender",
    species: "lavandula",
    growthTime: 2100, // 35 minutes
    traits: {
      color: "#a855f7",
      size: "medium",
      season: ["summer"],
      waterNeeds: "low",
      sunNeeds: "full",
    },
    rarity: "uncommon",
    unlocked: false,
  },
  {
    name: "Tulip",
    species: "tulipa",
    growthTime: 1500, // 25 minutes
    traits: {
      color: "#ef4444",
      size: "medium",
      season: ["spring"],
      waterNeeds: "medium",
      sunNeeds: "partial",
    },
    rarity: "uncommon",
    unlocked: false,
  },

  // Rare plants
  {
    name: "Orchid",
    species: "orchidaceae",
    growthTime: 3600, // 1 hour
    traits: {
      color: "#ec4899",
      size: "medium",
      season: ["spring", "summer"],
      waterNeeds: "high",
      sunNeeds: "shade",
    },
    rarity: "rare",
    unlocked: false,
  },
  {
    name: "Lotus",
    species: "nelumbo",
    growthTime: 4200, // 1 hour 10 minutes
    traits: {
      color: "#f3f4f6",
      size: "large",
      season: ["summer"],
      waterNeeds: "high",
      sunNeeds: "full",
    },
    rarity: "rare",
    unlocked: false,
  },

  // Epic plants
  {
    name: "Golden Rose",
    species: "rosa_aurea",
    growthTime: 5400, // 1 hour 30 minutes
    traits: {
      color: "#fbbf24",
      size: "large",
      season: ["summer", "autumn"],
      waterNeeds: "medium",
      sunNeeds: "full",
    },
    rarity: "epic",
    unlocked: false,
  },
  {
    name: "Moonflower",
    species: "ipomoea_alba",
    growthTime: 4800, // 1 hour 20 minutes
    traits: {
      color: "#f3f4f6",
      size: "medium",
      season: ["summer", "autumn"],
      waterNeeds: "medium",
      sunNeeds: "partial",
    },
    rarity: "epic",
    unlocked: false,
  },

  // Legendary plants
  {
    name: "Rainbow Lily",
    species: "lilium_arcus",
    growthTime: 7200, // 2 hours
    traits: {
      color: "#a855f7",
      size: "large",
      season: ["spring", "summer", "autumn"],
      waterNeeds: "high",
      sunNeeds: "full",
    },
    rarity: "legendary",
    unlocked: false,
  },
  {
    name: "Phoenix Flower",
    species: "phoenix_floris",
    growthTime: 9000, // 2 hours 30 minutes
    traits: {
      color: "#ef4444",
      size: "large",
      season: ["summer"],
      waterNeeds: "low",
      sunNeeds: "full",
    },
    rarity: "legendary",
    unlocked: false,
  },
];

export const getPlantById = (species: string) => {
  return PLANTS_DATA.find((plant) => plant.species === species);
};

export const getPlantsByRarity = (rarity: Rarity) => {
  return PLANTS_DATA.filter((plant) => plant.rarity === rarity);
};

export const getPlantsBySeason = (season: Season) => {
  return PLANTS_DATA.filter((plant) => plant.traits.season.includes(season));
};
