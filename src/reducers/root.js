// @ts-check
import { combineReducers } from "redux";
import { CounterReducer, counterCountReducer } from "./counter";

const rootReducer = combineReducers({ CounterReducer, counterCountReducer });

export default rootReducer;
