import { Dispatch } from 'redux';
import { AppThunk } from '@/state/store';
import { IAction } from 'src/ts/types';
import { Nft } from '@/ts/interfaces/INFT';
import actionTypes from './actionTypes';
import getNFTs from '@/services/apiClient';

export const fetchNFTs = (address: string) => async (dispatch: Dispatch<IAction<Nft[]>>) => {
  const response = await getNFTs(address);

  dispatch({
    type: actionTypes.FETCH,
    payload: response.assets,
  });
};

export const changeModalContent = (content: string) => (dispatch: Dispatch<IAction<string>>) => {
  dispatch({ type: actionTypes.CHANGE_CONTENT, payload: content });
};

export const changeCurrentNFT =
  (current: Nft): AppThunk =>
  dispatch => {
    dispatch({ type: actionTypes.CURRENT_UPDATE, payload: current });
  };

export const changeTxStatus = (status: string) => (dispatch: Dispatch<IAction<string>>) => {
  dispatch({ type: actionTypes.TX_UPDATE, payload: status });
};

export const changeResponse = (res: string) => (dispatch: Dispatch<IAction<string>>) => {
  dispatch({ type: actionTypes.RESPONSE_UPDATE, payload: res });
};
