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

function _1BeddingCard() {
  return (
    <Card
      title="Good Bedding (brown)"
      image={require("../shared/images/worm6.jpg")}
    >
      <Text style={styles.paragraph}>
        Remember that the bedding is 'the brown' for your worms. It's not like
        bedding for your pet; it's a part of their food.{"\n"} {"\n"}
        Torn or shredded brown corrugated cardboard is acceptable. Clean,
        crushed eggshells add grit and calcium. Add shredded black-ink newsprint
        in moderation. Shredded paper is light-weight and great for worms.
        Almost any kind of paper works, but avoid heavy, shiny paper and colored
        paper. It’s not a good idea to use heavily colored or glossy paper since
        they may have inks or other substances that are toxic to red worms.
        {"\n"} {"\n"}
        Be sure to soak any paper products in water to soften them up and remove
        any potential toxic elements out of them. {"\n"} {"\n"}
        As for natural material - peat moss, aged manure, sawdust, dried grass
        clippings, hay, garden loam, and shredded leaves work great. Oak and
        other highly acidic leaves are also not recommended since these worms
        don’t like an acidic environment.
      </Text>
    </Card>
  );
}
function _2GoodFoodCard() {
  return (
    <Card
      title="Good Food (Green)"
      image={require("../shared/images/worm6.jpg")}
    >
      <Text style={styles.paragraph}>
        The ideal diet for composting worms is non-acidic fruit and vegetable
        scraps. So carrots, cucumbers, lettuce, broccoli, cabbage, and squash
        are fine. {"\n"} {"\n"}
        Grains, coffee grounds, tea bags, and pasta are also fair game. {"\n"}
        {"\n"}
        Aged grass clippings and herbivore animal manure are compostable. {"\n"}
        {"\n"}
        Egg Shells provided much needed calcium, and reduce the acidity of the
        compost.{"\n"} {"\n"}
        Larger items should be cut up or run through a food processor. For
        example: whole cabbages and watermelon rind halves will take too long to
        break down.{"\n"} {"\n"}
        Smaller pieces break down faster. This reduces odor and discourages
        pests. {"\n"} {"\n"}
        Worms love coffee grounds! Algae and seaweed make excellent additions to
        your compost pile. Be sure to rinse off any salts before using.{"\n"}
        {"\n"}
        Finally, Feathers and hair (human, cat, dog, etc.) and nail clippings
        break down and are good for worms. You can also provide dryer lint -
        just be careful of giving them plastic microfibers, which can be toxic.
        {"\n"}
        {"\n"}
        Bread is questionable, as it can get gooey. But from a personal
        standpoint, I did not have any issues.
      </Text>
    </Card>
  );
}

function _3BadFoodCard() {
  return (
    <Card
      title="Bad Food (No No)"
      image={require("../shared/images/worm6.jpg")}
    >
      <Text style={styles.paragraph}>
        Acidic foods upset the pH in the bin. Worm bins need a neutral pH to
        stay healthy. If the bin becomes too acidic, there will be a bad odor,
        and the worms’ healthy could be compromised. Very small amounts won't
        make a difference. But too much can kill them.{"\n"}
        {"\n"}
        These foods are too acidic and can be harmful to worms: salty snacks,
        spicy foods, oily sauces, onions and onion skins, Potatoes and potato
        peels, Citrus fruits and their rinds, pineapple, and large amounts of
        tomatoes and tomato sauces.{"\n"}
        {"\n"}
        These foods can take a long time to decompose, attract undesirable pests
        like flies, and cause a foul odor: Animal feces, Meat and meat scraps,
        Fats or fatty foods (most processed food contains butter), Dairy foods
        like cheese, yogurt and milk. {"\n"}
        {"\n"}
        These are just bad ideas: Most non-food items. Do not feed them metals,
        foils, plastics, chemicals, oils, solvents, insecticides, soaps, paint,
        etc.
      </Text>
    </Card>
  );
}

function _4RuleOfThumbCard() {
  return (
    <Card title="Rule of Thumb" image={require("../shared/images/worm6.jpg")}>
      <Text style={styles.paragraph}>
        Remember that smaller pieces break down faster for worms. Worms don't
        have teeth. They gain their nutrients by scooping it through their
        mouths and letting it travel through their gizzard to grind it up.
      </Text>
    </Card>
  );
}

export default function FoodScreen() {
  return (
    <View style={styles.container}>
      {console.log("In Food Screen")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <_1BeddingCard />
          <_2GoodFoodCard />
          <_3BadFoodCard />
          <_4RuleOfThumbCard />
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
  textGold: {
    fontWeight: "bold",
    color: "gold"
  },
  textBold: {
    fontWeight: "bold"
  },
  paragraph: {
    margin: 5,
    lineHeight: 16
  },
  list: {
    paddingLeft: 40
  }
});
