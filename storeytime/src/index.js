//Requiring specific classes/object from packages (like Ruby 'require')
import React from 'react';
import ReactDOM from 'react-dom';

//Importing things from other files
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <h1>Hello World</h1>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
