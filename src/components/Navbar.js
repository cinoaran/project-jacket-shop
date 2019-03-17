import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import logoImage from '../owner-logo/logo.png';

const Navbar = (props) => {
    const { company } = props.owner[0];
    
    return(
       
        <nav className="navbar navbar-dark  shadow-sm">
            <div className="navbar d-flex justify-content-between">
                <Link to="/" className="navbar-brand d-flex align-items-center"><img src={logoImage} width='100' alt="Store Logo"/> <span className='owner-text'>{company}</span></Link>
                <ul className="nav justify-content nav-wrapper">
                    <li className="nav-item"><NavLink className="navbar-brand d-flex align-items-center" to="/home"><i className="fas fa-home nav-icons"></i></NavLink></li>
                    <li className="nav-item"><NavLink className="navbar-brand d-flex align-items-center" to="/about"><i className="fas fa-info-circle nav-icons"></i></NavLink></li>
                    <li className="nav-item"><NavLink className="navbar-brand d-flex align-items-center" to="/contact"><i className="fas fa-envelope nav-icons"></i></NavLink></li>

                </ul>
            </div>
        </nav>
   
    )
}

const mapStateToProps = (state)=>{
    return {
      owner: state.owner
                
    }
  }


export default withRouter(connect(mapStateToProps)(Navbar))