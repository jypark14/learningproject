// @ts-check

import { Actions } from "../actions/counter";

const counter = {
  count: 0
};

const counterCount = {
  counterList: []
};

export const counterCountReducer = (state = counterCount, action) => {
  switch (action.type) {
    case Actions.newCounter: {
      const newCounterList = [...state.counterList, counter];
      return Object.assign({}, state, {
        counterList: newCounterList
      });
    }
    case Actions.Increment: {
      const counterList2 = state.counterList.map(
        (counter, index) =>
          index === action.key
            ? {
                count: state.counterList[index].count + 1,
                ...counter
              }
            : counter
      );

      return Object.assign({}, state, counterList2[action.key]);
    }

    case Actions.Decrement: {
      return Object.assign({}, state, {
        count: state.counterList[action.key].count - 1
      });
    }
    default:
      return state;
  }
};
