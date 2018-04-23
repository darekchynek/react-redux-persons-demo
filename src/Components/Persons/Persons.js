import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentWillMount() {
    //console.log("[Persons.js] Inside ComponentWillMount");
  }

  componentDidMount() {
    //console.log("[Persons.js] Inside ComponentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    //console.log("[UPDATE Persons.js] Inside componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log("[UPDATE Persons.js] Inside shouldComponentUpdate", nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    //console.log("[UPDATE Persons.js] Inside componentWillUpdate", nextProps, nextState);
  }

  componentDidUpdate() {
    //console.log("[UPDATE Persons.js] Inside componentDidUpdate");
  }

  render() {
    //console.log("[Persons.js] Inside Render");

    return this.props.persons.map((person) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.delete(person.id)}
          name={person.name}
          age={person.age}
          changed={event => this.props.nameHandler(event, person.id)}
          changedAge={event => this.props.ageHandler(event, person.id)}
        />
      );
    });
  }
}

export default Persons;