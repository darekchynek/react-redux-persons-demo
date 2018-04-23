import { SHOW_PERSONS, SHOW_NEW_PERSON } from "../constants";

const defaultFilter = () => {
  return {
      otherState: "some other value",
      showPersons: false,
      showAddPerson: false
    };
};

export const filter = (state = defaultFilter(), action) => {
    switch (action.type) {
      case SHOW_PERSONS:
        return {
            ...state,
            showPersons: !state.showPersons
        };
      case SHOW_NEW_PERSON: 
        return {
            ...state,
            showAddPerson: !state.showAddPerson
        };     
    default: 
        return state;
    } 
};