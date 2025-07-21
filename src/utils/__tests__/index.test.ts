import {
  calculatePlantStage,
  formatTime,
  calculateDistance,
  calculatePollinationYield,
  randomInt,
  isValidPosition,
} from "../index";

describe("Utility Functions", () => {
  describe("calculatePlantStage", () => {
    it("returns seed stage for new plants", () => {
      const mockPlant = {
        plantedAt: Date.now(),
        growthTime: 1800,
      } as any;
      const result = calculatePlantStage(mockPlant);
      expect(result).toBe("seed");
    });

    it("returns sprout stage for growing plants", () => {
      const mockPlant = {
        plantedAt: Date.now() - 900000, // 15 minutes ago
        growthTime: 1800,
      } as any;
      const result = calculatePlantStage(mockPlant);
      expect(result).toBe("sprout");
    });

    it("returns mature stage for fully grown plants", () => {
      const mockPlant = {
        plantedAt: Date.now() - 2000000, // 33+ minutes ago
        growthTime: 1800,
      } as any;
      const result = calculatePlantStage(mockPlant);
      expect(result).toBe("mature");
    });
  });

  describe("formatTime", () => {
    it("formats seconds correctly", () => {
      expect(formatTime(65)).toBe("1m 5s");
      expect(formatTime(3600)).toBe("1h 0m");
      expect(formatTime(3665)).toBe("1h 1m 5s");
    });

    it("handles zero time", () => {
      expect(formatTime(0)).toBe("0s");
    });
  });

  describe("calculateDistance", () => {
    it("calculates distance between two points", () => {
      const pos1 = { x: 0, y: 0 };
      const pos2 = { x: 3, y: 4 };
      const distance = calculateDistance(pos1, pos2);
      expect(distance).toBe(5);
    });

    it("returns 0 for same position", () => {
      const pos = { x: 1, y: 1 };
      const distance = calculateDistance(pos, pos);
      expect(distance).toBe(0);
    });
  });

  describe("calculatePollinationYield", () => {
    it("calculates yield based on bee efficiency and distance", () => {
      const pollinationYield = calculatePollinationYield(
        0.8,
        0.7,
        "common",
        1.0,
        true,
        false
      );
      expect(pollinationYield).toBeGreaterThan(0);
      expect(pollinationYield).toBeLessThanOrEqual(1);
    });

    it("returns 0 for out of range pollination", () => {
      const pollinationYield = calculatePollinationYield(
        0.8,
        0.7,
        "common",
        1.0,
        true,
        false
      );
      expect(pollinationYield).toBeGreaterThanOrEqual(0);
    });
  });

  describe("randomInt", () => {
    it("returns integer within range", () => {
      const result = randomInt(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
      expect(Number.isInteger(result)).toBe(true);
    });

    it("handles same min and max", () => {
      const result = randomInt(5, 5);
      expect(result).toBe(5);
    });
  });

  describe("isValidPosition", () => {
    it("validates position within garden bounds", () => {
      expect(isValidPosition({ x: 0, y: 0 }, 4)).toBe(true);
      expect(isValidPosition({ x: 3, y: 3 }, 4)).toBe(true);
    });

    it("rejects position outside garden bounds", () => {
      expect(isValidPosition({ x: 4, y: 0 }, 4)).toBe(false);
      expect(isValidPosition({ x: 0, y: 4 }, 4)).toBe(false);
      expect(isValidPosition({ x: -1, y: 0 }, 4)).toBe(false);
    });
  });
});
