import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux'
import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import { RootNaviagtor, middlewar, AppWithNavigationState } from '../navgators/AppNavigator.js'

const navReducer = createNavigationReducer(RootNaviagtor)
const appReducer = combineReducers({
  nav: navReducer
})

const store = createStore(
  appReducer,
  applyMiddleware(middlewar)
);

export default class Root extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}