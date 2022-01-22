import { IAction } from 'ts/types';
import actionTypes from '../actions/actionTypes';

const responseReducer = (state = '', action: IAction<string>) => {
  switch (action.type) {
    case actionTypes.RESPONSE_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default responseReducer;
