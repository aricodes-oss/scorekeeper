import { createSlice } from '@reduxjs/toolkit';
import { createDispatchHook } from 'react-redux';

const initialState = {
  events: [],
  history: [],
  score: 0,
  up: 0,
  down: 0,
};

const getCounts = state =>
  state.events.reduce(
    (acc, val) => {
      acc.score += val;
      acc[val > 0 ? 'up' : 'down'] += 1;

      return acc;
    },
    { score: 0, up: 0, down: 0 },
  );

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.events = [...state.events, 1];
    },
    decrement: state => {
      state.events = [...state.events, -1];
    },
    undo: state => {
      state.events = state.events.slice(0, -1);
    },
    reset: state => {
      Object.assign(state, initialState);
    },
    setData: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const analyzerMiddleware =
  ({ getState, dispatch }) =>
  next =>
  action => {
    if (!action.type.startsWith('counter/')) {
      return next(action);
    }

    const prevState = getState();
    const ret = next(action);
    const newState = getState();

    if (newState.counter.events.length !== prevState.counter.events.length) {
      dispatch(counterSlice.actions.setData(getCounts(newState.counter)));
    }

    return ret;
  };

export const { increment, decrement, undo, reset } = counterSlice.actions;

export default counterSlice.reducer;
