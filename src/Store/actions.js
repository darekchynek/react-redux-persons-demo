import {ADD_PERSON, DELETE_PERSON, SHOW_PERSONS, SHOW_NEW_PERSON, CHANGE_NAME, CHANGE_AGE} from './constants';

export const addPerson = person => ({
    type: ADD_PERSON,
    person
})

export const deletePerson = id => ({
    type: DELETE_PERSON,
    id
})

export const showPersons = () => ({
    type: SHOW_PERSONS
})

export const showNewPerson = () => ({
    type: SHOW_NEW_PERSON
})

export const changeName = (id, name) => ({
    type: CHANGE_NAME,
    id,
    name
})

export const changeAge = (id, age) => ({
    type: CHANGE_AGE,
    id,
    age
})