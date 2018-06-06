// @ts-check
export const Actions = {
    Increment: 'Increment',
    Decrement: 'Decrement',
  }

export const counterIncrement = () => ({
    type: Actions.Increment, 
});

export const counterDecrement = () => ({ 
    type: Actions.Decrement 
});
