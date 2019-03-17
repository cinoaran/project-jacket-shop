import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { connect } from "react-redux";
import logoImage from '../owner-logo/logo.png';

class Location extends Component {
  render() {
    const { owner } = this.props;
    const position = [owner[0].lat, owner[0].lng];
    //console.log(owner[0].lat, owner[0].lng, owner[0].zoom);
    const myIcon = L.icon({
      iconUrl: logoImage,
      iconSize: [25, 31],
      iconAnchor: [0, 0],
      popupAnchor: [12, 10]
    });
    
    return (
      <Map className="map" center={position} zoom={owner[0].zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
            <div className="map-popup">
              <h6>{owner[0].company} est. {owner[0].est}</h6>
              <p><img width="200px" src={owner[0].storeimage} alt="Company logo"/></p>
              <p>{owner[0].name}</p>
              <p>{owner[0].address}</p>
              <p>Phone: {owner[0].phone}</p>
            </div>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

const mapStateToProps = state => ({
  owner: state.owner
});

export default connect(mapStateToProps)(Location);
