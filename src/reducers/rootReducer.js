import cardReducer from './cardReducer';
import ownerReducer from './ownerReducer';
import customerReducer from './customerReducer';
import nextCollectionReducer from './nextCollectionReducer';
import sponsorsReducer from './sponsorsReducer';
import { combineReducers } from 'redux';



const rootReducer = combineReducers({  
    
    card: cardReducer,
    owner: ownerReducer,
    customer: customerReducer,
    nextCollection: nextCollectionReducer,
    sponsors: sponsorsReducer
   
})

export default rootReducer;