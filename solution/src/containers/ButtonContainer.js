/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { Buttons } from '../elm/Buttons.elm';
import { UPDATE_ITEM_COUNT } from "../constants/ActionTypes";

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const flags = { count: this.props.count };
    const app = Buttons.embed(this.nodeRef.current, flags);
    this.setupPorts(app.ports);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.count !== this.props.count) {
      this.state.updateCount(nextProps.count)
    }
    return false;
  };

  setupPorts(ports) {
    ports.updateCount.subscribe((updatedCount) => { this.props.updateCount(updatedCount, this.props.keyValue)});
    this.setState({
      updateCount : ports.countUpdated.send
    })
  };

  render() {
    return <div ref={this.nodeRef} className="buttons"/>;
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCount: (count, key) => {dispatch({ type : UPDATE_ITEM_COUNT, count: count, key: key })}
});

export default connect(null, mapDispatchToProps)(ButtonContainer);
