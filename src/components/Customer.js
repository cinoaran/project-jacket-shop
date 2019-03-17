import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Page404 from './Page404/Page404'



function Customer(props) {

    const customerId = props.match.params.id;

    const { boughtItems , customerData} = props.customer;

    console.log(customerId);
    
    const itemsToDeliver =  boughtItems.map((items) => {
        return (
            <div key={items.id} className="card col-md-4">
              <img className="card-img-top" src={items.img} alt="Product to deliver" />
              <div className="card-body">
                <h5 className="card-title">{items.title} x {items.quantity}<br/> EUR.: {items.price * items.quantity} ,-</h5>
                  <hr/>
                  <p className="card-text">{items.desc}</p>                  
              </div>           
            </div>
          
       
        )
    })

    return (
        <div>
            {
                (customerData.id)
                ?(
                  <div>
                  <div className="jumbotron mb-5 mt-5">
                    <h6 className="display-4">Dear {customerData.recipient_name}</h6>
                    <p>Your order is integrated to our system!!</p>
                    <p>We will deliver to your address</p>
                    <span>{customerData.line1} </span>
                    <span>{customerData.city} {customerData.postal_code} {customerData.country_code}</span>
                  <hr/>
                  <h6 className="display-4">Your articles</h6>
                    <div className="row">
                      {itemsToDeliver}
                    </div>
                  </div>
                  </div>
                )
                :
                (
                    <div><Page404 /></div>
                )

            }
        
        </div>
    )
}
const mapStateToProps = state => {
    return { 
        customer: state.customer 
    };
  };
  
  
  export default withRouter(connect(mapStateToProps)(Customer));