import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import animalReducer from './reducers/animalReducer';

// Combine all reducers to make one global state
const rootReducer = combineReducers({
  counter: counterReducer,
  animal: animalReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
