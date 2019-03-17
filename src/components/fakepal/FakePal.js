import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addCustomer} from '../../actions/cardActions';

class FakePal extends Component {

    constructor(props){
        super(props)
        const uuid = require('uuid');
        const id = uuid();
        this.payment ={
            
            
                id,
                recipient_name:"Cino Cüneyt Aran",
                line1: "Espachstr. 1",
                city: "Freiburg",
                state: "DE",
                postal_code: "79111",
                email: "cino2304@gmail.com"
            

        }
        this.addedItems = this.props.addedItems;
        this.payment = [this.addedItems, this.payment];
    }

    handleCustomerAdd(payment){
        //console.log(payment)
        this.props.addCustomer(payment); 
        this.props.history.push('/customer/'+this.payment[1].id)       
    }

  
  render() { 
    
    return (
      <div>
        <button className="btn btn-dark btn-block" onClick={() => {this.handleCustomerAdd(this.payment)}}>FakePal Checkout</button> 
      </div>
    )
  }
}

const mapDispatchToProps= (dispatch)=>{
   
    return{

        addCustomer: (payment)=>{dispatch(addCustomer(payment))}
        
    }
}  

export default withRouter(connect(null,mapDispatchToProps)(FakePal))

