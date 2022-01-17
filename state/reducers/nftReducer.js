import { actionTypes } from '../actions/actionTypes';
const initState = [];

const nftReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return action.payload;
    default:
      return state;
  }
};

export default nftReducer;
