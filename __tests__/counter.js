// @ts-check
import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { CounterList } from "../src/containers/counterList";
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
    renderer.create(
      <CounterList
        counterList={[]}
        //loading
        //actions
      />
    );
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

import { runSaga } from "redux-saga";

import { requestApiData, receiveApiData } from "../src/actions/counter";
import { getApiData } from "../src/sagas/index";

jest.mock("../src/sagas/api");

describe("API sagas", () => {
  it("Download data", async () => {
    const dispatched = [];

    const sagaParams = requestApiData();
    await runSaga(
      {
        dispatch: action => dispatched.push(action)
      },
      getApiData,
      sagaParams
    ).done;

    const transformedData = [
      { count: 14, id: "7" },
      { count: 20, id: "5" },
      { count: 43, id: "8" },
      { count: 75, id: "6" }
    ];

    expect(dispatched).toEqual([receiveApiData(transformedData)]);
  });
});
