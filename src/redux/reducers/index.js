import { combineReducers } from 'redux';
import auth from './auth';
import home from './home';
import createTask from './createTask';

export default combineReducers({
  auth,
  home,
  createTask 
});
