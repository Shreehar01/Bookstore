import * as API from '../api';
import {CREATEBOOK, UPDATEBOOK, DELETEBOOK, GETBOOK, GETALLBOOK} from '../constants/actionTypes';

export const createBook = (bookInformation) => async(dispatch) => {
    try{
        const {data} = await API.createBook(bookInformation);
        dispatch({type: CREATEBOOK, payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const getBooks = () => async(dispatch) => {
    try{
        console.log("Get Book Reducer is being called")
        const {data} = await API.getBooks();
        console.log("Printing the data from mybooks in the getBooks action creator", data)
        dispatch({type: GETBOOK, payload: data.mybooks});
    } catch (error){
        console.log(error.message);
    }
}

export const getAllBooks = (search) => async(dispatch) => {
    try{
        console.log("Get All Book Action Creator is being called in the all book action.")
        const {data} = await API.getAllBooks(search);
        console.log("Printing the data from mybooks in the get all Books action creator", data)
        dispatch({type: GETALLBOOK, payload: data.mybooks});
    } catch (error){
        console.log(error.message);
    }
}

export const updateBook = (id, bookInfo) => async (dispatch) => {
    try{
        const {data} = await API.updateBook(id, bookInfo);
        console.log("From the updatebook action creator", data)
        dispatch({type: UPDATEBOOK, data});      
    } catch (error){
        console.log("Error from update book is being called")
        console.log(error.message);
    }
}


export const deleteBook = (id) => async(dispatch) => {
    try{
        const data = await API.deleteBook(id);
        console.log("Delete Book action creator called")
        dispatch({type: DELETEBOOK, id});
        console.log("Delete Book dispatch complete")
    } catch(error){
        console.log("Error from the deletebook called")
        console.log(error.message);
    }
}
