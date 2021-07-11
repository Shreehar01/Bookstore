import {combineReducers} from 'redux';
import auth from './auth';
import mybooks from './mybooks';
import mailsent from './mail';
export default combineReducers({auth, mybooks, mailsent});    