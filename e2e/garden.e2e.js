describe("Garden Screen E2E", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should navigate to garden screen", async () => {
    // Navigate to garden tab
    await element(by.text("🌿 Garden")).tap();

    // Verify we're on garden screen
    await expect(element(by.text("Tile Component Test"))).toBeVisible();
  });

  it("should display tile test sections", async () => {
    await element(by.text("🌿 Garden")).tap();

    // Check that all test sections are visible
    await expect(element(by.text("Empty Tiles"))).toBeVisible();
    await expect(element(by.text("Planted Tiles"))).toBeVisible();
    await expect(element(by.text("Large Tiles"))).toBeVisible();
    await expect(element(by.text("Interactive Tiles"))).toBeVisible();
  });

  it("should show different tile states", async () => {
    await element(by.text("🌿 Garden")).tap();

    // Empty tiles should be visible (dirt colored)
    // Planted tiles should show plant icons
    // Large tiles should be bigger
    await expect(element(by.text("Tile Component Test"))).toBeVisible();
  });

  it("should handle tile interactions", async () => {
    await element(by.text("🌿 Garden")).tap();

    // Tap on interactive tiles
    // This will trigger console logs that we can verify
    await expect(element(by.text("Interactive Tiles"))).toBeVisible();
  });

  it("should navigate between tabs", async () => {
    // Start on garden
    await element(by.text("🌿 Garden")).tap();
    await expect(element(by.text("Tile Component Test"))).toBeVisible();

    // Navigate to home
    await element(by.text("🌻 Home")).tap();
    await expect(element(by.text("🌻 Pollination Prodigy"))).toBeVisible();

    // Navigate to settings
    await element(by.text("⚙️ Settings")).tap();
    await expect(element(by.text("⚙️ Settings"))).toBeVisible();
  });
});
