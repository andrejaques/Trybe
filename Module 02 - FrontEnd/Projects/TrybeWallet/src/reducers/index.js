import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import total from './total';

const rootReducer = combineReducers({
  user,
  wallet,
  total,
});

export default rootReducer;
