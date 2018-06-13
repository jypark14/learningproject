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
  closeCounter,
  requestApiData
} from "../actions/counter";
import CounterRow from "../components/counter";
import uuid from "uuid";

const styles = StyleSheet.create({
  counter_col: {
    flex: 1,
    flexDirection: "column"
  }
});

export class CounterList extends Component {
  componentDidMount() {
    this.props.actions.requestApiData(); //fat arrow
    console.log("componentdidmount!");
  }
  renderItem({ item, index }) {
    return (
      <CounterRow
        data={item}
        counterIncrement={this.props.actions.counterIncrement}
        counterDecrement={this.props.actions.counterDecrement}
        closeCounter={this.props.actions.closeCounter}
      />
    );
  }
  render() {
    return (
      <View style={styles.counter_col}>
        <Button
          large
          title="Add counter"
          color="blue"
          onPress={() => this.props.actions.newCounter(uuid.v4())}
        />
        <FlatList
          keyExtractor={cell => cell.id}
          data={this.props.counterList}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  counterList: state.counterCountReducer.counterList,
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      counterIncrement,
      counterDecrement,
      newCounter,
      closeCounter,
      requestApiData
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
