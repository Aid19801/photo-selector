import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { HomePage } from './containers';

const App = () => (
    <Provider store={store}>
        <HomePage />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));