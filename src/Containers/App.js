import React, { Component } from 'react';
import Class from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import AdminsView from '../Components/AdminsView/AdminsView';
import Admins from '../Components/AdminsView/Admins/Admins';
import { connect } from 'react-redux';
import { showPersons, showNewPerson, addPerson, changeName, changeAge, deletePerson } from '../Store/actions';
import { randomUid } from '../Store/Reducers/persons';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside Constructor", props);
  }

  nameHandler = (event, id) => {
    const name = event.target.value;
    this.props.dispatch(changeName(id, name));
  };

  ageHandler = (event, id) => {
    const age = event.target.value;
    this.props.dispatch(changeAge(id, age));
  };

  deletePersonHandler = id => {
    this.props.dispatch(deletePerson(id));
  };

  deleteLastPerson = () => {
    const lastIndex = this.props.persons[0].id;
    this.props.dispatch(deletePerson(lastIndex));
  };

  toggleNames = () => {
    this.props.dispatch(showPersons());
  };

  toggleNewPerson = () => {
    const newPerson = {
      name: "",
      age: "",
      id: randomUid + "a" + this.props.persons.length,
      role: "user"
    };
    this.props.dispatch(addPerson(newPerson));
    this.props.dispatch(showNewPerson());
  };

  render() {
    let persons = null;
    let admins = (
      <Admins
        persons={this.props.persons}
        delete={this.deletePersonHandler}
        nameHandler={this.nameHandler}
        ageHandler={this.ageHandler}
      />
    );

    if (this.props.filter.showPersons) {
      persons = (
        <Persons
          persons={this.props.persons}
          delete={this.deletePersonHandler}
          nameHandler={this.nameHandler}
          ageHandler={this.ageHandler}
        />
      );
    }

    return (
      <div className={Class.App}>
        <div className={Class.row}>
          <div className={Class.admins + " col-lg-3"}>
            <AdminsView />
            {admins}
          </div>
          <div className="col-lg-9">
            <Cockpit
              disabled={!this.props.filter.showPersons}
              button={this.btnClass}
              toggleNames={this.toggleNames}
              toggleNewPerson={this.toggleNewPerson}
              deleteLastPerson={this.deleteLastPerson}
            />
            {persons}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons,
    filter: state.filter
  };
};

export default connect(mapStateToProps)(App);
