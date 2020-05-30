import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chessdrill from './chessdrill';
import * as serviceWorker from './serviceWorker';

import 'chessdrill/dist/assets/chessdrill.css';
import 'chessdrill/dist/assets/theme.css';

ReactDOM.render(
  <React.StrictMode>
    <Chessdrill />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
