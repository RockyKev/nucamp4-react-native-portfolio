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

function WormCard() {
  return (
    <Card title="Local Modules" image={require("../shared/snakeworm.jpg")}>
      {/*react-native-elements Card*/}
      <Text style={styles.paragraph}>
        This is a card from the react-native-elements. This is a card from the
        react-native-elements. This is a card from the react-native-elements.
        This is a card from the react-native-elements.
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
          <WormCard />
          <WormCard />
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
