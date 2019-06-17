import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer/index.js'
import { middlewar } from '../navgators/AppNavigator.js'

const logger = store => next => action => {
  const result = next(action)
  console.log('nextState', store.getState)
}

const middleware = [
  middlewar,
  thunk,
  logger
]

// 创建store
export default createStore(
  reducers,
  applyMiddleware(...middleware)
)


