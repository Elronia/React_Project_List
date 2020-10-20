import React from 'react';
// import logo from './logo.svg';
import Header from './Header';
import StoreContainer from './StoreContainer';
import arrayOfStores from './database';
import Form from './Form'

import './App.css';

//Props is information coming from a Parent Component down to its children
  //Information that's passed when the component is created
  //Props is always received as a POJO

  //JS code can be interpolated with {}
//arrayOfStores needs to be saved to state somewhere, so we can dynamically decide on the number of stores to render

//Parent's state can be sent down as props (state -> props (OK))
//Child's props should not become child's state (props -> state (NO) )

class App extends React.Component {

  state = {
    stores: arrayOfStores
  }

  render(){
    console.log(arrayOfStores)
    return (
      <div className="App">
          <Header title="Storey Time"/>
          <Form />
          <StoreContainer stores={this.state.stores}/>
  
      </div>
    );
  }
 
}

export default App;
