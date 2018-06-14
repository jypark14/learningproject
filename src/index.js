// @ts-check

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import CounterList from "./containers/counterList";

import store from "./store";

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
