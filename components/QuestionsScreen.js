import React from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import QuestionForm from "./QuestionForm";

class QuestionsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false,
    };
  }
  closeModal = () => {
    this.setState({
      modalOn: !this.state.modalOn,
    });
  };
  render() {
    return (
      <View style={{ flex: 1, textAlign: "center" }}>
        <Text>This is the Questionssss Screen</Text>
        <Button onPress={this.closeModal} title="open modal"></Button>
        {this.state.modalOn && <QuestionForm />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "blue",
    // zIndex: 100,
    height: 200,
    width: 300,
    top: 100,
    left: 17,
    textAlign: "center",
    // display: "flex",
    color: "red",
    // flexDirection: "column",
    // justifyContent: "space-around",
    alignItems: "center",
    // paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    // borderRadius: 20,
    // marginTop: 20,
  },
});

export default QuestionsScreen;
