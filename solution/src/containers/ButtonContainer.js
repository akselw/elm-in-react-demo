/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import Elm from 'react-elm-components';
import { Buttons } from '../elm/Buttons.elm';

class ButtonContainer extends React.Component {
  render() {
    return <Elm src={Buttons} />
  }
}

export default connect(null, null)(ButtonContainer);
