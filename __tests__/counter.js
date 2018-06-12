// @ts-check
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { CounterList } from "../src/containers/counter";
import { Actions } from "../src/actions/counter";
import { counterCountReducer } from "../src/reducers/counter";
import {
  counterIncrement,
  counterDecrement,
  newCounter,
  closeCounter
} from "../src/actions/counter";

describe("Stateless Components Render", () => {
  const stringProp = "test";
  it("Project render", () => {
    renderer.create(<CounterList />);
  });
});

describe("newCounter test", () => {
  it("should include a new counter in list", () => {
    const counterCount = {
      counterList: []
    };
    const newCounterCount = counterCountReducer(counterCount, newCounter());
    expect(newCounterCount.counterList).toEqual([{ count: 0, id: undefined }]);
  });
});

describe("counter increment test", () => {
  it("should increment on count on 1st index", () => {
    const counterCount = {
      counterList: [{ count: 1, id: "abcd" }, { count: 3, id: "efgh" }]
    };
    const increasedCounterCount = counterCountReducer(
      counterCount,
      counterIncrement("abcd")
    );
    expect(increasedCounterCount.counterList).toEqual([
      { count: 2, id: "abcd" },
      { count: 3, id: "efgh" }
    ]);
  });
});

describe("counter decrement test", () => {
  it("should decrease count on 2nd index", () => {
    const counterCount = {
      counterList: [{ count: 1, id: "abcd" }, { count: 3, id: "efgh" }]
    };
    const decreasedCounterCount = counterCountReducer(
      counterCount,
      counterDecrement("efgh")
    );
    expect(decreasedCounterCount.counterList).toEqual([
      { count: 1, id: "abcd" },
      { count: 2, id: "efgh" }
    ]);
  });
});

describe("counter close test", () => {
  it("should filter the counter", () => {
    const counterCount = {
      counterList: [
        { count: 1, id: "abcd" },
        { count: 3, id: "efgh" },
        { count: 0, id: "jklm" }
      ]
    };
    const closeCounterTest = counterCountReducer(
      counterCount,
      closeCounter("efgh")
    );
    expect(closeCounterTest.counterList).toEqual([
      { count: 1, id: "abcd" },
      { count: 0, id: "jklm" }
    ]);
  });
});
