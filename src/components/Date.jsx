import React from "react";
import "../styles/App.css";

export const Date = (props) => {
  const handleSelect = (e) => {
    props.setSelect(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div id="traveling-date">
      <label id="date-lebel" htmlFor="date"></label>
      <br />
      <input
        type="date"
        id="date"
        
        // onSelect={handleSelect}
        onClick={handleSelect}
        // value={props.select}
      />
    </div>
  );
};