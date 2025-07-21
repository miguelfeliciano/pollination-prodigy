import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import screens (to be created)
import HomeScreen from "@/screens/HomeScreen";
import GardenScreen from "@/screens/GardenScreen";
import CatalogScreen from "@/screens/CatalogScreen";
import SettingsScreen from "@/screens/SettingsScreen";
import InventoryScreen from "@/screens/InventoryScreen";

// Import types
import { RootStackParamList, TabParamList } from "@/types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Garden") {
            iconName = focused ? "leaf" : "leaf-outline";
          } else if (route.name === "Catalog") {
            iconName = focused ? "library" : "library-outline";
          } else if (route.name === "Inventory") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = "help-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2d5a2d",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopColor: "#e5e7eb",
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: "#2d5a2d",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "🌻 Home" }}
      />
      <Tab.Screen
        name="Garden"
        component={GardenScreen}
        options={{ title: "🌿 Garden" }}
      />
      <Tab.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{ title: "📚 Catalog" }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{ title: "🎒 Inventory" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "⚙️ Settings" }}
      />
    </Tab.Navigator>
  );
}

// Root Stack Navigator
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
