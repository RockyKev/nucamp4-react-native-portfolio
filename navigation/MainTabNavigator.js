import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";

import FoodScreen from "../screens/FoodScreen";
import QuickStartScreen from "../screens/QuickStartScreen";
import InfoScreen from "../screens/InfoScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const FoodStack = createStackNavigator(
  {
    Food: FoodScreen
  },
  config
);

FoodStack.navigationOptions = {
  tabBarLabel: "Food",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-pizza" : "md-pizza"}
    />
  )
};

FoodStack.path = "";

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen
  },
  config
);

InfoStack.navigationOptions = {
  tabBarLabel: "Info",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? "ios-information-circle"
          : "md-information-circle"
      }
    />
  )
};

InfoStack.path = "";

const QuickStartStack = createStackNavigator(
  {
    QuickStart: QuickStartScreen
  },
  config
);

QuickStartStack.navigationOptions = {
  tabBarLabel: "QuickStart",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-star-outline" : "md-star-outline"}
    />
  )
};

QuickStartStack.path = "";

// Navigator

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  InfoStack,
  QuickStartStack,
  FoodStack
});

tabNavigator.path = "";

export default tabNavigator;
