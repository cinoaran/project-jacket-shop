import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, addToLikes } from '../actions/cardActions';
import Carousel from './carousel/Carousel';
import ContentSlider from './content-slider/ContentSlider';
import '../App.css';



class Home extends React.Component {  
    
    handleClick = (id)=>{

        this.props.addToCart(id); 
    }

    handleLikesClick = (id)=>{

        this.props.addToLikes(id); 
    }    
    
    render(){
        const { getUrl } = this.props.nextCollection;
        const { getText } = this.props.nextCollection;

        const {products} = this.props.card;    
        const ProductList = products.map((product) => {           
            
         return(
            <div className="card col-md-4" key={product.id}>
                {(product.quantity > 0)? <p className="showBasket">
                    <Link to="/card">
                        <i className="fas fa-cart-plus checked-icons"></i>
                        <img src={product.img} className="card-img-top" alt="jacket img"/>
                        </Link></p> : <img src={product.img} className="card-img-top" alt="jacket img"/>}
                
                <hr/>
                <h5 className="card-title">
                    <Link to={`/product/${product.id}`} style={{ color: "black" }}>
                        {product.title}
                    </Link>                   
                </h5>   
                <p className="card-text">
                    {product.desc}                
                </p>
                <div className="row">
                    <button className="btn btn-dark pull-left" onClick={()=>{this.handleLikesClick(product.id)}}><i className="fas fa-heart"></i> <span className="badge badge-dark"> {product.likes}</span></button>
                    <p className="btn btn-default ml-auto mt-2">EUR {product.price} ,-</p>
                    {
                        (product.maxQuantity - product.quantity > 0)
                        ?                        
                        (   
                            <button className="btn btn-dark pull-right ml-auto" onClick={()=>{this.handleClick(product.id)}}>
                                <i className="fas fa-cart-arrow-down"></i>  
                                <span className="badge badge-dark"> {product.quantity} / {product.maxQuantity - product.quantity}</span>
                            </button>)
                        : 
                        (<button className="btn btn-danger pull-right ml-auto">Sold out</button>)}
                    
                
                </div>
            </div>
         ) 

    })
    
    return (
            <div className="container">
                <h3 className="text-center mt-5">COMING UP NEXT</h3>
                    <div id="top-carousel">                    
                        <Carousel getText={getText} getUrl={getUrl}/>                  
                    </div>
                        <h3 className="text-center mt-5">WINTER COLLECTION 2019</h3>
                    <div className="row">       
                        { ProductList }            
                    </div>
                    <div>
                    <ContentSlider />
                    </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state)=>{
    return {     
      card: state.card, 
      nextCollection: state.nextCollection,         
    }
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        addToLikes: (id)=>{dispatch(addToLikes(id))}
    }
}  


export default connect(mapStateToProps, mapDispatchToProps)(Home)
