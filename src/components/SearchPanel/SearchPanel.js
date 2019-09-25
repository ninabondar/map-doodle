import React from "react";
import "./SearchPanel.scss";
import BEM from "../../helper/BEM";
const b = BEM("SearchPanel");

const SearchPanel = () => {
  return (
    <form className={b()}>
      <div className={b("search-container")}>
        <input
          type="text"
          className={b("search-field")}
          placeholder={"Address, city or country"}
        />
      </div>
      <button className={b("search-btn")} value={"Find"}>
        Find
      </button>
    </form>
  );
};

export default SearchPanel;
