import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import Store from './Store';
import arrayOfStores from './database';

import './App.css';

//Props is information coming from a Parent Component down to its children
  //Information that's passed when the component is created
  //Props is always received as a POJO

  //JS code can be interpolated with {}
//arrayOfStores needs to be saved to state somewhere, so we can dynamically decide on the number of stores to render

class App extends React.Component {

  state = {
    stores: arrayOfStores
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
          <Header title="Storey Time"/>
  
          <ul>
            
          </ul>
  
      </div>
    );
  }
 
}

export default App;
