# 📄 PRD: **Pollination Prodigy**

_A cozy garden-pollination sim that’s part zen, part science, all vibes._

---

## TL;DR

Pollination Prodigy is a grid-based cozy simulation game where players nurture a garden, attract bees, and crossbreed plants to optimize honey yield and biodiversity. Inspired by Cozy Grove’s palette and Stardew’s pace, it’s meant to soothe while offering light strategy.

---

## 🎯 Goals

- Create a relaxing garden simulation with light management mechanics
- Educate subtly on pollination and biodiversity
- Keep it offline-first, mobile-first, and polished via React Native + Expo

---

## 🧑‍🌾 User Personas

- 🌻 Cozy gamer seeking a low-stress mobile game
- 👩‍🎓 Curious mind who enjoys gardening/bee facts
- 🚶 Casual player looking for a daily ritual or wind-down tool

---

## 🔑 Core Features

| Feature              | Free Users          | Premium Users            |
| -------------------- | ------------------- | ------------------------ |
| Garden size          | Small (4x4)         | Large (8x8)              |
| Energy system        | Limited/day         | Unlimited                |
| Bee/plant crossbreed | Basic species only  | Full species catalog     |
| Audio/SFX toggle     | ✅                  | ✅                       |
| Inventory            | ✅ (limited)        | ✅ (expanded)            |
| Ads                  | ✅ optional rewards | ❌                       |
| Save/load            | ✅ local            | ✅ + multiple save slots |

---

## 🌿 Game Loop

1. Plant flowers.
2. Bees pollinate based on traits and flower proximity.
3. Collect pollen/honey.
4. Use pollen to unlock new plants or crossbreed species.
5. Seasons/weather affect yield and pollination range.
6. Beautify your garden with earned decor items.

---

## 📱 Tech Stack

| Layer        | Tool/Lib                |
| ------------ | ----------------------- |
| Framework    | React Native + Expo     |
| State        | Zustand                 |
| Storage      | SQLite (expo-sqlite)    |
| Audio        | expo-av                 |
| Animations   | Reanimated 3 + Lottie   |
| Monetization | RevenueCat + Expo AdMob |
| Graphics     | SVG + free assets       |

---

## 🧭 Task List & Subtasks

### 🧱 1. Project Setup

- [ ] Initialize Expo project
- [ ] Add navigation (Home, Garden, Catalog, Settings)
- [ ] Install libs: Zustand, SQLite, Reanimated, Lottie, expo-av

---

### 🎨 2. UI & Components

- [ ] Garden grid (4x4 + expandable)

  - [ ] Tile component
  - [ ] Plant component (growing stages)
  - [ ] Bee overlay (hover, pathing)

- [ ] Inventory drawer
- [ ] Bee/Plant catalog (scrollable, unlockable)
- [ ] Header bar (season, day, energy)
- [ ] Settings modal (toggle sound/music)

---

### 🔁 3. Game Logic

- [ ] Planting system (slot-based + cooldown)
- [ ] Pollination trigger (range-based + random chance)
- [ ] Bee/plant data model + trait system
- [ ] Pollen collection & honey yield algorithm
- [ ] Energy system (regen + actions)
- [ ] Season system (day counter + event effects)
- [ ] Unlock tree for flora/fauna

---

### 🧠 4. State & Data

- [ ] Zustand global state setup
- [ ] Garden schema (SQLite):

  - [ ] Grid, plant type, stage, timers
  - [ ] Bee log & pollination history

- [ ] Save/load functions (local)

---

### 🔊 5. Audio & Ambience

- [ ] Ambient track player (forest, bees, wind loop)
- [ ] SFX on actions (plant, collect, rain)
- [ ] Toggle music/sfx in settings

---

### 💰 6. Monetization

- [ ] RevenueCat integration

  - [ ] Unlock premium features
  - [ ] Remove ads

- [ ] Expo AdMob

  - [ ] Rewarded ads for energy/refills
  - [ ] Banner ads in free garden

---

### 🧪 7. Testing & UX Polish

- [ ] Light/dark mode toggle
- [ ] Playtest UI responsiveness
- [ ] Offline mode verification
- [ ] UX polish pass (fonts, spacing, animations)
- [ ] Bug log + fix checklist

---

### 🚀 8. Launch Prep

- [ ] App icons + splash screen
- [ ] Store metadata (description, screenshots)
- [ ] Privacy policy + terms (for ads/IAP)
- [ ] Initial TestFlight / internal Android build

---
