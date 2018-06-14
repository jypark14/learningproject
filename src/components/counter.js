// @ts-check

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Button } from "react-native-elements";
import {
  counterIncrement,
  counterDecrement,
  newCounter,
  closeCounter
} from "../actions/counter";

const styles = StyleSheet.create({
  counter_row: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
    flexDirection: "row",
    textAlign: "center",
    margin: 10
  }
});

class CounterRow extends Component {
  render() {
    return (
      <View style={styles.counter_row}>
        <Button
          title="Increment +"
          color="green"
          onPress={() => {
            this.props.counterIncrement(this.props.data.id);
          }}
        />
        <Text style={styles.text}>{this.props.data.count}</Text>
        <Button
          title="Decrement -"
          color="red"
          onPress={() => {
            this.props.counterDecrement(this.props.data.id);
          }}
        />
        <Button
          title="X"
          color="black"
          onPress={() => {
            this.props.closeCounter(this.props.data.id);
          }}
        />
      </View>
    );
  }
}

export default CounterRow;
