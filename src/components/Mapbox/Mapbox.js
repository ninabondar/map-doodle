import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import config from "../../config";

import "./Mabpox.scss";
import BEM from "../../helper/BEM";
const b = BEM("Mapbox");

const styles = {
  position: "relative",
  width: "inherit",
  height: "inherit"
};

const Mapbox = ({ centerCoords }) => {
  return (
    <div className={b()}>
      <Map
        google={window.google}
        zoom={6}
        style={styles}
        initialCenter={centerCoords}
      >
        <Marker position={centerCoords} />
      </Map>
      <div className={b("navigation")}>
        <span />
      </div>
    </div>
  );
};

Mapbox.defaultProps = {
  centerCoords: { lat: 48, lng: 31 }
};

export default GoogleApiWrapper(props => ({
  apiKey: config.apiKey
}))(Mapbox);
