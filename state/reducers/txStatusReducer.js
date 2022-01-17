import { actionTypes } from '../actions/actionTypes';

const txStatusReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.TX_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default txStatusReducer;
