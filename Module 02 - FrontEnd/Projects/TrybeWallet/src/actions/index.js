import currencyAPI from '../api/currencyAPI';

export const LOGIN = 'USER_LOGIN';
export const REQUEST = 'REQUEST_API';
export const GET_DATA = 'GET_DATA';
export const GET_EXPENSES = 'GET_EXPENSES';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD_TOTAL = 'ADD_TOTAL';
export const ADD_RATE = 'ADD_RATE';
export const EXP_DEL = 'EXP_DEL';

export const newEmail = (payload) => ({
  type: LOGIN,
  payload,
});

export const expDel = (payload) => ({
  type: EXP_DEL,
  payload,
});

export const addTotal = (payload, id) => ({
  type: ADD_TOTAL,
  payload,
  id,
});

export const addRate = (payload) => ({
  type: ADD_RATE,
  payload,
});

export const requestAPI = () => ({ type: REQUEST });

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const getExpenses = (payload) => ({
  type: GET_EXPENSES,
  payload,
});

export const requestError = (payload) => ({
  type: REQUEST_ERROR,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  try {
    const data = await currencyAPI();
    return dispatch(getData(data));
  } catch (error) {
    return dispatch(requestError(error));
  }
};

export const fetchExpenses = (object) => async (dispatch) => {
  dispatch(requestAPI());
  try {
    const data = await currencyAPI();
    object.exchangeRates = data;
    return dispatch(getExpenses(object));
  } catch (error) {
    return dispatch(requestError(error));
  }
};
