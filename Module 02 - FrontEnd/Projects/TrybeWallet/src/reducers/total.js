import { ADD_RATE, ADD_TOTAL } from '../actions';

const INITIAL_STATE = {
  total: [],
  rate: [],
};

export default function totalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_TOTAL:
    return {
      ...state,
      total: [...state.total, action.payload],
    };
  case ADD_RATE:
    return {
      ...state,
      rate: [...state.rate, action.payload],
    };
  default:
    return state;
  }
}
