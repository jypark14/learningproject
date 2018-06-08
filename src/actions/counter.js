// @ts-check
export const Actions = {
  Increment: "Increment",
  Decrement: "Decrement",
  Increment2: "Increment2",
  Decrement2: "Decrement2",
  newCounter: "newCounter"
};

const counterList = [];

export const newCounter = () => ({
  type: Actions.newCounter
});

export const counterIncrement = () => ({
  type: Actions.Increment
});

export const counterDecrement = () => ({
  type: Actions.Decrement
});

export const counterIncrement2 = () => ({
  type: Actions.Increment2
});

export const counterDecrement2 = () => ({
  type: Actions.Decrement2
});
