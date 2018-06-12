// @ts-check
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Learning_Project from "../src/components/counter";
import { Actions, closeCounter } from "../src/actions/counter";
import { counterCountReducer } from "../src/reducers/counter";
import {
  counterIncrement,
  counterDecrement,
  newCounter
} from "../src/actions/counter";

// Expected array but received object
describe("CounterReducer test", () => {
  it("should return initial state", () => {
    expect(counterCountReducer(undefined, {})).toEqual({
      counterList: []
    });
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
      counterIncrement(0)
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
      counterDecrement(1)
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
    const closeCounterTest = counterCountReducer(counterCount, closeCounter(1));
    expect(closeCounterTest.counterList).toEqual([
      { count: 1, id: "abcd" },
      { count: 0, id: "jklm" }
    ]);
  });
});

//need to talk about this
describe("check id generator", () => {
  it("on newCounter, a new unique id should be generated", () => {
    const counterCount = {
      counterList: []
    };
    const idTest = counterCountReducer(counterCount, newCounter());
    const idTest2 = counterCountReducer(idTest, newCounter());
    console.log(idTest.counterList[0].id);
    console.log(idTest2.counterList[0].id);
    console.log(idTest2.counterList[1].id);
    expect(idTest.counterList[0].id !== idTest2.counterList[0].id).toEqual(
      false
    );
  });
});
