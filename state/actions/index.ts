import { Dispatch } from 'redux';
import { Nft } from 'ts/types/INFT';
import getNFTs from '../../helpers/apiClient';
import actionTypes from './actionTypes';

export const fetchNFTs = (address: string) => async (dispatch: Dispatch) => {
    const response = await getNFTs(address);

    dispatch({
      type: actionTypes.FETCH,
      payload: response.assets,
    });
  };

export const changeModalContent = (content: string) => (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.CHANGE_CONTENT, payload: content });
  };

export const changeCurrentNFT = (current: Nft) => (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.CURRENT_UPDATE, payload: current });
  };

export const changeTxStatus = (status: string) => (dispatch: Dispatch<any>) => {
    dispatch({ type: actionTypes.TX_UPDATE, payload: status });
  };

export const changeResponse = (res: string) => (dispatch: Dispatch) => {
    dispatch({ type: actionTypes.RESPONSE_UPDATE, payload: res });
  };
