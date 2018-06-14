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

const CounterRow = props => {
  return (
    <View style={styles.counter_row}>
      <Button
        title="Increment +"
        color="green"
        onPress={() => {
          props.counterIncrement(props.data.id);
        }}
      />
      <Text style={styles.text}>{props.data.count}</Text>
      <Button
        title="Decrement -"
        color="red"
        onPress={() => {
          props.counterDecrement(props.data.id);
        }}
      />
      <Button
        title="X"
        color="black"
        onPress={() => {
          props.closeCounter(props.data.id);
        }}
      />
    </View>
  );
};

export default CounterRow;
