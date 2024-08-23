import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface HistoryState {
  history: number[];
}

export const initialHistoryState: HistoryState = {
  history: [],
};

export const historyReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    ...state,
    history: [...state.history, state.history[state.history.length - 1] + 1],
  })),
  on(decrement, (state) => ({
    ...state,
    history: [
      ...state.history,
      Math.max(state.history[state.history.length - 1] - 1, 0),
    ],
  })),
  on(reset, (state) => ({
    ...state,
    history: [...state.history, 0],
  }))
);
