import React, { Component, useState } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import axios from 'axios';

//import SmurfsForm from './SmurfsForm';

import { SmurfContext } from '../contexts/SmurfContext';

class App extends Component {
  
  // const [newSmurf, setNewSmurf] = useState([smurfs]);


  state = {
    list: []
  };



  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfContext.Provider>
          {/* <SmurfsForm /> */}
          <SmurfsList />
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;
