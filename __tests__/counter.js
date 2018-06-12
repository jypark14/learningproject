// @ts-check
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Learning_Project from "../src/components/counter";
import { Actions } from "../src/actions/counter";
import { counterCountReducer } from "../src/reducers/counter";
import {
  counterIncrement,
  counterDecrement,
  newCounter
} from "../src/actions/counter";

// describe("Stateless Components Render", () => {
//   const stringProp = "test";
//   it("Learning Project render", () => {
//     renderer.create(
//       <Learning_Project
//         actions={{
//           counterIncrement: () => undefined,
//           counterDecrement: () => undefined
//         }}
//       />
//     );
//   });
// });

// Expected array but received object
describe("CounterReducer test", () => {
  it("should return initial state", () => {
    expect(counterCountReducer(undefined, {})).toEqual({
      counterList: []
    });
  });
});

describe("CounterReducer test", () => {
  it("should handle Increment on count2", () => {
    const counterCount = {
      counterList: []
    };
    const newCounterCount = counterCountReducer(counterCount, newCounter());
    expect(newCounterCount.counterList[0]).toEqual({});
  });
});
