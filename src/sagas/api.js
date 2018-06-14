// @ts-check
import { apiDataError } from "../actions/counter";

export const fetchData = async () => {
  const response = await fetch("https://api.myjson.com/bins/m7yx6");
  const data = await response.json();
  return data;
};
