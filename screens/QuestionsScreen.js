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

function BeddingCard() {
  return (
    <Card
      title="Setting up the bedding"
      image={require("../shared/images/worm-bin2.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        To create the right environment, line your bin with biodegradable
        bedding. You can use peat moss, aged manure, sawdust, dried grass
        clippings, hay, garden loam, even shredded cardboard, newspaper, grocery
        bags, and most types of shredded leaves. moist newspaper strips, and
        worms. Oak and other highly acidic leaves are not recommended since
        these worms don’t like an acidic environment. It’s not a good idea to
        use heavily colored or glossy paper since they may have inks or other
        substances that are toxic to red worms. Worms need moisture to keep
        their skin wet enough to wriggle and burrow with ease. When using paper
        products for bedding, soak them overnight or longer in a separate
        container and then pull them apart into small pieces. For other
        substances, add enough water to your bedding to make them slightly
        moist, like a wrung-out sponge. I use peat moss to make a quick and easy
        bedding, mixing it with warm water before filling the bin about 6 inches
        deep. Add shredded black-ink newsprint in moderation. Torn or shredded
        brown corrugated cardboard is acceptable. Clean, crushed eggshells add
        grit and calcium. Shredded paper – Enough to fill your bin three inches
        deep and extra to add each time you feed the worms once a week. Almost
        any kind of paper works, but avoid heavy, shiny paper and colored paper.
      </Text>
    </Card>
  );
}

function FeedingCard() {
  return (
    <Card
      title="Feeding your Worms"
      image={require("../shared/images/worm-dirt.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        Once a week, do the following: Take the scraps to the worm bin. Gently
        use a trowel to create a hole to put the scraps into. Throw in a small
        handful of shredded paper. Add all the food scraps on top of the paper.
        Cover ALL of the food scraps with dirt and moist paper. Exposed food
        attracts fruit flies, but covered food scraps don’t. Add dirt and moist
        paper to the bin until the worms have made enough compost to use to
        cover the food scraps. Notice what the worms are eating and what they
        are not. Remove any scraps that your worms have not eaten for a while as
        they may not like that type of food (e.g., some worms will not tackle a
        whole potato or citrus rind, but may eat them if they are cut up). Put
        the lid back on the worm bin. Wash out the food scraps container for the
        coming week.
      </Text>
    </Card>
  );
}

function WormsCard() {
  return (
    <Card
      title="Caring for your worms"
      image={require("../shared/images/worm-pregnant.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        Worms need moisture, air, food, darkness, and warm (but not hot)
        temperatures. Bedding, made of newspaper strips or leaves, will hold
        moisture and contain air spaces essential to worms.
      </Text>
    </Card>
  );
}

export default function QuestionsScreen() {
  return (
    <View style={styles.container}>
      {console.log("here")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Text> You will need: Bedding, feeding, and worms. </Text>
          <BeddingCard />
          <FeedingCard />
          <WormsCard />
        </View>
      </ScrollView>
    </View>
  );
}

QuestionsScreen.navigationOptions = {
  title: "Info Screen"
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
