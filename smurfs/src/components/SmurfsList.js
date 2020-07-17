import React, { useContext } from 'react';
import Smurf from './Smurf';
import {SmurfContext} from '../contexts/SmurfContext';

const SmurfsList = () => {
  const {smurfs} = useContext(SmurfContext);

  return (
    <div>
      <h2>List of All Smurfs</h2>
      {smurfs.map(smurf => (
        <Smurf key={smurf.id} smurf= {smurf} />
      )
        )}
    </div>
  )
};

export default SmurfsList;