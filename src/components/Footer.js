import React from 'react'
import { connect } from 'react-redux';
import logoImage from '../owner-logo/logo.png';


const Footer =(props) => {

const {company} = props.owner[0] 
const date = new Date();
const year = date.getFullYear(); 
  return (
    <footer className="navbar navbar-dark bg-default shadow-sm mt-5">
        <p className="text-center"><img src={logoImage} width='90px' alt="Footer Info" /> <span className='owner-text'>{company} </span> <i className="far fa-copyright"></i>{year}</p>
      
    </footer>
  )
}

const mapStateToProps = (state)=>{
  return {
    owner: state.owner
              
  }
}

export default connect(mapStateToProps)(Footer)
