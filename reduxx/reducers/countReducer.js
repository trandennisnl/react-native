import { _INCREMENT } from '../actions/types';
import { _DECREMENT } from '../actions/types';

const initialState = {
  count: 0,
};

// The reducer returns a modified copy of the state (AKA pure functions)
const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case _INCREMENT:
      return {
        ...state, // Copy all state vars and "spread"
        count: state.count + action.payload,
      };
    case _DECREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

export default countReducer;
