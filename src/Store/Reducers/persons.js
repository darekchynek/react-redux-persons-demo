import { ADD_PERSON, DELETE_PERSON, FETCH_PERSONS, CHANGE_NAME, CHANGE_AGE} from "../constants";
import { defaultPersons } from "./list";

export const persons = (state = defaultPersons(), action) => {
  switch (action.type) {
    case FETCH_PERSONS:
      return action.persons;
    case ADD_PERSON: 
      return [
        {
          id: action.person.id,
          name: action.person.name,
          age: action.person.age
        },
        ...state
      ]; 
    case CHANGE_NAME: 
      return state.map(
        person => person.id === action.id ? {...person, name: action.name} : person
      );
    case CHANGE_AGE: 
      return state.map(
        person => person.id === action.id ? {...person, age: action.age} : person
      );
    case DELETE_PERSON: 
      return state.filter(person =>
        person.id !== action.id       
      ); 
    default: 
      return state;
  }
}



