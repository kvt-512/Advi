import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 13.095470, lng: 77.635963 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 13.095470, lng: 77.635963 }} />
      )}
    </GoogleMap>
  ))
);

const Contacts = () => {
  return (
    <div id="contacts" className="container my-5 py-5 d-flex">
      <div className="row">
        <h1 className="col-12 col-md-12">Contact Us</h1>
        <div className="col-12 col-md-12">
          <h3>Call Us</h3>
          <h5>123456789</h5>
        </div>
        <div className="col-12 col-md-12">
          <h3>Email</h3>
          <h5>maspv22@gmail.com</h5>
        </div>
        <div className="col-12 col-md-12">
          <a href="https://www.google.com/maps/place/REVA+University/@13.1163393,77.633104,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae19721a651fd3:0xdee225fe28f600f6!8m2!3d13.1163393!4d77.6352927">
            Open in Google Maps
          </a>
        </div>
      </div>
      <div style={{ width: "50vw", height: "50vh" }}>
        <Map
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBSw0DCgNquLt-jmOguJIUNZ2KBjv6fO-E&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Contacts;
