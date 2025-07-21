# 🐝 Sprint 1: Foundations of the Hive

📆 Duration: 1 Week
🎯 Goal: Display a tappable garden grid, basic plant placement, and early game UI shell.

---

## ✅ Objectives

- ✅ Launch a stable grid-based garden screen
- ⏳ Support plant placement on tap
- ✅ Setup global state (Zustand) for garden tiles
- ✅ Establish navigation + app structure
- ⏳ Use SVGs or simple visuals to simulate flowers and tiles
- ✅ **BONUS**: Complete testing infrastructure setup

---

## 🧩 Task Breakdown

### 1. 🧱 **Navigation Setup**

- [x] **NAV-001** Install + configure React Navigation (stack-based)
- [x] **NAV-002** Create `Home`, `Garden`, and `Settings` screens
- [x] **NAV-003** Set up `navigation/` folder and initial router logic

---

### 2. 🌱 **Garden Grid MVP**

- [x] **GRID-001** Create a basic `GardenScreen.tsx`
- [x] **GRID-002** Create basic `Tile` component with:

  - [x] **GRID-002a** Static tile background (dirt color)
  - [x] **GRID-002b** Basic styling and dimensions
  - [x] **GRID-002c** Test tile renders correctly

- [x] **GRID-003** Create `GardenGrid` component:

  - [x] **GRID-003a** Render 4x4 grid using `View` mapping
  - [x] **GRID-003b** Pass tile data to individual tiles
  - [x] **GRID-003c** Test grid layout and spacing
  - [x] **GRID-003d** Fix grid layout to ensure proper 4x4 rendering

- [ ] **GRID-004** Add tile interaction:

  - [ ] **GRID-004a** Make tiles touchable
  - [ ] **GRID-004b** Add visual feedback on press
  - [ ] **GRID-004c** Test touch events work

- [ ] **GRID-005** Add plant state to tiles:

  - [ ] **GRID-005a** Empty vs planted visual states
  - [ ] **GRID-005b** Test state changes work

- [ ] **GRID-006** Add touch navigation:

  - [ ] **GRID-006a** Implement pan gesture handler
  - [ ] **GRID-006b** Add scrollable garden area
  - [ ] **GRID-006c** Test panning works smoothly

- [ ] **GRID-007** Add pinch-to-zoom:

  - [ ] **GRID-007a** Implement pinch gesture handler
  - [ ] **GRID-007b** Add zoom limits (min/max scale)
  - [ ] **GRID-007c** Test zoom functionality

---

### 3. 🧠 **State Management (Zustand)**

- [x] **STATE-001** Create `store/gardenStore.ts` with:

  - [x] **STATE-001a** `grid` array (16 tiles)
  - [x] **STATE-001b** Actions: `plantFlower(index)`, `resetGarden()`

- [ ] **STATE-002** Wire state into components:

  - [ ] **STATE-002a** Connect `GardenScreen` to store
  - [ ] **STATE-002b** Pass tile data to `GardenGrid`
  - [ ] **STATE-002c** Test state updates reflect in UI

- [ ] **STATE-003** Add plant functionality:

  - [ ] **STATE-003a** Connect tile taps to `plantFlower` action
  - [ ] **STATE-003b** Test planting works end-to-end

- [ ] **STATE-004** Add garden reset:

  - [ ] **STATE-004a** Add reset button to UI
  - [ ] **STATE-004b** Connect to `resetGarden` action
  - [ ] **STATE-004c** Test reset functionality

---

### 4. 🎨 **Initial Assets**

- [ ] **ASSET-001** Create basic visual assets:

  - [ ] **ASSET-001a** Simple dirt tile background (solid color or basic pattern)
  - [ ] **ASSET-001b** Basic flower icon (simple shape or emoji)
  - [ ] **ASSET-001c** Test assets load correctly

- [ ] **ASSET-002** Integrate assets into components:

  - [ ] **ASSET-002a** Add dirt background to empty tiles
  - [ ] **ASSET-002b** Add flower icon to planted tiles

- [ ] **ASSET-003** Add basic animations:

  - [ ] **ASSET-003a** Plant growth animation (simple scale/opacity)
  - [ ] **ASSET-003b** Test animations work smoothly

---

### 5. ⚙️ **Settings Modal**

- [x] **SETTINGS-001** Create a simple `SettingsScreen` with:

  - [ ] **SETTINGS-002** Add settings toggles:

    - [ ] **SETTINGS-002a** Music toggle switch (UI only)
    - [ ] **SETTINGS-002b** SFX toggle switch (UI only)
    - [ ] **SETTINGS-002c** Test toggles render correctly

  - [x] **SETTINGS-003** Back button navigation

- [ ] **SETTINGS-004** Connect settings to state:

  - [ ] **SETTINGS-004a** Add settings to Zustand store
  - [ ] **SETTINGS-004b** Connect toggle switches to state
  - [ ] **SETTINGS-004c** Test settings persist correctly

---

## 🧪 **Testing Setup**

- [x] **TEST-001** Install testing libraries (Jest, React Native Testing Library, Detox)
- [x] **TEST-002** Configure Jest for Expo project
- [x] **TEST-003** Setup Detox for E2E testing
- [x] **TEST-004** Create test utilities and mocks
- [x] **TEST-005** Add test scripts to package.json
- [x] **TEST-006** Create clean unit test structure
- [x] **TEST-007** Configure .gitignore for testing artifacts
- [x] **TEST-008** Create comprehensive testing documentation

---

## 🎁 Bonus (Optional if time permits)

- [ ] **BONUS-001** Track simple stat: # of planted tiles
- [ ] **BONUS-002** Add garden statistics display
- [ ] **BONUS-003** Add basic sound effects on plant
- [x] **BONUS-004** Write unit tests for Tile component
- [x] **BONUS-005** Write E2E tests for garden navigation
- [x] **BONUS-006** Write unit tests for GardenGrid component

---

## 🧪 Acceptance Criteria

- App launches to home screen
- Garden grid shows on tap
- Can plant flowers into empty tiles
- Global state updates correctly
- All code clean, committed, and pushed

---

## 🎯 **Sprint 1 Achievements**

### **✅ Completed Infrastructure**

- **🧪 Testing Foundation**: Complete Jest setup with working basic tests
- **📚 Documentation**: Comprehensive testing guides and gitignore configuration
- **⚙️ Configuration**: Clean Jest config, test scripts, and E2E setup
- **📁 Organization**: Proper test file structure and gitignore rules

### **📊 Testing Status**

- **Basic Tests**: ✅ 5/5 passing
- **Component Tests**: 📋 Written (waiting for Expo fix)
- **Utility Tests**: 📋 Written (ready to use)
- **E2E Tests**: ✅ Configured (Detox + Maestro)
- **Coverage**: ✅ Configured and working

### **🚀 Ready for Development**

- **Unit Testing**: Foundation complete
- **E2E Testing**: Infrastructure ready
- **Documentation**: Comprehensive guides
- **Best Practices**: Established patterns
