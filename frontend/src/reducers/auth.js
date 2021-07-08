import {AUTH, AUTHUPDATE, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) =>{
    console.log("Reducer was called")
    switch(action.type){
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, authData: action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        case AUTHUPDATE:
            localStorage.clear();
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        default: 
            return state;
    }   
};


export default authReducer;