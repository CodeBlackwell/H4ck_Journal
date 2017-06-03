import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.scss'
import App from '../components/App/App'
import root from '../reducers'

let store = createStore(root);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);