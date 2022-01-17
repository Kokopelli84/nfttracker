import { actionTypes } from '../actions/actionTypes';

const currentReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default currentReducer;
