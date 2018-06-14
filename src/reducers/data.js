// @ts-check
import { Actions } from "../actions/counter";

export const initalState = {
  loading: false,
  error: false
};

export default (state = initalState, { type, data }) => {
  switch (type) {
    case Actions.requestApiData:
      return Object.assign({}, state, { loading: true });
    case Actions.receiveApiData:
      return Object.assign({}, state, { loading: false });
    case Actions.apiDataError:
      return Object.assign({}, state, { error: true, loading: false });
    default:
      return state;
  }
};
