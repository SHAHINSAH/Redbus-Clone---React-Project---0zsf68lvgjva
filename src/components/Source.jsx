import React, { useState } from "react";
import "../styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Source(props) {
  const handleChange = (e) => {
    props.setMessage(e.target.value);
  };
  return (
    <div id="from">
      <label id="from-lebel" htmlFor="from">From</label>
      <br />
      <input
        type="text"
        id="source"
        onChange={handleChange}
        value={props.message}
        placeholder="Enter Source"
      
      />
      
    </div>
  );
}