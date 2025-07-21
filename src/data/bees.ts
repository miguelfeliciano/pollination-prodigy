import { Bee, BeeTraits, Season, Rarity } from "@/types";

export const BEES_DATA: Omit<Bee, "id">[] = [
  // Common bees (free tier)
  {
    name: "Honey Bee",
    species: "apis_mellifera",
    efficiency: 0.7,
    range: 2,
    speed: 1.0,
    traits: {
      color: "#fbbf24",
      size: "medium",
      season: ["spring", "summer", "autumn"],
      flowerPreference: [
        "helianthus_annuus",
        "bellis_perennis",
        "taraxacum_officinale",
      ],
    },
    rarity: "common",
    unlocked: true,
  },
  {
    name: "Bumblebee",
    species: "bombus",
    efficiency: 0.8,
    range: 3,
    speed: 0.8,
    traits: {
      color: "#f59e0b",
      size: "large",
      season: ["spring", "summer"],
      flowerPreference: ["helianthus_annuus", "rosa", "lavandula"],
    },
    rarity: "common",
    unlocked: true,
  },
  {
    name: "Carpenter Bee",
    species: "xylocopa",
    efficiency: 0.6,
    range: 2,
    speed: 1.2,
    traits: {
      color: "#1f2937",
      size: "large",
      season: ["spring", "summer"],
      flowerPreference: ["tulipa", "orchidaceae"],
    },
    rarity: "common",
    unlocked: true,
  },

  // Uncommon bees
  {
    name: "Mason Bee",
    species: "osmia",
    efficiency: 0.75,
    range: 2,
    speed: 0.9,
    traits: {
      color: "#6b7280",
      size: "small",
      season: ["spring", "summer"],
      flowerPreference: ["bellis_perennis", "lavandula", "tulipa"],
    },
    rarity: "uncommon",
    unlocked: false,
  },
  {
    name: "Leafcutter Bee",
    species: "megachile",
    efficiency: 0.8,
    range: 3,
    speed: 1.1,
    traits: {
      color: "#374151",
      size: "medium",
      season: ["summer", "autumn"],
      flowerPreference: ["rosa", "nelumbo", "ipomoea_alba"],
    },
    rarity: "uncommon",
    unlocked: false,
  },
  {
    name: "Sweat Bee",
    species: "halictidae",
    efficiency: 0.65,
    range: 1,
    speed: 1.3,
    traits: {
      color: "#10b981",
      size: "small",
      season: ["spring", "summer", "autumn"],
      flowerPreference: ["taraxacum_officinale", "bellis_perennis"],
    },
    rarity: "uncommon",
    unlocked: false,
  },

  // Rare bees
  {
    name: "Orchid Bee",
    species: "euglossini",
    efficiency: 0.9,
    range: 4,
    speed: 1.0,
    traits: {
      color: "#a855f7",
      size: "medium",
      season: ["spring", "summer"],
      flowerPreference: ["orchidaceae", "lilium_arcus"],
    },
    rarity: "rare",
    unlocked: false,
  },
  {
    name: "Blue Banded Bee",
    species: "amegilla",
    efficiency: 0.85,
    range: 3,
    speed: 1.1,
    traits: {
      color: "#3b82f6",
      size: "medium",
      season: ["spring", "summer"],
      flowerPreference: ["lavandula", "nelumbo", "ipomoea_alba"],
    },
    rarity: "rare",
    unlocked: false,
  },

  // Epic bees
  {
    name: "Golden Bee",
    species: "apis_aurea",
    efficiency: 0.95,
    range: 4,
    speed: 1.2,
    traits: {
      color: "#fbbf24",
      size: "large",
      season: ["spring", "summer", "autumn"],
      flowerPreference: ["rosa_aurea", "phoenix_floris"],
    },
    rarity: "epic",
    unlocked: false,
  },
  {
    name: "Crystal Bee",
    species: "apis_crystallum",
    efficiency: 0.9,
    range: 5,
    speed: 0.9,
    traits: {
      color: "#f3f4f6",
      size: "medium",
      season: ["spring", "summer", "autumn", "winter"],
      flowerPreference: ["lilium_arcus", "ipomoea_alba"],
    },
    rarity: "epic",
    unlocked: false,
  },

  // Legendary bees
  {
    name: "Rainbow Bee",
    species: "apis_arcus",
    efficiency: 1.0,
    range: 5,
    speed: 1.3,
    traits: {
      color: "#a855f7",
      size: "large",
      season: ["spring", "summer", "autumn"],
      flowerPreference: ["lilium_arcus", "phoenix_floris", "rosa_aurea"],
    },
    rarity: "legendary",
    unlocked: false,
  },
  {
    name: "Phoenix Bee",
    species: "apis_phoenix",
    efficiency: 1.0,
    range: 6,
    speed: 1.5,
    traits: {
      color: "#ef4444",
      size: "large",
      season: ["summer"],
      flowerPreference: ["phoenix_floris"],
    },
    rarity: "legendary",
    unlocked: false,
  },
];

export const getBeeById = (species: string) => {
  return BEES_DATA.find((bee) => bee.species === species);
};

export const getBeesByRarity = (rarity: Rarity) => {
  return BEES_DATA.filter((bee) => bee.rarity === rarity);
};

export const getBeesBySeason = (season: Season) => {
  return BEES_DATA.filter((bee) => bee.traits.season.includes(season));
};

export const getBeesByFlowerPreference = (plantSpecies: string) => {
  return BEES_DATA.filter((bee) =>
    bee.traits.flowerPreference.includes(plantSpecies)
  );
};
