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
import CounterRow from "../components/counter";
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
  }
});

class CounterList extends Component {
  renderItem({ data, index }) {
    return (
      <CounterRow
        index={index}
        data={this.props.counterList}
        //actions={{ counterIncrement: this.props.actions.counterIncrement }}
        counterIncrement={this.props.actions.counterIncrement}
        counterDecrement={this.props.actions.counterDecrement}
        closeCounter={this.props.actions.closeCounter}
      />
    );
  }
  render() {
    return (
      <View style={styles.counter_col} key={this.props.index}>
        <Button
          large
          title="Add counter"
          color="blue"
          onPress={() => this.props.actions.newCounter(uuid.v4())}
        />
        <FlatList
          keyExtractor={cell => cell.id}
          // Below is the same code
          //   keyExtractor={cell => {
          //     return cell.id;
          //   }}
          data={this.props.counterList}
          renderItem={this.renderItem.bind(this)}
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
)(CounterList);
