// Game constants and configuration

export const GAME_CONFIG = {
  // Garden sizes
  SMALL_GARDEN_SIZE: 4,
  LARGE_GARDEN_SIZE: 8,

  // Energy system
  MAX_ENERGY: 100,
  ENERGY_REGEN_RATE: 10, // per hour
  ENERGY_REGEN_INTERVAL: 3600000, // 1 hour in ms

  // Growth timers (in seconds)
  GROWTH_STAGES: {
    SEED_TO_SPROUT: 60, // 1 minute
    SPROUT_TO_BUDDING: 300, // 5 minutes
    BUDDING_TO_FLOWERING: 600, // 10 minutes
    FLOWERING_TO_MATURE: 1800, // 30 minutes
  },

  // Pollination
  POLLINATION_COOLDOWN: 30000, // 30 seconds
  BASE_POLLEN_YIELD: 10,
  BASE_HONEY_YIELD: 5,

  // Experience
  XP_PER_POLLINATION: 5,
  XP_PER_LEVEL: 100,

  // Seasons
  DAYS_PER_SEASON: 28,

  // Premium features
  PREMIUM_FEATURES: {
    LARGE_GARDEN: "large_garden",
    UNLIMITED_ENERGY: "unlimited_energy",
    ALL_SPECIES: "all_species",
    NO_ADS: "no_ads",
    MULTIPLE_SAVES: "multiple_saves",
  },
} as const;

export const COLORS = {
  // Primary palette (nature-inspired)
  primary: {
    50: "#f0f8f0",
    100: "#d1e7d1",
    200: "#a3cfa3",
    300: "#75b775",
    400: "#479f47",
    500: "#2d5a2d", // Main brand color
    600: "#1f3f1f",
    700: "#112411",
    800: "#0a1a0a",
    900: "#050d05",
  },

  // Secondary palette (warm, cozy)
  secondary: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316", // Orange accent
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },

  // Accent colors
  accent: {
    yellow: "#fbbf24", // Honey color
    pink: "#ec4899", // Flower color
    purple: "#a855f7", // Rare plant color
    blue: "#3b82f6", // Water color
    green: "#10b981", // Growth color
  },

  // UI colors
  ui: {
    background: "#f0f8f0",
    surface: "#ffffff",
    border: "#e5e7eb",
    text: {
      primary: "#1f2937",
      secondary: "#6b7280",
      disabled: "#9ca3af",
    },
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  },

  // Plant colors
  plants: {
    sunflower: "#fbbf24",
    rose: "#ec4899",
    lavender: "#a855f7",
    daisy: "#ffffff",
    tulip: "#ef4444",
    lily: "#f3f4f6",
  },

  // Bee colors
  bees: {
    honeybee: "#fbbf24",
    bumblebee: "#f59e0b",
    carpenter: "#1f2937",
    mason: "#6b7280",
  },
} as const;

export const SIZES = {
  // Spacing
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,

  // Border radius
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  // Component sizes
  tile: {
    small: 60,
    large: 80,
  },

  icon: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  },
} as const;

export const ANIMATIONS = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
  },
} as const;

export const STORAGE_KEYS = {
  GAME_STATE: "pollination_prodigy_game_state",
  SETTINGS: "pollination_prodigy_settings",
  INVENTORY: "pollination_prodigy_inventory",
  ACHIEVEMENTS: "pollination_prodigy_achievements",
  STATISTICS: "pollination_prodigy_statistics",
} as const;

export const AUDIO = {
  // Background music
  bgm: {
    forest: "forest_ambience.mp3",
    garden: "garden_ambience.mp3",
    night: "night_ambience.mp3",
  },

  // Sound effects
  sfx: {
    plant: "plant_sound.mp3",
    harvest: "harvest_sound.mp3",
    bee: "bee_buzz.mp3",
    water: "water_sound.mp3",
    unlock: "unlock_sound.mp3",
    achievement: "achievement_sound.mp3",
  },
} as const;
