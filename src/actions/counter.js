// @ts-check

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
