import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.initialRegion = {
      latitude: 40.73568548672021,
      latitudeDelta: 5.068669553376473,
      longitude: -73.99093648458006,
      longitudeDelta: 5.005231581628323,
    };
  }
  render() {
    return <MapView provider={PROVIDER_GOOGLE}></MapView>;
  }
}

export default MapScreen;
