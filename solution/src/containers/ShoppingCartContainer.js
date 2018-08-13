import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { connect } from 'react-redux'

import Buttons from './ButtonContainer'
import { ADD_ITEM } from "../constants/ActionTypes";

const ShoppingCart = ({ shoppingCart, addItem}) => (
  <div>
    <h2>Handleliste</h2>
    <Items items={ shoppingCart.items } />
    <CartInput addItem={addItem}/>
  </div>
);

const Items = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.key}>{item.name}<Buttons count={item.count} keyValue={item.key}/></li>
    ))
    }
  </ul>
);

class CartInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  };

  addInputToCart = () => {
    this.props.addItem(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  };

  render() {
    return (
      <div>
        <input placeholder="Varenavn" type="text" value={this.state.inputValue} onChange={this.updateInputValue}/>
        <button onClick={this.addInputToCart}>Legg i handlekurven</button>
      </div>
    );
  }
}

const ItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}));

ShoppingCart.propTypes = {
  shoppingCart: PropTypes.shape({
    items: ItemsPropType
  }).isRequired,
  addItem: PropTypes.func.isRequired
};

Items.propTypes = {
  items: ItemsPropType.isRequired
};

CartInput.propTypes = {
  addItem: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  counter: createSelector(
    (state) => state.counter,
    (counterState) => counterState
  ),
  shoppingCart: createSelector(
    (state) => state.shoppingCart,
    (cartState) => cartState
  ),
})

const mapDispatchToProps = (dispatch) => ({
  addItem: itemName => {dispatch({type: ADD_ITEM, item: itemName})}
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
