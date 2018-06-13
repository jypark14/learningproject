// @ts-check
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/root";
import mySaga from "./sagas/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);
