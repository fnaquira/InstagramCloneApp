import React, { Component } from "react";
import { Text, View } from "react-native";

export default class AddMedia extends Component {
  componentWillMount() {
    this.props.navigation.navigate("AddMediaTabNavigator");
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
