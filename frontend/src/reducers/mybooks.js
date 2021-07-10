import { CREATEBOOK, GETBOOK, GETALLBOOK, DELETEBOOK, UPDATEBOOK } from "../constants/actionTypes";
import { CREATEREQUEST, GETREQUEST, DELETEREQUEST, UPDATEREQUEST } from "../constants/actionTypes";


export default (mybooks = [], action) =>{
    switch (action.type){
        case GETBOOK:
            return action.payload;
        case GETALLBOOK:
            console.log("From the reducer section. Get all book reducer was called.")
            return action.payload;
        case CREATEBOOK:
            return [... mybooks, action.payload];  
        case UPDATEBOOK:
            console.log("Update Book Reducer is being called")
            console.log("Update book called")
            //console.log("Mybooks from updatebook reducer", mybooks)
            //console.log("Action payload from updatebook reducer", action.payload)
            const x = mybooks.map((updatedBook) => updatedBook._id === action.data._id ? action.data : updatedBook);
            console.log("Printing the intermediate vale of x", x); 
            return mybooks.map((updatedBook) => updatedBook._id === action.data._id ? action.data : updatedBook);
            // console.log("From the reducer update", mybooks);
            // mybooks.mybooks.map((updatedBook) => console.log("Book printed in map", updatedBook._id))
            // console.log("Printing action.payload in the updatebook reducer", action.data)
            // return mybooks;
        case DELETEBOOK:
            console.log("Delete Book reducer being called");
            const y = mybooks.filter((mybooks) => mybooks._id !== action.id);
            console.log("New state after deletebook is complete", y) 
            return mybooks.filter((mybooks) => mybooks._id !== action.id);
        case GETREQUEST:
            return action.payload;
        case CREATEREQUEST:
            return [... mybooks, action.payload];  
        case UPDATEREQUEST:
            console.log("Update Book Reducer is being called")
            console.log("Update book called")
            //console.log("Mybooks from updatebook reducer", mybooks)
            //console.log("Action payload from updatebook reducer", action.payload)
            // const x = mybooks.map((updatedBook) => updatedBook._id === action.data._id ? action.data : updatedBook);
            // console.log("Printing the intermediate vale of x", x); 
            return mybooks.map((updatedBook) => updatedBook._id === action.data._id ? action.data : updatedBook);
            // console.log("From the reducer update", mybooks);
            // mybooks.mybooks.map((updatedBook) => console.log("Book printed in map", updatedBook._id))
            // console.log("Printing action.payload in the updatebook reducer", action.data)
            // return mybooks;
        case DELETEREQUEST:
            console.log("Delete Book reducer being called");
            // const y = mybooks.filter((mybooks) => mybooks._id !== action.id);
            // console.log("New state after deletebook is complete", y) 
            return mybooks.filter((mybooks) => mybooks._id !== action.id);
        default:
            return mybooks;      
    }
}