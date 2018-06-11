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

class Learning_Project extends Component {
  renderItem({ item, index }) {
    return (
      <View style={styles.counter_row}>
        <Button
          title="Increment +"
          color="green"
          onPress={() => {
            this.props.actions.counterIncrement(index);
          }}
        />
        <Text style={styles.text}>{item.count}</Text>
        <Button
          title="Decrement -"
          color="red"
          onPress={() => {
            this.props.actions.counterDecrement(index);
          }}
        />
        <Button
          title="X"
          color="black"
          onPress={() => {
            this.props.actions.closeCounter(index);
          }}
        />
      </View>
    );
  }
}
export default Learning_Project;
//   render() {
//     return (
//       <View style={styles.counter_col}>
//         <Button
//           large
//           title="Add counter"
//           color="blue"
//           onPress={this.props.actions.newCounter}
//         />
//         <FlatList
//           keyExtractor={item => item.key}
//           data={this.props.counterList}
//           renderItem={this.renderItem.bind(this)}
//         />
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   counterList: state.counterCountReducer.counterList
// });

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(
//     {
//       counterIncrement,
//       counterDecrement,
//       newCounter,
//       closeCounter
//     },
//     dispatch
//   )
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Learning_Project);
