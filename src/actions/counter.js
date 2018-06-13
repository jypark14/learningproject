// @ts-check
export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({
  type: REQUEST_API_DATA
});
export const receiveApiData = data => ({
  type: RECEIVE_API_DATA,
  data
});

export const Actions = {
  Increment: "Increment",
  Decrement: "Decrement",
  newCounter: "newCounter",
  closeCounter: "closeCounter"
};

export const newCounter = id => ({
  type: Actions.newCounter,
  id
});

export const closeCounter = key => ({
  type: Actions.closeCounter,
  key
});

export const counterIncrement = key => ({
  type: Actions.Increment,
  key
});

export const counterDecrement = key => ({
  type: Actions.Decrement,
  key
});
