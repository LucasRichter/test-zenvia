import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import Axios from 'axios'
import configureAppStore from './__store__/store'

Axios.defaults.baseURL = process.env.REACT_APP_API_DOMAIN

const store = configureAppStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
