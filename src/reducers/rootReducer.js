import {combineReducers} from 'redux';
import {authReducer} from './authReducers';

export const combinedReducers = combineReducers({
  authReducer: authReducer,
});
