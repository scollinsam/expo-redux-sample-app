import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { connect } from "react-redux";
import QuestionForm from "./QuestionForm";
import Search from "./Search";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.initialRegion = {
      latitude: 40.73568548672021,
      latitudeDelta: 0.068669553376473,
      longitude: -73.99093648458006,
      longitudeDelta: 0.005231581628323,
    };
  }
  render() {
    console.log("isdestselected = " + this.props.isdestselected);
    console.log(this.props.markers);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={this.initialRegion}
        >
          <Search />
        </MapView>
        {this.props.isdestselected && <QuestionForm />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    display: "flex",
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
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

const mapStateToProps = (store) => {
  return {
    selected_dest: store.selected_dest,
    isdestselected: store.isdestselected,
    questions: store.questions,
    markers: store.markers,
  };
};

export default connect(mapStateToProps)(MapScreen);
