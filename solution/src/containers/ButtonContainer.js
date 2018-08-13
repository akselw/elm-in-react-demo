/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import Elm from 'react-elm-components';
import { Buttons } from '../elm/Buttons.elm';

class ButtonContainer extends React.Component {
  render() {
    const flags = { count: this.props.count };
    return <Elm src={Buttons} flags={flags}/>
  }
}

export default connect(null, null)(ButtonContainer);
