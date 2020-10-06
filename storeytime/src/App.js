import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Store from './Store'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Store/>
        <Store/>
      </header>
    </div>
  );
}

export default App;
