import { _CAT } from '../actions/actionTypes';
import { _DOG } from '../actions/actionTypes';

const initialState = {
  animal: 'NONE',
};


// The reducer returns a modified copy of the state (AKA pure functions)
const animalReducer = (state = initialState, action) => {
  switch(action.type) {
    case _CAT:
      return {
        ...state, // Copy all state vars and "spread"
        animal: action.payload,
      };
    case _DOG:
      return {
        ...state,
        animal: action.payload,
      };
    default:
      return state;
  }
};

export default animalReducer;
