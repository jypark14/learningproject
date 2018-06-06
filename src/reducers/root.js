// @ts-check
import { combineReducers } from 'redux';
import { CounterReducer } from './counter';

const rootReducer = combineReducers({ CounterReducer });

export default rootReducer;   

