import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counter, { analyzerMiddleware } from './counter';

const logger =
  ({ getState }) =>
  next =>
  action => {
    console.log('Will dispatch', action);

    const ret = next(action);

    return ret;
  };

export const store = configureStore({
  reducer: {
    counter,
  },
  middleware: [...getDefaultMiddleware(), analyzerMiddleware],
});
