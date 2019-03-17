import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

    const Product = props => {
    const { products } = props.products;
    const getId = props.match.params.id;
    const ProductDetail = products.map((product, index) => {
    
    if (+getId === +index + 1) {
      return (
        <div key={product.id} className="jumbotron m-4">
          <h5 className="display-3">{product.title}</h5>
          <hr />
          <div className="row">
            <div className="col col-md-6">
              <h5>Image & Likes</h5>
              <hr />
              <img
                src={product.img}
                className="card-img-top"
                alt="jacket img"
              />
            </div>
            <div className="col col-md-6">
              <h5>Description</h5>
              <hr />
              <p>{product.desc}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col col-md-6">
            <Link className="text-dark text-justify" to="/home"><i className="fas fa-home nav-icons"></i> Back to products list</Link>
            </div>
            <div className="col col-md-6">  
              <p className="text-dark">
                <b>
                  <u>Price: {product.price} EUR</u>
                </b>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return true
  });
  return <div>{ProductDetail}</div>;
};

const mapStateToProps = state => {
  return { products: state.card };
};
export default connect(mapStateToProps)(Product);