import { actionTypes } from '../actions/actionTypes';

const modalReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CONTENT:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
