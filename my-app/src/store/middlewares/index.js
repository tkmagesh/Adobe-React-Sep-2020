import {applyMiddleware } from 'redux';

//tailormade middlewares for learning
/* 
import logger from './loggerMiddleware';
import asyncMiddleware from './asyncMiddleware';
import promiseMiddleware from './promiseMiddleware'

const composedMiddlewares = applyMiddleware(logger, asyncMiddleware, promiseMiddleware); 
*/

import logger from 'redux-logger';
import thunk from 'redux-thunk';
const composedMiddlewares = applyMiddleware(logger, thunk);
export default composedMiddlewares;
