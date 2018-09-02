import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Dialog from '../Dialog/Dialog';

class Map extends Component {
  
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
    } else {
      console.log("Geo Location not supported by browser");
    }
  }

showPosition(position) {
    var coords = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    }
    this.setState({lat: coords.latitude, long: coords.longitude})
  }
  //request for location
  
  constructor (props) {
    super(props);
    this.state = {
      lat: 0,
      long: 0,
    }
  }

  componentDidMount() {
    this.getLocation();
}

   render() {
     const { lat, long } = this.state;
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: parseFloat(lat), lng:parseFloat(long)} }
        defaultZoom = { 20 }
        showsUserLocation = {true}
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        <Dialog />
      </div>
   );
   }
};
export default Map;