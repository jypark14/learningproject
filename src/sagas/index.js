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

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    const modifiedList = [];

    data.counters.map(key => {
      data.data.map(key2 => {
        if (key2.id === key.id) {
          const temp = [key.pos, key2.count, key2.id];
          modifiedList.push(temp);
        }
      });
    });

    const initialCounter = modifiedList
      .sort(function(a, b) {
        return a[0] - b[0];
      })
      .map(key => {
        return { count: key[1], id: uuid.v4() };
      });

    yield put(receiveApiData(initialCounter));
  } catch (e) {
    yield put(apiDataError());
  }
}

export default function* mySaga() {
  yield takeLatest(Actions.requestApiData, getApiData);
}
