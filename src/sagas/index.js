// @ts-check
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  counterIncrement,
  counterDecrement,
  newCounter,
  closeCounter,
  receiveApiData,
  Actions
} from "../actions/counter";
import { fetchData } from "./api";
import uuid from "uuid";

function* getApiData(action) {
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
}

export default function* mySaga() {
  yield takeLatest(Actions.requestApiData, getApiData);
}
