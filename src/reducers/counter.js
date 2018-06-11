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
      const newCounterList = [...state.counterList, { count: 0 }];
      //count:0 ??
      return Object.assign({}, state, {
        counterList: newCounterList
      });
    }
    case Actions.Increment: {
      const counterList2 = state.counterList.map(counter => counter);
      const newcount = counterList2[action.key].count + 1;
      counterList2[action.key].count = newcount;
      // const counterList2 = state.counterList.map(
      //   (counter, index) => counter + (index === action.key)
      //   // index = {key}
      // );

      return Object.assign({ counterList: counterList2 }, state);
    }

    // const counterList2 = state.counterList.map(
    //   (counter, index) =>
    //     index === action.key
    //       ? {
    //           ...state.counterList,
    //           count: state.counterList[index].count + 1
    //         }
    //       : counter
    // return Object.assign({}, state, );
    // }

    case Actions.Decrement: {
      const counterList2 = state.counterList.map(counter => counter);
      const newcount = counterList2[action.key].count - 1;
      counterList2[action.key].count = newcount;
      return Object.assign({ counterList: counterList2 }, state);
    }

    default:
      return state;
  }
};
