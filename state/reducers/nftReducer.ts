import { IAction } from 'ts/types';
import { Nft } from 'ts/types/INFT';
import actionTypes from '../actions/actionTypes';

const initState: Nft[] = [];

const nftReducer = (state = initState, action: IAction<Nft[]>) => {
  switch (action.type) {
    case actionTypes.FETCH:
      return action.payload;
    default:
      return state;
  }
};

export default nftReducer;
