import React from "react";
import Admin from "./Admin/Admin";

const admins = props => {
  return props.persons.filter(person => person.role === 'admin').map(person => {
    return (
      <Admin
        key={person.id}
        click={() => props.delete(person.id)}
        name={person.name}
        age={person.age}
        changed={event => props.nameHandler(event, person.id)}
        changedAge={event => props.ageHandler(event, person.id)}
      />
    );
  });
};

export default admins;
