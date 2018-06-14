// @ts-check

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { Button } from "react-native-elements";
import {
  counterIncrement,
  counterDecrement,
  newCounter,
  closeCounter,
  requestApiData
} from "../actions/counter";
import CounterRow from "../components/counterRow";
import uuid from "uuid";

const styles = StyleSheet.create({
  counter_col: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: "center",
    alignSelf: "center"
  }
});

export class CounterList extends Component {
  componentWillMount() {
    this.props.actions.requestApiData();
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
    if (this.props.loading) {
      return (
        <View style={styles.image}>
          <Image source={require("../assets/images/loading.png")} />
        </View>
      );
    }

    if (this.props.error) {
      return (
        <View style={styles.image}>
          <Image source={require("../assets/images/error.png")} />
        </View>
      );
    }

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
  loading: state.data.loading,
  error: state.data.error
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
