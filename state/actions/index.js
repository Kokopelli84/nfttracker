import getNFTs from '../../helpers/apiClient';
import { actionTypes } from './actionTypes';

export const fetchNFTs = (address) => {
  return async (dispatch, getState) => {
    const response = await getNFTs(address);

    dispatch({
      type: actionTypes.FETCH,
      payload: response.assets,
    });
  };
};

export const changeModalContent = (content) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CHANGE_CONTENT, payload: content });
  };
};

export const changeCurrentNFT = (current) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.CURRENT_UPDATE, payload: current });
  };
};

export const changeTxStatus = (status) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.TX_UPDATE, payload: status });
  };
};

export const changeResponse = (res) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESPONSE_UPDATE, payload: res });
  };
};
