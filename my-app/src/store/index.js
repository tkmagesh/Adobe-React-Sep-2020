import { createStore } from 'redux';
import rootReducer from '../reducers';
import compsedMiddlewares from './middlewares';

const store = createStore(
  rootReducer,
  compsedMiddlewares
);

export default store;
