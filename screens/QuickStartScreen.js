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

function VermicompostCard() {
  return (
    <Card
      title="What is Vermicomposting?"
      image={require("../shared/images/worm-compost.jpg")}
    >
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        Vermicomposting is a bio-friendly method of using red worms to recycle
        food scraps and other organic material into a valuable soil amendment
        called vermicompost, or worm casts. {"\n"} {"\n"}
        Worms are eating nutrient-rich fruit and vegetable scraps, and turning
        them into nutrient-rich compost. The casts are rich in nutrients and
        growth promoting substances that worm compost is frequently called
        <Text style={{ fontWeight: "bold" }}>Black Gold'.</Text> {"\n"} {"\n"}
        Vermicomposting can be done in small apartment, a regular-sized house,
        or even for major buildings. When done correctly, unlike regular
        composting, there's no smell and minimal maintenance. {"\n"} {"\n"}
        With a little effort, the recycling of vegetable scraps and brown
        material (like newspaper and cardboard) can produce incredibly rich
        Organic fertilizer that outperforms chemical fertilization every time.
        Not only is it priceless, but it is also profitable! It is so valuable
        and nutritional for gardening and crop growing that you can find people
        to buy from you fairly easily.
      </Text>
    </Card>
  );
}

function BlackGoldCard() {
  return (
    <Card title="Black Gold?" image={require("../shared/images/garden.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        The casts are rich in nutrients, growth promoting substances, beneficial
        soil micro flora and having properties of inhibiting pathogenic
        microbes.Vermicompost is stable, fine granular organic manure, which
        enriches soil quality by improving its physicochemical and biological
        properties. It is highly useful in raising seedlings and for crop
        production. Vermicompost is becoming popular as a major component of
        organic farming system.
      </Text>
    </Card>
  );
}
function UsingWormsCard() {
  return (
    <Card title="Using Worms" image={require("../shared/images/worm3.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        You should use red worms or red wigglers in the worm bin, which can be
        ordered from a worm farm and mailed to your school. The scientific name
        for the two commonly used red worms are Eisenia foetida and Lumbricus
        rubellus. Worms can live for about one year in the worm bin. If a worm
        dies in your bin, you probably will not notice it. Since the worm's body
        is about 90% water, it will shrivel up and become part of the compost
        rather quickly. New worms are born and others die all the time. Worms
        are hermaphrodites, which means they are both male and female at the
        same time. In order to mate, they still require two worms. The worms
        line up in opposite directions near their band (or clitellum), which
        contains some of the sexual organs. The worms are attached for about 15
        minutes while they exchange sperm cells. Several days later, eggs come
        in contact with the sperm cells and form a cocoon, or egg case. The
        cocoon separates from the worm, then fertilization takes place. Inside
        the cocoon, 2-5 baby worms may be found. The baby worms live in the egg
        case for at least 3 weeks, sometimes longer depending on the surrounding
        conditions. For example, in the winter time, baby worms may stay in the
        cocoon for many weeks until the temperature warms up again. When the
        baby worms eventually crawl out, they are the thickness of a piece of
        thread and possibly 1 cm 1/4" long. Usually the worms appear white, as
        they have not yet developed pigmentation, or do not have enough
        pigmentation (or blood) to be seen. A pound of red wrigglers are
        recommended because they consume waste quickly,
      </Text>
    </Card>
  );
}

export default function QuickStartScreen() {
  return (
    <View style={styles.container}>
      {console.log("here")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <VermicompostCard />
          <BlackGoldCard />
          <UsingWormsCard />
        </View>
      </ScrollView>
    </View>
  );
}

QuickStartScreen.navigationOptions = {
  title: "Quick Start Screen"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  paragraph: {
    margin: 5,
    lineHeight: 16
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
