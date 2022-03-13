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
      defaultCenter={{ lat: 12.89242, lng: 77.73439 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 12.89242, lng: 77.68146 }} />
      )}
    </GoogleMap>
  ))
);

const Contacts = () => {
  return (
    <div id="contacts" className="container my-5 d-flex">
      <div className="row">
        <h1 className="col-12 col-md-12">Contact Us</h1>
        <div className="col-12 col-md-12">
          <h3>Call Us</h3>
          <h5>+91 9900597959</h5>
        </div>
        <div className="col-12 col-md-12">
          <h3>Email</h3>
          <h5>hradvigroups@gmail.com</h5>
          <h5>vihaansolutions@gmail.com</h5>
        </div>
        <div className="col-12 col-md-12">
          <a href="https://www.google.com/maps/place/Advi/@12.8827779,77.678353,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae13a0f8a10c27:0xd7c8fff5249bc277!8m2!3d12.8827867!4d77.6805435">
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
