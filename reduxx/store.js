import { createStore, combineReducers } from 'redux';
import countReducer from './reducers/countReducer';

// Combine all reducers to make one global state
const rootReducer = combineReducers({
  count: countReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
