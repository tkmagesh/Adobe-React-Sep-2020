import { createStore } from 'redux';
import spinnerReducer from '../reducers/spinnerReducer';
const store = createStore(spinnerReducer);
export default store;
