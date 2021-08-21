import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

/* How The Store Looks Like
{
  user: {
    email: action.payload,
  }
  wallet: {
    currencies: [],
    expenses: [],
    error: '',
    isLoading: false
  }
};
*/
