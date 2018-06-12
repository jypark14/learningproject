// @ts-check

import { Actions } from "../actions/counter";
import uuid from "uuid";

const counter = {
  count: 0,
  id: ""
};

const counterCount = {
  counterList: []
};

export const counterCountReducer = (state = counterCount, action) => {
  switch (action.type) {
    case Actions.newCounter: {
      const counterNew = Object.assign({}, counter, { id: action.id });
      const newCounterList = [...state.counterList, counterNew];
      return Object.assign({}, state, { counterList: newCounterList });
    }

    case Actions.closeCounter: {
      const deletedList = state.counterList.filter((elem, index) => {
        if (index !== action.key) {
          return { count: elem.count, id: elem.id };
        }
      });
      return Object.assign({}, state, { counterList: deletedList });
    }

    case Actions.Increment: {
      const newCounters = state.counterList.map((elem, index) => {
        if (index === action.key) {
          return { count: elem.count + 1, id: elem.id };
        }
        return elem;
      });
      return Object.assign({}, state, { counterList: newCounters });
    }

    case Actions.Decrement: {
      const newCounters = state.counterList.map((elem, index) => {
        if (index === action.key) {
          return { count: elem.count - 1, id: elem.id };
        }
        return elem;
      });
      return Object.assign({}, state, { counterList: newCounters });
    }
    default:
      return state;
  }
};
