import { products, card } from "../api/shop.json";
//import {  } from "../api/shop.json";

import { ADD_TO_CART,ADD_TO_LIKES,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_CUSTOMER} from '../actions/action-types/card-actions'

    const initState = {          
        card,
        products
    }
    
    const cardReducer= (state = initState,action)=>{
        //INSIDE HOME COMPONENT
        if(action.type === ADD_TO_CART){
            
                // GET the addedItem with the given id by action.id
                let addedItem = state.products.find(item=> item.id === action.id)
                //check if the action id exists in the addedItems
                let existed_item= state.card.addedItems.find(item=> action.id === item.id)
 

               if(existed_item)
                    {
                        addedItem.quantity += 1 
                    return{
                        ...state,  
                        products: state.products,                   
                        card: {
                            addedItems: [...state.card.addedItems],
                            total : state.card.total + addedItem.price 

                        } 
                       
                    }
                }
                else{
                    addedItem.quantity = 1;
                 //calculating the total
                 
                  let newTotal = state.card.total + addedItem.price 
            
                    return{
                        ...state,
                        products: state.products,                        
                        card: {
                            addedItems: [...state.card.addedItems, addedItem],
                            total : newTotal  

                        }                        
                                    
                    }
            
                }   
    
            }

            if(action.type === ADD_TO_LIKES){

                // GET the productItem with the given id by action.id
                const productItem = state.products.find(item=> item.id === action.id)
                const addLike = productItem.likes += 1;
                
                return{
                    ...state,                    
                    addLike
                                 
                }

            }

            if(action.type=== ADD_QUANTITY){
                
                let addedItem = state.products.find(item=> item.id === action.id)
                  addedItem.quantity += 1 
                  let newTotal = state.card.total + addedItem.price
                  return{
                      ...state, 
                                           
                      card: {  
                        addedItems: state.card.addedItems,                      
                        total : newTotal  

                    }  
                  }
            }

            if(action.type=== SUB_QUANTITY){  
                
                let addedItem = state.products.find(item=> item.id === action.id)
                               
                
                    addedItem.quantity -= 1
                    let newTotal = state.card.total - addedItem.price
                    return{
                        ...state,                        
                        card: {  
                            addedItems: state.card.addedItems,                     
                            total : newTotal  
    
                        }                       
                        
                       
                    } 
                               
                
            }

            if(action.type === REMOVE_ITEM){
                let itemToRemove= state.products.find(item=> action.id === item.id)
                let new_items = state.card.addedItems.filter(item=> action.id !== item.id)
                //itemToRemove.quantity = 0
                //calculating the total
                let newTotal = state.card.total - (itemToRemove.price * itemToRemove.quantity )
                itemToRemove.quantity = 0               
                
                return{
                    ...state,
                    products,
                    card:{
                        addedItems:new_items,
                        total: newTotal
                    }
                    
                }
            }

            if(action.type === ADD_CUSTOMER){            
            
                return{
                    ...state,
                    products:state.products.map(
                        (product) => product.maxQuantity > product.maxQuantity-product.quantity
                        ? 
                        {...product, maxQuantity: product.maxQuantity-product.quantity, quantity:0}
                                                
                        : product
                    ),                                    
                    card: {
                        addedItems: [],
                        total : 0 
    
                    }
    
                   
                }
            }
            
    
        return state
    }
    
    export default cardReducer