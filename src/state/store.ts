import { Action, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
