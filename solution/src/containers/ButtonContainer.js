/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import Elm from 'react-elm-components';
import { Buttons } from '../elm/Buttons.elm';
import { UPDATE_ITEM_COUNT } from "../constants/ActionTypes";

class ButtonContainer extends React.Component {
  componentDidUpdate = (prevProps) => {
    if (prevProps.count !== this.props.count) {
      this.state.updateCount(this.props.count)
    }
  };

  setupPorts = (ports) => {
    ports.updateCount.subscribe((updatedCount) => { this.props.updateCount(updatedCount, this.props.keyValue)});
    this.setState({
        updateCount : ports.countUpdated.send
    })
  };

  render() {
    const flags = { count: this.props.count };
    return <Elm src={Buttons} flags={flags} ports={this.setupPorts}/>
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCount: (count, key) => {dispatch({ type : UPDATE_ITEM_COUNT, count: count, key: key })}
});

export default connect(null, mapDispatchToProps)(ButtonContainer);
