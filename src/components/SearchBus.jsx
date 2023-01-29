import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBus({
  from,
  to,
  date,
  data,
  data2,
  filter,
  setData,
  setData2,
  setFilter,
}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    fetchDate(from, to);
    navigate("BusDetails");
  };
  const fetchDate = async (from, to) => {
    if(from == ""){
      alert("Please enter your Source");
    }
    if(to == ""){
      alert("Please enter your Destination");
    }
  
    const url1 = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`;
    const url2 =
      "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";

    await fetch(url1)
      .then((response) => response.json())
      .then((data) => setData(data));
      
    await fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
        let newData = [...data];
        filter = data.filter(
          (data) => data.source == from && data.destination == to
        
        );
        
        setFilter(filter);
          // ----------------------------------------------------------------
            
          // if(data.source != from && data.destination != to){
          //   alert("Bus is not Avalible");
          // }
          // ------------------------------------------------------------------------------
      });
  };
  return (
    <div className="search-bus">
      <button id="search-buses" onClick={handleClick}>
        Search Bus
      </button>
    </div>
  );
}