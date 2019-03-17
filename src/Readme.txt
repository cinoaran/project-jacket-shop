https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-1-3-fefde93e80c7


eslint --init

For npm take:
    npm install redux react-redux react-router-dom

--------------------------------------------------------------------------------------------------------------
For React Redux stuff ( for index.js):
    npm install redux
    npm install react-redux

    import { Provider } from 'react-redux';
    import { createStore } from 'redux';
    import rootReducer from './reducers/rootReducer';

    const store = createStore(
        rootReducer, 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
--------------------------------------------------------------------------------------------------------------
For combining reducers:
    import productsReducer from './reducers/productsReducer';
    import cardReducer from './reducers/cardReducer';
    import { combineReducers } from 'redux';

    const rootReducer = combineReducers({
        products: productsReducer,
        card: cardReducer,
    })

    export default rootReducer;
--------------------------------------------------------------------------------------------------------------
For Routing stuff (App.js):
    npm install react-router-dom
    import { BrowserRouter, Route, Switch } from 'react-router-dom'

    <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component = {Home} />
            <Route path="/cart" component={Cart}/>
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
            <Route path="/:product_id" component = {Products} />
          </Switch>
        </div>
    </BrowserRouter>
--------------------------------------------------------------------------------------------------------------
For Navbar Component in components:

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper red darken-6">
            <div className="container">
                <Link to="#" className="brand-logo">SPA Times</Link>
                <ul className="right">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/cart">My cart</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
--------------------------------------------------------------------------------------------------------------
For a Reducer example ( cardReducer )

    import Item1 from '../images/item1.png'
    import Item2 from '../images/item2.png'
    import Item3 from '../images/item3.png'
    import Item4 from '../images/item4.png'
    import Item5 from '../images/item5.png'
    import Item6 from '../images/item6.png'
    import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


    const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

    }

    const cartReducer= (state = initState,action)=>{

        return state

    })

--------------------------------------------------------------------------------------------------------------

For Actions

    Action script (actions/cartAction.js)
    import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

    //add cart action
    export const addToCart= (id)=>{
        return{
            type: ADD_TO_CART,
            id
        }   
    }        

    Action-types ( actions/action-types/cart-actions.js)
        //Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
        export const ADD_TO_CART = 'ADD_TO_CART';
        export const REMOVE_ITEM = 'REMOVE_ITEM';
        export const SUB_QUANTITY = 'SUB_QUANTITY';
        export const ADD_QUANTITY = 'ADD_QUANTITY';
        export const ADD_SHIPPING = 'ADD_SHIPPING';



        
