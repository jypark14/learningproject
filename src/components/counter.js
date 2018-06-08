// @ts-check

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import {
  counterIncrement,
  counterDecrement,
  newCounter
} from "../actions/counter";

const styles = StyleSheet.create({
  counter_row: {
    padding: 5,
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
        {this.props.counterList.map((counter, index) => {
          return (
            <View style={styles.counter_row} key={index}>
              <Button
                large
                title="Increment +"
                color="green"
                onPress={() => {
                  this.props.actions.counterIncrement(index);
                }}
              />
              <Text style={styles.text}>{counter.count}</Text>
              <Button
                large
                title="Decrement -"
                onPress={() => {
                  this.props.actions.counterDecrement(index);
                }}
              />
            </View>
          );
        })}
        {/* <View style={styles.counter_row}>
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
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.counterCountReducer.count,
  counterCount: state.counterCountReducer.counterCount,
  counterList: state.counterCountReducer.counterList
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      counterIncrement,
      counterDecrement,
      newCounter
    },
    dispatch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Learning_Project);
