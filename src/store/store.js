import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promisesMiddlware from './middlewares/promises'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)
const createStoreWithMiddleware = applyMiddleware(promisesMiddlware, logger)(createStore)

const store = createStoreWithMiddleware(reducer)

export default store;
