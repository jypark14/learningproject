// @ts-check

import { Actions } from "../actions/counter";
import uuid from "uuid";

const counter = {
  count: 0,
  key: ""
};

const counterCount = {
  counterList: []
};

export const counterCountReducer = (state = counterCount, action) => {
  switch (action.type) {
    case Actions.newCounter: {
      const counterNew = Object.assign({}, counter);
      counterNew.key = uuid.v4();
      const newCounterList = [...state.counterList, counterNew];
      return Object.assign({}, state, { counterList: newCounterList });
    }

    case Actions.closeCounter: {
      const deletedList = state.counterList.filter((elem, index) => {
        if (index !== action.key) {
          return { count: elem.count, key: elem.key };
        }
      });
      return Object.assign({}, state, { counterList: deletedList });
    }

    case Actions.Increment: {
      const newCounters = state.counterList.map((elem, index) => {
        if (index === action.key) {
          return { count: elem.count + 1, key: elem.key };
        }
        return elem;
      });
      return Object.assign({}, state, { counterList: newCounters });
    }

    case Actions.Decrement: {
      const newCounters = state.counterList.map((elem, index) => {
        if (index === action.key) {
          return { count: elem.count - 1, key: elem.key };
        }
        return elem;
      });
      return Object.assign({}, state, { counterList: newCounters });
    }
    default:
      return state;
  }
};
