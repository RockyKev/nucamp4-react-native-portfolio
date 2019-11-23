import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  FlatList
} from "react-native";

import * as Animatable from "react-native-animatable";
import { Card } from "react-native-elements";

class ClickerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  _handlePressIn = () => {
    this.setState({ count: this.state.count + 1 });
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <TouchableOpacity onClick={() => this._handlePressIn}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Poop: {this.state.count} </Text>
              </View>
              {console.log(this.state.count)}
            </TouchableOpacity>
            <Text> Stay tuned! Clicker game coming </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

ClickerScreen.navigationOptions = {
  title: "Clicker Screen"
};

export default ClickerScreen;

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
  clickElement: {
    width: 100,
    height: 100,
    borderColor: "black"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white"
  },
  paragraph: {
    margin: 5,
    lineHeight: 16
  },
  list: {
    paddingLeft: 40
  }
});
