import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_COUNT } from '../constants/ActionTypes'

const initialState = {
  items: [{
      name: "Genser",
      key: "abx030",
      count: 2
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { name: action.item, key: action.item, count: 1 }]
      };
    case UPDATE_ITEM_COUNT:
      return {
        ...state,
        items: state.items.map((item) => item.key === action.key ? {...item, count: action.count} : item)
      };
    case REMOVE_ITEM:
      return state
    default:
      return state
  }
};

export default reducer;
