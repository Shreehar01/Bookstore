import {SENDMAIL} from '../constants/actionTypes';
import * as API from '../api';

export const sendMail = (mailInformation) => async(dispatch) => {
    try{
        const {data} = await API.sendMail(mailInformation);
        dispatch({type: SENDMAIL, payload: data});
    } catch (error){
        console.log(error.message);
    }
}