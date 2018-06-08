// @ts-check

import { Actions } from "../actions/counter";

const counter = {
  count: 0,
  count2: 0
};

const counterCount = {
  counterCount: 0,
  counterList: [{}]
};

export const counterCountReducer = (state = counterCount, action) => {
  switch (action.type) {
    case Actions.newCounter:
      return Object.assign({}, state, {
        counterCount: state.counterCount + 1,
        counterList2: state.counterList.push(counterCount)
      });
    default:
      return state;
  }
};

export const CounterReducer = (state = counter, action) => {
  switch (action.type) {
    case Actions.Increment:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case Actions.Decrement:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case Actions.Increment2:
      return Object.assign({}, state, {
        count2: state.count2 + 1
      });
    case Actions.Decrement2:
      return Object.assign({}, state, {
        count2: state.count2 - 1
      });
    default:
      return state;
  }
};
