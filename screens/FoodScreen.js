import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";

import * as Animatable from "react-native-animatable";
import { Card } from "react-native-elements";

const DATA = [
  {
    id: "0",
    title: "First Item",
    description: "blah blah blah blah blah",
    image: "../shared/snakeworm.jpg"
  },
  {
    id: "1",
    title: "Second Item",
    description: "blah blah blah blah blah",
    image: "../shared/snakeworm.jpg"
  },
  {
    id: "2",
    title: "Third Item",
    description: "blah blah blah blah blah",
    image: "../shared/snakeworm.jpg"
  }
];

function RecommendFoodCard() {
  return (
    <Card title="Recommend Food" image={require("../shared/images/worm6.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        The ideal diet for composting worms is non-acidic fruit and vegetable
        scraps. Grains, bread, coffee grounds, tea bags, and pasta are also fair
        game. Aged grass clippings, hair, and herbivore animal manure are
        compostable. Egg Shells. Larger items should be cut up or run through a
        food processor. Smaller pieces break down faster. This reduces odor and
        discourages pests.
      </Text>
    </Card>
  );
}

function NotRecommendFoodCard() {
  return (
    <Card title="Bad Food" image={require("../shared/images/worm7.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        TAKES TOO LONG: Whole cabbages and watermelon rind halves will take too
        long to break down. CAN SPOIL BIN: , BAD IDEA: Most non-food items.
        HARMFUL TO WORMS: salty snacks, spicy foods, oily sauces, Processed food
        NOT VEGETABLES: Animal feces Meat Fats or fatty foods Dairy foods meat
        scraps, TOO ACIDIC: yogurt Onions and onion skins Potatoes and potato
        peels Citrus fruits and their rinds pineapple bushels of tomatoes
      </Text>
    </Card>
  );
}

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      {console.log("here")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <RecommendFoodCard />
          <NotRecommendFoodCard />
        </View>
      </ScrollView>
    </View>
  );
}

FoodScreen.navigationOptions = {
  title: "Food Screen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
