import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { SearchBar } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeyType={"key"}
        fetchDetails={true}
        autoFillOnNotFound={true}
        // suppressDefaultStyles={true}
        style={{
          listView: {
            position: "relative",
            marginTop: 15,
          },
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          const selecteddest = {};
          selecteddest.address = details.formatted_address;
          selecteddest.coords = {};
          selecteddest.coords.lat = details.geometry.location.lat;
          selecteddest.coords.lng = details.geometry.location.lng;
          selecteddest.name = details.name;
          this.props.MarkIsDestSelectedTrue();
          this.props.SetSelectedDest(selecteddest);
        }}
        query={{
          key: "AIzaSyCN5EH6xd-k1oZDFR3-KAvipTpfs0ZxNlY",
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selected_dest: store.selected_dest,
    isdestselected: store.isdestselected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetSelectedDest: (selecteddest) => {
      dispatch({ type: "SET_SELECTED_DEST", selected_dest: selecteddest });
    },
    MarkIsDestSelectedTrue: () => {
      dispatch({ type: "SET_IS_DEST_SELECTED", isdestselected: true });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
