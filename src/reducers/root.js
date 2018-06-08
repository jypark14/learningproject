// @ts-check
import { combineReducers } from "redux";
import { counterCountReducer } from "./counter";

const rootReducer = combineReducers({ counterCountReducer });

export default rootReducer;
