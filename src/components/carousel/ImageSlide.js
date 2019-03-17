import React from 'react';

const ImageSlide = ({ url, text }) => {
    const styles = {
      position:'relative',
      backgroundImage: `url(${url})`,      
      backgroundSize: 'cover',
      backgroundPosition: 'center',      
      width: '340px',
      height: '340px',
      borderTopLeftRadius: '80px',
      borderBottomRightRadius: '80px'      
      
    };
  
    return (
      <div className="image-slide" style={styles}><h3 className="slider-text">{text}</h3></div>
    );
  }

  export default ImageSlide;
  