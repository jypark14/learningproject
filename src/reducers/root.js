// @ts-check
import { combineReducers } from "redux";
import { counterCountReducer } from "./counter";
import data from "./data";

const rootReducer = combineReducers({ counterCountReducer, data });

export default rootReducer;
