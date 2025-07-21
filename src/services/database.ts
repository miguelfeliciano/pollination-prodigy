import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";
import { GameState, Plant, Bee, PollinationEvent, Achievement } from "@/types";

class DatabaseService {
  private db: SQLite.SQLiteDatabase | null = null;

  async init(): Promise<void> {
    try {
      this.db = await SQLite.openDatabaseAsync("pollination_prodigy.db");
      await this.createTables();
    } catch (error) {
      console.error("Failed to initialize database:", error);
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) return;

    const createTablesSQL = `
      -- Game state table
      CREATE TABLE IF NOT EXISTS game_state (
        id INTEGER PRIMARY KEY,
        current_day INTEGER DEFAULT 1,
        current_season TEXT DEFAULT 'spring',
        energy INTEGER DEFAULT 100,
        max_energy INTEGER DEFAULT 100,
        pollen INTEGER DEFAULT 0,
        honey INTEGER DEFAULT 0,
        experience INTEGER DEFAULT 0,
        level INTEGER DEFAULT 1,
        garden_size TEXT DEFAULT 'small',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Plants table
      CREATE TABLE IF NOT EXISTS plants (
        id TEXT PRIMARY KEY,
        species TEXT NOT NULL,
        name TEXT NOT NULL,
        growth_time INTEGER NOT NULL,
        planted_at INTEGER NOT NULL,
        position_x INTEGER NOT NULL,
        position_y INTEGER NOT NULL,
        current_stage TEXT DEFAULT 'seed',
        traits TEXT NOT NULL,
        rarity TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Bees table
      CREATE TABLE IF NOT EXISTS bees (
        id TEXT PRIMARY KEY,
        species TEXT NOT NULL,
        name TEXT NOT NULL,
        efficiency REAL NOT NULL,
        range INTEGER NOT NULL,
        speed REAL NOT NULL,
        traits TEXT NOT NULL,
        rarity TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Garden tiles table
      CREATE TABLE IF NOT EXISTS garden_tiles (
        position_x INTEGER,
        position_y INTEGER,
        plant_id TEXT,
        is_watered BOOLEAN DEFAULT FALSE,
        is_fertilized BOOLEAN DEFAULT FALSE,
        PRIMARY KEY (position_x, position_y),
        FOREIGN KEY (plant_id) REFERENCES plants (id) ON DELETE SET NULL
      );

      -- Unlocked items table
      CREATE TABLE IF NOT EXISTS unlocked_items (
        id INTEGER PRIMARY KEY,
        type TEXT NOT NULL,
        species TEXT NOT NULL,
        unlocked_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Pollination events table
      CREATE TABLE IF NOT EXISTS pollination_events (
        id TEXT PRIMARY KEY,
        plant_id TEXT NOT NULL,
        bee_id TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        pollen_yield INTEGER NOT NULL,
        honey_yield INTEGER NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (plant_id) REFERENCES plants (id),
        FOREIGN KEY (bee_id) REFERENCES bees (id)
      );

      -- Achievements table
      CREATE TABLE IF NOT EXISTS achievements (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        completed BOOLEAN DEFAULT FALSE,
        progress INTEGER DEFAULT 0,
        max_progress INTEGER NOT NULL,
        reward_type TEXT,
        reward_amount INTEGER,
        reward_item_id TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      -- Settings table
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await this.db.execAsync(createTablesSQL);
  }

  // Game state operations
  async saveGameState(gameState: Partial<GameState>): Promise<void> {
    if (!this.db) return;

    const sql = `
      INSERT OR REPLACE INTO game_state (
        id, current_day, current_season, energy, max_energy, 
        pollen, honey, experience, level, garden_size, updated_at
      ) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
    `;

    await this.db.runAsync(sql, [
      gameState.currentDay || 1,
      gameState.currentSeason || "spring",
      gameState.energy || 100,
      gameState.maxEnergy || 100,
      gameState.pollen || 0,
      gameState.honey || 0,
      gameState.experience || 0,
      gameState.level || 1,
      gameState.gardenSize || "small",
    ]);
  }

  async loadGameState(): Promise<Partial<GameState> | null> {
    if (!this.db) return null;

    const result = await this.db.getFirstAsync<GameState>(
      "SELECT * FROM game_state WHERE id = 1"
    );

    return result || null;
  }

  // Plant operations
  async savePlant(plant: Plant): Promise<void> {
    if (!this.db) return;

    const sql = `
      INSERT OR REPLACE INTO plants (
        id, species, name, growth_time, planted_at, position_x, position_y,
        current_stage, traits, rarity
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await this.db.runAsync(sql, [
      plant.id,
      plant.species,
      plant.name,
      plant.growthTime,
      plant.plantedAt,
      plant.position.x,
      plant.position.y,
      plant.currentStage,
      JSON.stringify(plant.traits),
      plant.rarity,
    ]);
  }

  async loadPlants(): Promise<Plant[]> {
    if (!this.db) return [];

    const plants = await this.db.getAllAsync<any>("SELECT * FROM plants");

    return plants.map((plant) => ({
      id: plant.id,
      species: plant.species,
      name: plant.name,
      growthTime: plant.growth_time,
      plantedAt: plant.planted_at,
      position: { x: plant.position_x, y: plant.position_y },
      currentStage: plant.current_stage,
      traits: JSON.parse(plant.traits),
      rarity: plant.rarity,
      unlocked: true, // Plants in DB are unlocked by default
    }));
  }

  async deletePlant(plantId: string): Promise<void> {
    if (!this.db) return;

    await this.db.runAsync("DELETE FROM plants WHERE id = ?", [plantId]);
  }

  // Bee operations
  async saveBee(bee: Bee): Promise<void> {
    if (!this.db) return;

    const sql = `
      INSERT OR REPLACE INTO bees (
        id, species, name, efficiency, range, speed, traits, rarity
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await this.db.runAsync(sql, [
      bee.id,
      bee.species,
      bee.name,
      bee.efficiency,
      bee.range,
      bee.speed,
      JSON.stringify(bee.traits),
      bee.rarity,
    ]);
  }

  async loadBees(): Promise<Bee[]> {
    if (!this.db) return [];

    const bees = await this.db.getAllAsync<any>("SELECT * FROM bees");

    return bees.map((bee) => ({
      id: bee.id,
      species: bee.species,
      name: bee.name,
      efficiency: bee.efficiency,
      range: bee.range,
      speed: bee.speed,
      traits: JSON.parse(bee.traits),
      rarity: bee.rarity,
      unlocked: true, // Bees in DB are unlocked by default
    }));
  }

  async deleteBee(beeId: string): Promise<void> {
    if (!this.db) return;

    await this.db.runAsync("DELETE FROM bees WHERE id = ?", [beeId]);
  }

  // Garden tile operations
  async saveGardenTile(
    x: number,
    y: number,
    plantId: string | null,
    isWatered: boolean,
    isFertilized: boolean
  ): Promise<void> {
    if (!this.db) return;

    const sql = `
      INSERT OR REPLACE INTO garden_tiles (position_x, position_y, plant_id, is_watered, is_fertilized)
      VALUES (?, ?, ?, ?, ?)
    `;

    await this.db.runAsync(sql, [x, y, plantId, isWatered, isFertilized]);
  }

  async loadGardenTiles(): Promise<any[]> {
    if (!this.db) return [];

    return await this.db.getAllAsync("SELECT * FROM garden_tiles");
  }

  // Unlocked items operations
  async saveUnlockedItem(
    type: "plant" | "bee",
    species: string
  ): Promise<void> {
    if (!this.db) return;

    const sql =
      "INSERT OR IGNORE INTO unlocked_items (type, species) VALUES (?, ?)";
    await this.db.runAsync(sql, [type, species]);
  }

  async loadUnlockedItems(): Promise<{ type: string; species: string }[]> {
    if (!this.db) return [];

    return await this.db.getAllAsync(
      "SELECT type, species FROM unlocked_items"
    );
  }

  // Pollination events operations
  async savePollinationEvent(event: PollinationEvent): Promise<void> {
    if (!this.db) return;

    const sql = `
      INSERT INTO pollination_events (id, plant_id, bee_id, timestamp, pollen_yield, honey_yield)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await this.db.runAsync(sql, [
      event.id,
      event.plantId,
      event.beeId,
      event.timestamp,
      event.pollenYield,
      event.honeyYield,
    ]);
  }

  async loadPollinationEvents(limit = 100): Promise<PollinationEvent[]> {
    if (!this.db) return [];

    return await this.db.getAllAsync<PollinationEvent>(
      "SELECT * FROM pollination_events ORDER BY timestamp DESC LIMIT ?",
      [limit]
    );
  }

  // Settings operations
  async saveSetting(key: string, value: string): Promise<void> {
    if (!this.db) return;

    const sql =
      "INSERT OR REPLACE INTO settings (key, value, updated_at) VALUES (?, ?, CURRENT_TIMESTAMP)";
    await this.db.runAsync(sql, [key, value]);
  }

  async loadSetting(key: string): Promise<string | null> {
    if (!this.db) return null;

    const result = await this.db.getFirstAsync<{ value: string }>(
      "SELECT value FROM settings WHERE key = ?",
      [key]
    );

    return result?.value || null;
  }

  async loadAllSettings(): Promise<Record<string, string>> {
    if (!this.db) return {};

    const settings = await this.db.getAllAsync<{ key: string; value: string }>(
      "SELECT key, value FROM settings"
    );

    return settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as Record<string, string>);
  }

  // Database maintenance
  async clearAllData(): Promise<void> {
    if (!this.db) return;

    const tables = [
      "game_state",
      "plants",
      "bees",
      "garden_tiles",
      "unlocked_items",
      "pollination_events",
      "achievements",
      "settings",
    ];

    for (const table of tables) {
      await this.db.runAsync(`DELETE FROM ${table}`);
    }
  }

  async close(): Promise<void> {
    if (this.db) {
      await this.db.closeAsync();
      this.db = null;
    }
  }
}

export const databaseService = new DatabaseService();
