import React from 'react';
import { connect } from 'react-redux';
import Cards from './Cards';

import '../../App.css';

class ContentSlider extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        sponsors: this.props.sponsors,
        sponsor: this.props.sponsors[0]
      }
    }

    nextSponsor = () => {
      const newIndex = this.state.sponsor.index+1;
      this.setState({
        sponsor: this.props.sponsors[newIndex]
      })
    }

    prevSponsor = () => {
      const newIndex = this.state.sponsor.index-1;
      this.setState({
        sponsor: this.props.sponsors[newIndex]
      })
    }

    render() {

      const {sponsors, sponsor} = this.state;

      console.log(sponsor)

      return(
        <div className="content-slider">
        <h3 className="text-center mt-1">OUR SPONSORS</h3>
                
          <button className="btn btn-dark slider-btn btn-l" onClick={() => this.prevSponsor()} disabled={sponsor.index === 0}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i></button>
          <button className="btn btn-dark slider-btn btn-r" onClick={() => this.nextSponsor()} disabled={sponsor.index === this.props.sponsors.length-1}><i className="fa fa-chevron-circle-right" aria-hidden="true"></i></button>
  
            <div className="content-col">
              <div className={`cards-slider active-slide-${sponsor.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${sponsor.index*(100/sponsors.length)}%)`
                }}>
                  {
                    sponsors.map(sponsor => <Cards key={sponsor.id} sponsor={sponsor} />)
                  }
                </div>
             
            </div>
          </div>
        </div>
      )

    }
  }

  const mapStateToProps = (state)=>{
    return {     
      sponsors: state.sponsors
              
    }
  }

  export default connect(mapStateToProps, null)(ContentSlider);
  