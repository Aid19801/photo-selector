import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { HomePage } from './containers';

const App =() => (
      <div>
          <HomePage />
      </div>
);

ReactDOM.render(<App />, document.getElementById('root'));