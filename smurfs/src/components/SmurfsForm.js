import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfsForm = () => {
    const {onSubmit, onChange} = useContext(SmurfContext)
       
        //setData(data); //setting it to local state, need to send to .post server
    
    return (
        <form onSubmit={onSubmit}>
            <div className="entire-form">
                <h1>Add A Smurf</h1>
                <div className="inputs">
                    <h2>Please fill out 3 inputs:</h2>
                        <div>
                            <label>Name:</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Type Smurf's name..."
                                onChange={onChange}
                            />
                        </div>
                    
                        <div>
                            <label>Age:</label>
                            <input 
                                id="age"
                                name="age"
                                type="text"
                                placeholder="How old is this Smurf?"
                                onChange={onChange}
                            />
                        </div>

                        <div>
                            <label>Height:</label>
                            <input 
                                id="height"
                                name="height"
                                type="text"
                                placeholder="Height in cm..."
                                onChange={onChange}
                            />
                        </div>


                        <button>Add Smurf</button>
                </div>
            </div>
        </form>
    )
};

export default SmurfsForm;