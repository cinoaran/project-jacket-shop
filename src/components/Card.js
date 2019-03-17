import React from 'react'
import { connect } from 'react-redux';
import { addQuantity,subQuantity,removeItem } from '../actions/cardActions';
import Summary from './Summary'
import '../App.css';

class Card extends React.Component {


  handleAddQuantity = (id)=>{
    this.props.addQuantity(id); 
  } 


  handleSubQuantity = (id)=>{
    this.props.subQuantity(id); 
  } 


  handleRemoveItem = (id)=>{
    this.props.removeItem(id); 
  } 



  render() {

    const {addedItems} = this.props.card.card;
   
    const itemsInCard = addedItems.map((item) => {
      
      return(
       
        <div key={item.id} className="jumbotron">
          <h2 className="product-title">{item.title}
            <p className="btn btn-dark pull-right ml-4"><i className="fas fa-heart"></i> <span className="badge badge-dark"> {item.likes}</span></p>
          </h2>        
          <hr/>
          <div className="row">
            
            <div className="col col-md-6">
            <h3 className="product-title">Image & Likes</h3>   
            <hr/>
            <p className="text-center">
              <img src={item.img} className="img-thumbnail" alt="jacket img"/>
            </p>
            </div> 
            <div className="col col-md-6"> 
             <h3 className="display-6">Description</h3>
             <hr/>
             <p>{item.desc}</p>
              <div className="col col-md-auto">
                <p className="text-dark"><b><u>Price: {item.price * item.quantity} EUR</u></b></p>             
              </div>
            </div>
            </div>
            <hr/>
            <div className="row"> 
            <div className="col col-md-6">
             
              <p className="text-dark">
                {
                (item.quantity <= 1)
                ?(
                  <button className="btn btn-dark pull-left ml-0"><i className="far fa-times-circle"></i></button> 
                )
                :
                (
                  <button className="btn btn-dark pull-right mr-auto" onClick={()=>{this.handleSubQuantity(item.id)}}><i className="fas fa-caret-down"></i></button> 
                )
                }
                  <span className="item-counter">{item.quantity}</span>
                {
                (item.maxQuantity - item.quantity === 0)
                ?(
                  <button className="btn btn-dark pull-right mr-0"><i className="far fa-times-circle"></i></button>
                )
                :(
                  <button className="btn btn-dark pull-right ml-auto" onClick={()=>{this.handleAddQuantity(item.id)}}><i className="fas fa-caret-up"></i></button>
                )
                }
              </p>
             
             </div>
             <div className="col col-md-6">
             <p className="text-dark">
              <button className="btn btn-dark pull-right ml-auto" onClick={()=>{this.handleRemoveItem(item.id)}}><i className="far fa-trash-alt"></i></button>
             </p>
             </div>            
            
            </div>           
        </div>
      )    
    });


  // console.log(payment)
    return (
      <div className="container">
        { 
            (itemsInCard.length >0) 
            ?
            (
              <React.Fragment>{itemsInCard} <Summary /></React.Fragment>
            ):(
                  <div className="jumbotron mb-5 mt-5">
                    <h3 className="display-6">Sorry no products in basket !!</h3>
                    <p>Please pick up your products to see them here on your shopping card!!</p>
                  </div>  
                )
            
        }
            
    </div>
      
    )
  }
}

const mapStateToProps = (state)=>{
  return {
       card: state.card,
       customer: state.customer         
  }
}

const mapDispatchToProps= (dispatch)=>{
    
  return{
      addQuantity:  (id)=>{dispatch(addQuantity(id))},
      subQuantity:  (id)=>{dispatch(subQuantity(id))},
      removeItem:   (id)=>{dispatch(removeItem(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

