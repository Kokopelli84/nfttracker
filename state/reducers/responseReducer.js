import { actionTypes } from '../actions/actionTypes';

const responseReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.RESPONSE_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default responseReducer;
