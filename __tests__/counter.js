// @ts-check
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Learning_Project } from "../src/components/counter";
import { Actions } from "../src/actions/counter";
import { CounterReducer } from "../src/reducers/counter";
import {
  counterIncrement,
  counterDecrement,
  counterIncrement2,
  counterDecrement2
} from "../src/actions/counter";
describe("Stateless Components Render", () => {
  const stringProp = "test";

  it("Learning Project render", () => {
    renderer.create(
      <Learning_Project
        actions={{
          counterIncrement: () => undefined,
          counterDecrement: () => undefined
        }}
      />
    );
  });
});

// Expected array but received object
describe("CounterReducer test", () => {
  it("should return initial state", () => {
    expect(CounterReducer(undefined, {})).toEqual({
      count: 0,
      count2: 0
    });
  });
});

describe("CounterReducer test", () => {
  it("should handle Increment on count2", () => {
    expect(
      CounterReducer(
        { count: 0, count2: 0 },
        { type: counterIncrement2().type }
      )
    ).toEqual({
      count: 0,
      count2: 1
    });
  });
});

describe("CounterReducer test", () => {
  it("should handle Decrement on count1", () => {
    expect(
      CounterReducer(
        { count: 3, count2: 0 },
        { type: counterIncrement2().type }
      )
    ).toEqual({
      count: 3,
      count2: 1
    });
  });
});
