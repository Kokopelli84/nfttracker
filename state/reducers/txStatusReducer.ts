import actionTypes from '../actions/actionTypes';

const txStatusReducer = (action, state = '') => {
  switch (action.type) {
    case actionTypes.TX_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default txStatusReducer;
