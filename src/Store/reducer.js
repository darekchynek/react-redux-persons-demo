import { combineReducers } from 'redux';
import { persons } from './Reducers/persons';
import { filter } from './Reducers/filter'

export const rootReducer = combineReducers({
  persons,
  filter
});
