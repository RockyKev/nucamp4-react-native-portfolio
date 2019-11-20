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

export default function ClickerScreen() {
  return (
    <View style={styles.container}>
      {console.log("here")}

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Text> Stay tuned! Clicker game coming </Text>
        </View>
      </ScrollView>
    </View>
  );
}

ClickerScreen.navigationOptions = {
  title: "Clicker Screen"
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
