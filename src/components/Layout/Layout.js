import React from "react";

import "./Layout.scss";
import BEM from "../../helper/BEM";

const b = BEM("Layout");

const Layout = () => <div className={b()}>Layout for my map app</div>;

export default Layout;
