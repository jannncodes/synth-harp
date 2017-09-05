import React, { Component } from 'react';
import Instrument from './Instrument';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Component
class Audio extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    const notes = this.props.notes;
    console.log('notes', notes)
    return (
      <div>
        {
          notes.map((note, index) => {
            return (
              <audio key={index} id={note}>
                <source src={`/media/${note}.mp3`} type="audio/mpeg" />
                <source src={`/media/${note}_.ogg`} type="audio/ogg" />
                <source src={`/media/${note}_.wav`} type="audio/wav" />
              </audio>
            );
          })
        }
        <Instrument />
      </div>
    );
  }
}

//Container
const mapState = (state) => ({
  currentKey: state.currentKey,
  notes: state[state.currentKey],
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Audio);
