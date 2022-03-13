import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 12.97375, lng: 77.73439 }}
    >
      <Marker position={{lat: 12.892420, lng: 77.681460}}/>
    </GoogleMap>
  );
};

const Contacts = () => {
  const WrapperMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3>Call Us</h3>
          <h5>+91 9900597959</h5>
        </div>
        <div className="col-12 col-md-6">
          <h3>Email</h3>
          <h5>hradvigroups@gmail.com</h5>
          <h5>vihaansolutions@gmail.com</h5>
        </div>
        <div
          className="col-12 col-md-12"
          style={{ width: "100vw", height: "50vh" }}
        >
          <WrapperMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBSw0DCgNquLt-jmOguJIUNZ2KBjv6fO-E&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
