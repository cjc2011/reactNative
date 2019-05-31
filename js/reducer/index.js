import {
  combineReducers
} from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { RootNaviagtor, middlewar, AppWithNavigationState } from '../navgators/AppNavigator.js'
import themeReducer from '../reducer/theme/index.js'

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
  theme: themeReducer
})

export default index



// ============== 
// const store = createStore(
//   appReducer,
//   applyMiddleware(middlewar)
// );

// export default class Root extends Component{
//   render() {
//     return (
//       <Provider store={store}>
//         <AppWithNavigationState />
//       </Provider>
//     )
//   }
// }