import { combineReducers } from 'redux';

import spinnerReducer from "../reducers/spinnerReducer";
import bugsReducer from "../reducers/bugsReducer";

const rootReducer = combineReducers({
  spinnerState: spinnerReducer,
  bugsState: bugsReducer
});

export default rootReducer;