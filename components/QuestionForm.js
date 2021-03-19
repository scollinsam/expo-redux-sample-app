import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Modal from "react-native-modal";
import { connect } from "react-redux";
import OvalButton from "./OvalButton";

let marker_id = 0;

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
    };
  }
  closeModal = () => {
    this.props.MarkIsDestSelectedFalse();
  };
  submitQuestion = () => {
    let question = this.props.selected_dest;
    question["question_text"] = this.state.question;
    this.props.MarkIsDestSelectedFalse();
    this.props.SubmitQuestion(question);
    let marker_info = {
      id: marker_id++,
      coords: question.coords,
    };
    this.props.addMarker(marker_info);
  };
  render() {
    return (
      <View>
        <Modal isVisible={true}>
          <View style={styles.modalView}>
            <Text style={{ textAlign: "center" }}>
              {this.props.selected_dest.name}
            </Text>
            <Text>Enter your question here</Text>
            <TextInput
              style={{ height: 40 }}
              placeholder="Enter your question here"
              onChangeText={(text) => this.setState({ question: text })}
              value={this.state.question}
            />
            <OvalButton
              text="Close"
              pressFunction={() => this.props.MarkIsDestSelectedFalse()}
            />
            <OvalButton
              text="Submit"
              pressFunction={() => this.submitQuestion()}
            />
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  // containerView: {
  //   height: 500,
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 30,
  // },
  modalView: {
    backgroundColor: "white",
    // zIndex: 100,
    height: 300,
    width: 300,
    left: 17,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    // marginTop: 20,
  },
});
const mapStateToProps = (store) => {
  return {
    selected_dest: store.selected_dest,
    markers: store.markers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MarkIsDestSelectedFalse: () => {
      dispatch({ type: "SET_IS_DEST_SELECTED", isdestselected: false });
    },
    SubmitQuestion: (question) => {
      dispatch({ type: "ADD_NEW_QUESTION", question: question });
    },
    addMarker: (marker_info) => {
      dispatch({ type: "ADD_MARKER", info: marker_info });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
