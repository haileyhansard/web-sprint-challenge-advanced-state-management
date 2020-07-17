import React, { useEffect, useState } from "react";
import { SmurfContext }  from '../contexts/SmurfContext';
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';

import "./App.css";
import axios from "axios";


const App = () => {
  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log("error", err)
      })
    }, []);
  
    const onChange = e => {
      const smurf = e.target.name
      setNewSmurf({
        ...newSmurf,
        [smurf]: e.target.value
      })
    }

    const onSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:3333/smurfs", {...newSmurf})
        .then((res => {
          setSmurfs(res.data)
        }))
      };

  return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfContext.Provider value={{ onChange, onSubmit, smurfs }}>
          <SmurfsForm />
          <SmurfsList />
        </SmurfContext.Provider>
      </div>
    );
}


export default App;