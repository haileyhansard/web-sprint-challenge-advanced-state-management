import React, { Component } from "react";
import "./App.css";
import SmurfsList from './SmurfsList';
import axios from 'axios';
//import SmurfsForm from './SmurfsForm';

import { SmurfContext } from '../contexts/SmurfContext';

//const [newSmurf, setNewSmurf] = useState([]);
class App extends Component {
  state = {
    smurf: "",
    list: []
  };

componentDidMount() {
  axios
    .get("http://localhost:3333/smurfs")
    .then( res => {
      console.log("Response", res)
      this.setState({
        ...this.state, list: res.data
      })
    }) 
    .catch(err => {
      console.log("Something went wrong", err)
    });
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
