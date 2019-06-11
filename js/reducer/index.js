import {
  combineReducers
} from 'redux'
import { RootNaviagtor, middlewar, AppWithNavigationState } from '../navgators/AppNavigator.js'
import popularReducer from './popular/index.js'
import trendingReducer from './trending/index.js'

// 指定默认的state
const navState = RootNaviagtor.router.getStateForAction(RootNaviagtor.router.getActionForPathAndParams('Init'))
// const navReducer = createNavigationReducer(RootNaviagtor)

// 创建reducer
const navReducer = (state = navState, action) => {
  const nextState = RootNaviagtor.router.getStateForAction(action, state)
  return nextState || state
}

// 合并reducer
const index = combineReducers({
  nav: navReducer,
  popular: popularReducer,
  trending: trendingReducer
})

export default index
