import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Video extends Component {
  render() {
    return (
      <View style={{ alignSelf: "center" }}>
        <Text style={{ color: "#666", alignSelf: "center" }}>
          {" "}
          No posts available{" "}
        </Text>
      </View>
    );
  }
}
