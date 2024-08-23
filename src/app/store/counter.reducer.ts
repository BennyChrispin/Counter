import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  undo,
  incrementBy,
  setCount,
} from './counter.actions';

export interface CounterState {
  count: number;
  history: number[];
}

export const initialState: CounterState = {
  count: 0,
  history: [],
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    count: state.count + 1,
    history: [...state.history, state.count + 1],
  })),
  on(decrement, (state) => ({
    ...state,
    count: state.count > 0 ? state.count - 1 : 0,
    history: [...state.history, state.count > 0 ? state.count - 1 : 0],
  })),
  on(reset, (state) => ({
    ...state,
    count: 0,
    history: [...state.history, 0],
  })),
  on(incrementBy, (state, { value }) => ({
    ...state,
    count: state.count + value,
    history: [...state.history, state.count + value],
  })),
  on(setCount, (state, { value }) => ({
    ...state,
    count: value,
    history: [...state.history, value],
  })),
  on(undo, (state) => {
    const previousCount = state.history[state.history.length - 2] || 0;
    return {
      ...state,
      count: previousCount,
      history: state.history.slice(0, -1),
    };
  })
);
