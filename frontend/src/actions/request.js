import * as API from '../api';
import {CREATEREQUEST, UPDATEREQUEST, DELETEREQUEST, GETREQUEST} from '../constants/actionTypes';

export const createRequest = (requestInformation) => async(dispatch) => {
    try{
        const {data} = await API.createRequest(requestInformation);
        dispatch({type: CREATEREQUEST, payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const getRequests = () => async(dispatch) => {
    try{
        console.log("Get Request Reducer is being called")
        const {data} = await API.getRequests();
        console.log("Printing the data from myrequests in the getRequests action creator", data)
        dispatch({type: GETREQUEST, payload: data.myrequests});
    } catch (error){
        console.log(error.message);
    }
}


export const updateRequest = (id, requestInfo) => async (dispatch) => {
    try{
        const {data} = await API.updateRequest(id, requestInfo);
        console.log("From the updaterequest action creator", data)
        dispatch({type: UPDATEREQUEST, data});      
    } catch (error){
        console.log("Error from update request is being called")
        console.log(error.message);
    }
}


export const deleteRequest = (id) => async(dispatch) => {
    try{
        const data = await API.deleteRequest(id);
        console.log("Delete Request action creator called")
        dispatch({type: DELETEREQUEST, id});
        console.log("Delete Request dispatch complete")
    } catch(error){
        console.log("Error from the deleterequest called")
        console.log(error.message);
    }
}
