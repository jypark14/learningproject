// @ts-check

import React, { Component } from 'react'; 
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from './src/reducers/root';

import Learning_Project from './src/components/counter';

const store = createStore(rootReducer);

import { View } from 'react-native';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Learning_Project/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('learning_project', () => App);