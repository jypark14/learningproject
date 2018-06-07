// @ts-check

import { Actions } from "../actions/counter";

const counter = {
  count: 0
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
    default:
      return state;
  }
};
