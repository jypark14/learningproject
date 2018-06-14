// @ts-check
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  counterIncrement,
  counterDecrement,
  newCounter,
  closeCounter,
  receiveApiData,
  apiDataError,
  Actions
} from "../actions/counter";
import { fetchData } from "./api";
import initalState from "../reducers/data";
import uuid from "uuid";

export function* getApiData(action) {
  try {
    const data = yield call(fetchData);

    const counterPosByID = data.counters.reduce((acc, counter) => {
      acc[counter.id] = counter;

      return acc;
    }, {});

    const counters = data.data
      .map(counter => {
        return {
          pos: counterPosByID[counter.id].pos,
          count: counter.count,
          id: counter.id
        };
      })
      .sort(function(a, b) {
        return a.pos - b.pos;
      })
      .map(counter => {
        return { count: counter.count, id: counter.id.toString() };
      });

    yield put(receiveApiData(counters));
  } catch (e) {
    yield put(apiDataError());
  }
}

export default function* mySaga() {
  yield takeLatest(Actions.requestApiData, getApiData);
}
