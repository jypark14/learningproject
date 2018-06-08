// @ts-check
export const Actions = {
  Increment: "Increment",
  Decrement: "Decrement",
  newCounter: "newCounter"
};

export const newCounter = () => ({
  type: Actions.newCounter
});

export const counterIncrement = key => ({
  type: Actions.Increment,
  key
});

export const counterDecrement = key => ({
  type: Actions.Decrement,
  key
});
