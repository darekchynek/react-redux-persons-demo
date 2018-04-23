import React from "react";
import Person from "./Person/Person";

const persons = (props) => {
    return props.persons.map(person => {
      return (
        <Person
          key={person.id}
          click={() => props.delete(person.id)}
          name={person.name}
          age={person.age}
          changed={event => props.nameHandler(event, person.id)}
          changedAge={event => props.ageHandler(event, person.id)}
        />
      );
    });
  }

export default persons;
