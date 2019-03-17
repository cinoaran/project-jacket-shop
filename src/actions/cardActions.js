import { ADD_TO_CART,ADD_TO_LIKES,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_CUSTOMER} from './action-types/card-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}

//add cart action
export const addToLikes= (id)=>{
    return{
        type: ADD_TO_LIKES,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
//add customer action
export const addCustomer=(payment)=>{
    return{
        type: ADD_CUSTOMER,
        payment
    }
}
