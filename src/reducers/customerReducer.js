import { customer } from "../api/shop.json";
import { ADD_CUSTOMER} from '../actions/action-types/card-actions'

    
    const customerReducer= (state = customer, action)=>{

        if(action.type === ADD_CUSTOMER){  
            const customerItems =  action.payment[0];
            const customerPaymentDetails =  action.payment[1];        
            
            return{
                ...state,
                
                    boughtItems: customerItems,
                    customerData: customerPaymentDetails
                
            }
        }
        
        return state
    
    }
    
    export default customerReducer