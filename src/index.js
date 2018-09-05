import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { App } from './components/App'
import audioReducer from './store/reducers/audioReducer'
import textReducer from './store/reducers/textReducer'

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const rootReducer = combineReducers({
  audio: audioReducer,
  text: textReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const rootElement = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

if (module.hot) {
  module.hot.accept()
}
