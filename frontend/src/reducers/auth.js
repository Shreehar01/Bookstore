import {AUTH, AUTHUPDATE, LOGOUT} from '../constants/actionTypes';

const authReducer = (state = {authData: null}, action) =>{
    console.log("Reducer was called")
    switch(action.type){
        case AUTH:
            console.log("Reducer was called Auth")
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {...state, authData: action?.data};
        case LOGOUT:
            console.log("Reducer was called logout")
            localStorage.clear();
            return {...state, authData: null};
        case AUTHUPDATE:
            console.log("Reducer was called authupdate")
            localStorage.clear();
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
        default: 
            console.log("Reducer was called default")
            return state;
    }   
};


export default authReducer;