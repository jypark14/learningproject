// @ts-check
import { Actions } from "../actions/counter";

const initalState = {
  loading: false
};

export default (state = initalState, { type, data }) => {
  switch (type) {
    case Actions.requestApiData:
      return Object.assign({}, state, { loading: true });
    case Actions.receiveApiData:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};
