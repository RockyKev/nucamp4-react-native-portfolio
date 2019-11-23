import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
// import LinksScreen from "../screens/LinksScreen";
// import SettingsScreen from "../screens/SettingsScreen";

import QuickStartScreen from "../screens/QuickStartScreen";
import QuestionsScreen from "../screens/QuestionsScreen";
import FoodScreen from "../screens/FoodScreen";
import ClickerScreen from "../screens/ClickerScreen";

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

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: "Links",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-link" : "md-link"}
//     />
//   )
// };

// LinksStack.path = "";

const ClickerStack = createStackNavigator(
  {
    Clicker: ClickerScreen
  },
  config
);

ClickerStack.navigationOptions = {
  tabBarLabel: "Clicker",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-play" : "md-play"}
    />
  )
};

ClickerStack.path = "";

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
      name={Platform.OS === "ios" ? "ios-ice-cream" : "md-ice-cream"}
    />
  )
};

FoodStack.path = "";

const QuestionsStack = createStackNavigator(
  {
    Questions: QuestionsScreen
  },
  config
);

QuestionsStack.navigationOptions = {
  tabBarLabel: "Questions",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-help" : "md-help"}
    />
  )
};

QuestionsStack.path = "";

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
  QuickStartStack,
  QuestionsStack,
  FoodStack,
  ClickerStack
});

tabNavigator.path = "";

export default tabNavigator;
