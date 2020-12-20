import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const MapStyle = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: -17.3946,
    lng: -66.2308,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC90VNB08owtoX_YE-W5o7KMQ1j5pgA3aM">
      <GoogleMap mapContainerStyle={MapStyle} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
