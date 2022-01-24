import { IAction } from 'ts/types';
import actionTypes from '../actions/actionTypes';

const modalReducer = (state = '', action: IAction<string>) => {
  switch (action.type) {
    case actionTypes.CHANGE_CONTENT:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
