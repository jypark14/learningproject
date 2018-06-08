// @ts-check

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import {
  counterIncrement,
  counterDecrement,
  counterIncrement2,
  counterDecrement2,
  newCounter
} from "../actions/counter";

const styles = StyleSheet.create({
  counter_row_first: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  counter_row: {
    // padding: 0,
    flexDirection: "row",
    justifyContent: "center"
  },
  counter_col: {
    flex: 1,
    flexDirection: "column"
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 40,
    flexDirection: "row",
    textAlign: "center",
    margin: 10
  }
});

export class Learning_Project extends Component {
  render() {
    return (
      <View style={styles.counter_col}>
        <Button
          large
          title="Add counter"
          color="blue"
          onPress={this.props.actions.newCounter}
        />
        <View style={styles.counter_row_first}>
          <Button
            large
            title="Increment +"
            color="green"
            onPress={this.props.actions.counterIncrement}
          />
          <Text style={styles.text}>{this.props.count}</Text>
          <Button
            large
            title="Decrement -"
            onPress={this.props.actions.counterDecrement}
          />
        </View>
        <View style={styles.counter_row}>
          <Button
            large
            title="Increment +"
            color="green"
            onPress={this.props.actions.counterIncrement2}
          />
          <Text style={styles.text}>{this.props.count2}</Text>
          <Button
            large
            title="Decrement -"
            color="red"
            onPress={this.props.actions.counterDecrement2}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.CounterReducer.count,
  count2: state.CounterReducer.count2
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      counterIncrement,
      counterDecrement,
      counterIncrement2,
      counterDecrement2
    },
    dispatch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Learning_Project);
