import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setKey } from '../reducer';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Component
class Instrument extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick (note) {
    let audioSrc = document.getElementById(note);
    audioSrc.currentTime = 0;
    audioSrc.play();
  }

  changeKey (key) {
    this.props.dispatchSetKey(key);
  }

  render () {
    const notes = this.props.notes;
    const keys = this.props.keys;
    console.log('current key', this.props.currentKey)
    return (
      <div id="instrument">
        <div>
          <form>
            <label>Choose Key</label>
            <select
            onChange ={(e) => this.changeKey(e.target.value)}>
              {
                keys.map((key, index) => {
                  return <option key={index} value={key}>{key} </option>;
                })
              }
            </select>
          </form>
        </div>
          {
            notes.map((note, index) => {
              return (
                <div
                onMouseOver={() => this.handleClick(note)}
                key={index}
                id={note}
                className="string"></div>
              );
            })
          }
      </div>
    );
  }
}

//Container
const mapState = (state) => ({
  currentKey: state.currentKey,
  notes: state[state.currentKey],
  keys: Object.keys(state).slice(1),
});

const mapDispatch = (dispatch) => {
  return {
    dispatchSetKey: (key) => {
      dispatch(setKey(key));
    }
  };
};

export default connect(mapState, mapDispatch)(Instrument);
