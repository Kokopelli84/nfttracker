import { IAction } from '@/ts/types';
import actionTypes from '../actions/actionTypes';

type AsyncStateType = {
  loading: boolean;
  error: null | string;
};

const initState = {
  loading: false,
  error: null,
};

export const asyncReducer = (state: AsyncStateType = initState, action: IAction<any>) => {
  switch (action.type) {
    case actionTypes.ASYNC_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.ASYNC_DONE:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.ASYNC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
