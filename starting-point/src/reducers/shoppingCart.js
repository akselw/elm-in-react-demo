import { ADD_ITEM, REMOVE_ITEM } from 'constants/ActionTypes'

const initialState = {
  items: [{
      name: "Genser",
      key: "abx030",
      count: 1
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { name: action.item, key: action.item, count: 1 }]
      };
    case REMOVE_ITEM:
      return state
    default:
      return state
  }
};

export default reducer;
