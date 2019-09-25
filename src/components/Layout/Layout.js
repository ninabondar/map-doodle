import React from "react";
import SearchPanel from "../SearchPanel";
import Mapbox from "../Mapbox";

import "./Layout.scss";
import BEM from "../../helper/BEM";
const b = BEM("Layout");

const Layout = () => (
  <div className={b()}>
    <SearchPanel />
    <Mapbox />
  </div>
);

export default Layout;
