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
import uuid from "uuid";

const styles = StyleSheet.create({
  counter_row: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  counter_col: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 20,
    flexDirection: "row",
    textAlign: "center",
    margin: 10
  },
  close_button: {
    flexDirection: "row",
    textAlign: "center"
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
            this.props.actions.counterIncrement(this.props.index);
          }}
        />
        <Text style={styles.text}>
          {this.props.data[this.props.index].count}
        </Text>
        <Button
          title="Decrement -"
          color="red"
          onPress={() => {
            this.props.actions.counterDecrement(this.props.index);
          }}
        />
        <Button
          title="X"
          color="black"
          onPress={() => {
            this.props.actions.closeCounter(this.props.index);
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counterList: state.counterCountReducer.counterList
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      counterIncrement,
      counterDecrement,
      newCounter,
      closeCounter
    },
    dispatch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterRow);

//export default CounterRow;
