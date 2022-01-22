import actionTypes from '../actions/actionTypes';

const currentReducer = (action, state = {}) => {
  switch (action.type) {
    case actionTypes.CURRENT_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default currentReducer;
