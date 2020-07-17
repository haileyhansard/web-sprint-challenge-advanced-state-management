
import React, { useContext } from 'react';
import axios from 'axios';
import {SmurfContext} from '../contexts/SmurfContext';
import Smurf from './Smurf';
import { render } from 'react-dom';


const SmurfsList = props => {
    state= {
        smurfs: [],
    };

    const {smurfList} = useContext(SmurfContext);

    componentDidMount(); {
        axios
          .get("http://localhost:3333/smurfs")
          .then( res => {
            console.log("Response", res.data)
            this.setState({
              ...this.state, smurfs: res.data
            })
          }) 
          .catch(err => {
            console.log("Something went wrong", err)
          });
        };

  
     return(
        <div>
            <h1>Smurfs List</h1>
            {SmurfsList.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )      

 
};
export default SmurfsList;