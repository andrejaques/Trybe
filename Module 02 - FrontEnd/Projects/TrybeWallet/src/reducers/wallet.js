import { REQUEST, GET_DATA, GET_EXPENSES, REQUEST_ERROR, EXP_DEL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  error: '',
  isLoading: false,
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST:
    return {
      ...state,
      isLoading: true,
    };
  case GET_DATA:
    return {
      ...state,
      isLoading: false,
      currencies: action.payload,
    };
  case GET_EXPENSES:
    return {
      ...state,
      isLoading: false,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  case EXP_DEL:
    return { ...state,
      expenses: [...state.expenses.filter((expense) => expense.id !== action.payload)] };
  default:
    return state;
  }
}
