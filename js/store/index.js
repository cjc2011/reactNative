import {
  createStore,
  applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import React, { Component } from 'react'
import reducers from '../reducer/index.js'
import { middlewar } from '../navgators/AppNavigator.js'

const middleware = [
  middlewar
]

// 创建store
export default createStore(
  reducers,
  applyMiddleware(...middleware)
)


