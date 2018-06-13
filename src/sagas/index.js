// @ts-check
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { REQUEST_API_DATA, receiveApiData } from "../actions/counter";
import { fetchData } from "./api";

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
  modifiedList.sort(function(a, b) {
    return a[0] - b[0];
  });
  yield put(receiveApiData(modifiedList));
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
