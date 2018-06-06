// @ts-check

import { Actions } from '../actions/counter';

export const CounterReducer = (state = { count: 10 }, action) => { 
    switch (action.type) { 
        case Actions.Increment: 
            return Object.assign({}, state, { 
                count: state.count + 1 
            }); 
        case Actions.Decrement: 
            return Object.assign({}, state, { 
                count: state.count -1 
            });
        default: 
            return state; 
    }
}
