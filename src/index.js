// @ts-check

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { createStore } from "redux";

import { Provider } from "react-redux";
import rootReducer from "./reducers/root";

import CounterList from "./containers/counter";

import { View } from "react-native";

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterList />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("learning_project", () => App);
