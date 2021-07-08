import * as API from '../api';
import {CREATEBOOK, UPDATEBOOK, DELETEBOOK, GETBOOK} from '../constants/actionTypes';

export const createBook = (bookInformation) => async(dispatch) => {
    try{
        const {data} = await API.createBook(bookInformation);
        dispatch({type: CREATEBOOK, payload: data});
    } catch (error){
        console.log(error.message);
    }
}