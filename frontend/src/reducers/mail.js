import {SENDMAIL, SENDMULTIPLEMAILS} from '../constants/actionTypes';

export default (mailsent = [], action) =>{
    console.log("Reducer was called for mails")
    switch (action.type){
        case SENDMAIL:
            return [... mailsent, action.payload];      
        case SENDMULTIPLEMAILS:
            return mailsent.push(...action.payload)
        default:
            return mailsent;      
    }
}