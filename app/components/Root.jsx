import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Audio from './Audio';


export default class Root extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <div>
        <Audio />
      </div>
    );
  }
}
