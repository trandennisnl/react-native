import { _CAT } from '../actions/actionTypes';
import { _DOG } from '../actions/actionTypes';

// Methods that return the (type, payload)

// Payload is unecessary in this count app...
// added to show design structur for more complicated state changes

export const toCat = () => {
  return {
    type: _CAT,
    payload: 'Cat'
  }
};

export const toDog = () => {
  return {
    type: _DOG,
    payload: 'Dog'
  }
};
