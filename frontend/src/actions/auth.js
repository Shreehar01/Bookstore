import * as api from '../api';
import {AUTH} from '../constants/actionTypes';

// Action creator for signing in.
export const signin = (formData, history) => async (dispatch) => {
    try{
        const {data} = await api.signIn(formData);
        dispatch({type: AUTH, data});
        history.push('/homepage');
    } catch (error) {
        console.log(error);
    }
};

// Action creator for signing up.
export const signup = (formData, history) => async (dispatch) => {
    try{
        const {data} = await api.signUp(formData);
        dispatch({type: AUTH, data});
        history.push('/homepage');
    } catch (error) {
        console.log(error);
    }
};

export const updateInformation = (personalInformation) => async (dispatch) =>{
    try{
        const data = await api.updateInformation(personalInformation);
        console.log("From the updateInformation from the action creator", data);
    } catch (error){
        console.log(error);
    }
}