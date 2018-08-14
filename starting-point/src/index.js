import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import configureStore from './store'
import './styles/global-styles'
import registerServiceWorker from './utils/registerServiceWorker'

render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
