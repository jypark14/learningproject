// @ts-check

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { counterIncrement, counterDecrement } from "../actions/counter";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000080"
  },
  buttons: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  text: {
    fontFamily: "Roboto-Light",
    fontSize: 40,
    flexDirection: "row",
    textAlign: "center",
    margin: 10
  }
});

class Learning_Project extends Component {
  render() {
    return (
      <View
        style={{
          padding: 20
        }}
      >
        <View
          style={
            {
              // flex: 1,
              // padding: 20,
              // flexDirection: "row",
              // justifyContent: "center"
            }
          }
        >
          <Button
            large
            title="Increment +"
            color="green"
            onPress={this.props.actions.counterIncrement}
          />
          <Text>
            <Text style={styles.text}>{this.props.count}</Text>
          </Text>
          <Button
            large
            title="Decrement -"
            color="red"
            onPress={this.props.actions.counterDecrement}
          />
        </View>

        <Button
          large
          title="Increment +"
          color="green"
          onPress={this.props.actions.counterIncrement}
        />
        <Text>
          <Text style={styles.text}>{this.props.count}</Text>
        </Text>

        <Button
          large
          title="Decrement -"
          color="red"
          onPress={this.props.actions.counterDecrement}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: state.CounterReducer.count
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ counterIncrement, counterDecrement }, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Learning_Project);
