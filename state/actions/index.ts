import getNFTs from '../../helpers/apiClient';
import actionTypes from './actionTypes';

export const fetchNFTs = (address: string) => async (dispatch, getState) => {
    const response = await getNFTs(address);

    dispatch({
      type: actionTypes.FETCH,
      payload: response.assets,
    });
  };

export const changeModalContent = (content) => (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_CONTENT, payload: content });
  };

export const changeCurrentNFT = (current) => (dispatch) => {
    dispatch({ type: actionTypes.CURRENT_UPDATE, payload: current });
  };

export const changeTxStatus = (status) => (dispatch) => {
    dispatch({ type: actionTypes.TX_UPDATE, payload: status });
  };

export const changeResponse = (res) => (dispatch) => {
    dispatch({ type: actionTypes.RESPONSE_UPDATE, payload: res });
  };
