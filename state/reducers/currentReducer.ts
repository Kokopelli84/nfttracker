import { IAction } from 'ts/types';
import { Nft } from 'ts/types/INFT';
import actionTypes from '../actions/actionTypes';

const currentReducer = (state = {}, action: IAction<Nft>) => {
  switch (action.type) {
    case actionTypes.CURRENT_UPDATE:
      return action.payload;
    default:
      return state;
  }
};

export default currentReducer;
