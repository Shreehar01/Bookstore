import {combineReducers} from 'redux';
import auth from './auth';
import mybooks from './mybooks';

export default combineReducers({auth, mybooks});    