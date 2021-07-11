import {SENDMAIL} from '../constants/actionTypes';

export default (mailsent = [], action) =>{
    switch (action.type){
        case SENDMAIL:
            return [... mailsent, action.payload];  
        default:
            return mailsent;      
    }
}