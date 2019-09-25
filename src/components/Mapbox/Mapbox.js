import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import config from "../../config";

import "./Mabpox.scss";
import BEM from "../../helper/BEM";
const b = BEM("Mapbox");

const styles = {
  position: "relative",
  width: "inherit",
  height: "inherit"
};

const Mapbox = centerCoords => {
  return (
    <div className={b()}>
      <Map
        google={window.google}
        zoom={8}
        style={styles}
        initialCenter={{ lat: 48, lng: 31 }}
      />
      <div className={b("navigation")}>
        <span />
      </div>
    </div>
  );
};

export default GoogleApiWrapper(props => ({
  apiKey: config.apiKey
}))(Mapbox);
