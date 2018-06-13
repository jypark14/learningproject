// @ts-check
import { Actions } from "../actions/counter";

export default (state = {}, { type, data }) => {
  switch (type) {
    case Actions.receiveApiData:
      return data;
    default:
      return state;
  }
};
