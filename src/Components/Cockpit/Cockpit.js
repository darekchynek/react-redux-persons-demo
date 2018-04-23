import React from 'react';
import Class from './Cockpit.css';

const cockpit = (props) => {
    return (
        <div className={Class.Cockpit}>
            <h1 className={Class.h1Users}>List of Persons</h1>
            <p>This is list of persons with dynamic Classes add</p>
            <button className={props.button} onClick={props.toggleNames}>Show Persons</button>
            <button disabled={props.disabled} onClick={props.toggleNewPerson}>Add New Person</button>
            <button disabled={props.disabled} onClick={props.deleteLastPerson}>Delete Last Add Person</button>
        </div>
    );
}

export default cockpit;
