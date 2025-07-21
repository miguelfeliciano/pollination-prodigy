# 🌻 Pollination Prodigy

A cozy farming simulation game built with React Native and Expo, where players nurture gardens, attract bees, and crossbreed plants to optimize honey yield and biodiversity.

## 🎯 Project Overview

Pollination Prodigy is a grid-based cozy simulation game inspired by Cozy Grove's palette and Stardew Valley's pace. It's designed to soothe while offering light strategy elements, with a focus on education about pollination and biodiversity.

## 🏗️ Architecture

This project follows the **CLEAN Architecture** pattern with a well-organized folder structure:

```
pollination-prodigy/
├── src/
│   ├── components/          # Reusable UI components
│   ├── screens/            # Screen components
│   ├── navigation/         # Navigation configuration
│   ├── store/             # Zustand state management
│   ├── services/          # External services (SQLite, Audio, etc.)
│   ├── utils/             # Utility functions and helpers
│   ├── constants/         # Game constants and configuration
│   ├── types/             # TypeScript type definitions
│   └── data/              # Game data (plants, bees, etc.)
├── assets/
│   ├── images/            # Game images and sprites
│   ├── sounds/            # Audio files
│   └── fonts/             # Custom fonts
├── App.tsx                # Main app component
└── index.js              # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pollination-prodigy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on device/simulator**

   ```bash
   # iOS
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

## 🎮 Game Features

### Core Gameplay

- **Garden Management**: Plant and nurture flowers in a grid-based garden
- **Bee Attraction**: Different bee species with unique pollination patterns
- **Resource Collection**: Gather pollen and honey from successful pollination
- **Seasonal Effects**: Weather and seasons impact plant growth and bee activity
- **Progression System**: Unlock new plants and bees through gameplay

### Technical Features

- **Offline-First**: Full offline gameplay with local data persistence
- **Cross-Platform**: Works on iOS, Android, and Web
- **Responsive Design**: Adapts to different screen sizes
- **Audio Integration**: Background music and sound effects
- **State Management**: Robust state management with Zustand
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

| Layer                | Technology                |
| -------------------- | ------------------------- |
| **Framework**        | React Native + Expo       |
| **Language**         | TypeScript                |
| **State Management** | Zustand                   |
| **Navigation**       | React Navigation          |
| **Database**         | SQLite (expo-sqlite)      |
| **Audio**            | Expo AV                   |
| **Animations**       | Reanimated 3 + Lottie     |
| **Icons**            | React Native Vector Icons |

## 📁 Project Structure Details

### `/src/components/`

Reusable UI components following atomic design principles:

- `GardenTile.tsx` - Individual garden tile component
- `Plant.tsx` - Plant display component
- `Bee.tsx` - Bee animation component
- `Header.tsx` - Game header with stats
- `Inventory.tsx` - Inventory management component

### `/src/screens/`

Main application screens:

- `HomeScreen.tsx` - Main dashboard and game overview
- `GardenScreen.tsx` - Garden grid and planting interface
- `CatalogScreen.tsx` - Plant and bee catalog
- `InventoryScreen.tsx` - Inventory management
- `SettingsScreen.tsx` - Game settings and preferences

### `/src/store/`

Zustand state management:

- `gameStore.ts` - Main game state and actions
- `settingsStore.ts` - User preferences and settings

### `/src/services/`

External service integrations:

- `database.ts` - SQLite database operations
- `audio.ts` - Audio playback and management
- `monetization.ts` - RevenueCat and AdMob integration

### `/src/data/`

Game data and content:

- `plants.ts` - Plant species data and traits
- `bees.ts` - Bee species data and behaviors
- `achievements.ts` - Achievement definitions
- `seasons.ts` - Seasonal effects and events

### `/src/utils/`

Utility functions and helpers:

- `calculations.ts` - Game balance calculations
- `time.ts` - Time and date utilities
- `validation.ts` - Input validation helpers
- `animations.ts` - Animation utilities

## 🎨 Design System

### Color Palette

- **Primary**: Nature-inspired greens (#2d5a2d)
- **Secondary**: Warm oranges (#f97316)
- **Accent**: Honey yellow (#fbbf24)
- **UI**: Clean whites and grays

### Typography

- **Headings**: Bold, large fonts for hierarchy
- **Body**: Readable, medium-sized text
- **Captions**: Small, secondary information

### Spacing

- Consistent spacing scale (4, 8, 16, 24, 32, 48px)
- Responsive padding and margins
- Card-based layout with proper spacing

## 🔧 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use functional components with hooks
- Implement proper error handling
- Write meaningful commit messages

### State Management

- Use Zustand for global state
- Keep components focused and single-purpose
- Implement proper loading and error states
- Use React Query for server state (if needed)

### Performance

- Implement proper memoization
- Use React Native's performance tools
- Optimize images and assets
- Minimize re-renders

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run test:e2e
```

## 📱 Building for Production

### iOS

```bash
expo build:ios
```

### Android

```bash
expo build:android
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Cozy Grove and Stardew Valley
- Built with React Native and Expo
- Icons from React Native Vector Icons
- Audio assets from various free sources

## 📞 Support

For support and questions:

- Create an issue in the repository
- Check the documentation
- Join our community discussions

---

**Happy Gardening! 🌻🐝**
