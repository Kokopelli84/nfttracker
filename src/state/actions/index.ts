import getNFTs from '@/services/apiClient';
import { AppThunk } from '@/state/store';
import { Nft } from '@/ts/interfaces/INFT';
import { Dispatch } from 'redux';
import { IAction } from 'src/ts/types';
import actionTypes from './actionTypes';

export const fetchNFTs =
  (address: string) =>
  async (dispatch: Dispatch<IAction<Nft[]> | { type: string; payload?: string }>) => {
    dispatch({ type: actionTypes.ASYNC_LOADING });

    try {
      const response = await getNFTs(address);

      dispatch({
        type: actionTypes.FETCH,
        payload: response.assets,
      });
      dispatch({
        type: actionTypes.ASYNC_DONE,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: actionTypes.ASYNC_DONE,
          payload: error.message,
        });
      }
    }
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
