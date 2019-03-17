import React from 'react';


import '../../App.css';

const Cards = ({sponsor}) =>{

  const{index,image} = sponsor;
  return (
    <div id={`card-${index}`} className="card">
            <img src={image} alt="sponsors" />
    </div>
  )


}


export default (Cards)