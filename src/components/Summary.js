import React, { Component } from 'react'
import { connect } from 'react-redux'
import PayPalButton from './paypal/PayPalButton'
import FakePal from './fakepal/FakePal'


class Recipe extends Component{
    
    render(){

    const { total } = this.props.card.card;
    const { addedItems } = this.props.card.card;    
       
    return(
            <div className="row">
            <div className="card col-md-6 text-center p-5">                
                <h5 className="card-title">Fake Payment</h5>   
                <hr/>  
                <p className="card-text">
                <b>Total: {total} EUR</b>
                </p>
                 <FakePal addedItems={addedItems} />               
            </div>
            <div className="card col-md-6 text-center p-5">                
                <h5 className="card-title">Papal Payment</h5> 
                <hr/>  
                <p className="card-text">
                <b>Total: {total} EUR</b>
                </p>
                
                <PayPalButton total={total} addedItems={addedItems}/>
                
            </div>
            
            </div>
           
        )
    }
}

const mapStateToProps = (state)=>{
    return{               
        card: state.card
    }
}



export default connect(mapStateToProps,null)(Recipe)