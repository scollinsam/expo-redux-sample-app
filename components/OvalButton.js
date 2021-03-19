import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class OvalButton extends Component {
  render() {
    return (
      <LinearGradient colors={["#3B66D0", "#1BB3E7"]} style={styles.ovalbutton}>
        <TouchableOpacity onPress={() => this.props.pressFunction}>
          <Text
            onPress={this.props.pressFunction}
            style={styles.ovalbuttontext}
          >
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  ovalbutton: {
    borderRadius: 20,
    height: 35,
    // marginTop: 7,
    width: 100,
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  ovalbuttontext: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 4,
  },
});

export default OvalButton;
