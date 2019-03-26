import { _INCREMENT } from '../actions/actionTypes';
import { _DECREMENT } from '../actions/actionTypes';

const initialState = {
  counter: 0,
};


// The reducer returns a modified copy of the state (AKA pure functions)
const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case _INCREMENT:
      return {
        ...state, // Copy all state vars and "spread"
        counter: state.counter + action.payload,
      };
    case _DECREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
