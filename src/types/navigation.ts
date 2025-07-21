import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Main: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  Home: undefined;
  Garden: undefined;
  Catalog: undefined;
  Inventory: undefined;
  Settings: undefined;
};
