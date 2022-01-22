import actionTypes from '../actions/actionTypes';

const responseReducer = (action, state = '') => {
  switch (action.type) {
    case actionTypes.RESPONSE_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default responseReducer;
