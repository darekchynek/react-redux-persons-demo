import React, { Component } from 'react';
import Class from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    //console.log("[Person.js] Inside ComponentWillMount");
  }

  componentDidMount() {
    //console.log("[Person.js] Inside ComponentDidMount");
  }

  componentWillReceiveProps() {
    //console.log("[UPDATE Person.js] Inside componentWillReceiveProps");
  }

  render() {
    const inputStyle = {
        textAlign: 'center',
        padding: '4px',
        margin: '10px'
    };

    return <div className={Class.Person}>
        <h4 onClick={this.props.click}>{" "} I'm a {this.props.name} and I'm {this.props.age} old</h4>
        <input style={inputStyle} onChange={this.props.changed} value={this.props.name} type="text" />
        <input style={inputStyle} onChange={this.props.changedAge} value={this.props.age} type="number" />
      </div>;
  }
}

export default Person;
