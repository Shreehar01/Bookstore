import {SENDMAIL, SENDMULTIPLEMAILS} from '../constants/actionTypes';
import * as API from '../api';

export const sendMail = (mailInformation) => async(dispatch) => {
    try{
        const {data} = await API.sendMail(mailInformation);
        dispatch({type: SENDMAIL, payload: data});
    } catch (error){
        console.log(error.message);
    }
}
export const sendMultipleMails = (selectedBook) => async(dispatch) => {
    try{
        console.log("Sending multiple emails action creator called")
        const {data} = await API.sendMultipleMails(selectedBook);
        console.log("Printing the return data from the multiple emails action creator", data)
        dispatch({type: SENDMAIL, payload: data});
    } catch (error){
        console.log("Erro is being called from sendMultiple Mails")
        console.log(error.message);
    }
}