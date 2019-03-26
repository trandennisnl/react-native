import { _INCREMENT } from './actionTypes';
import { _DECREMENT } from './actionTypes';

// Methods that return the (type, payload)

// Payload is unecessary in this count app...
// added to show design structur for more complicated state changes

export const incr = () => {
  return {
    type: _INCREMENT,
    payload: 1
  }
};

export const decr = () => {
  return {
    type: _DECREMENT,
    payload: -1
  }
};
