import React, { useState } from "react";
import "../styles/App.css";
import Swap from "./Swap";
import Source from "./Source";
import Destination from "./Destination";
import { Date } from "./Date";
import SearchBus from "./SearchBus";
import Nav from "./Nav";
import { Image } from "./Image";
import { BusDetails } from "./BusDetails";
import { BusCard } from "./BusCard";
import  Booked  from "./Booked";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Sign from "./Sign";
import Contact from "./Contact";




const App = () => {
  const [message, setMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState({});

  return (
    <div id="main">
    {/* //   <div className="container mt-3">
    //   <Modell />
    // </div> */}
    {/* <Form /> */}
      <Nav />
      
      <div id="main-duplicate">
        <Source message={message} setMessage={setMessage} />
        <Swap
          source={message}
          destination={toMessage}
          setSource={setMessage}
          setToSource={setToMessage}
        />
        <Destination toMessage={toMessage} setToMessage={setToMessage} />
        <Date select={select} setSelect={setSelect} />
        <SearchBus
          from={message.toLowerCase()}
         
          to={toMessage.toLowerCase()}
          date={select}
          data={data}
          data2={data2}
          filter={filter}
          setData={setData}
          setData2={setData2}
          setFilter={setFilter}
        />
       
      </div>
      <Routes>
        <Route path="/" element={<Image />} />
        <Route
          path="BusDetails"
          element={
            <BusDetails
              filter={filter}
              setShow={setShow}
              data={data}
              data2={data2}
            />
          }
        />
        <Route path="BusDetails/BusCard" element={<BusCard show={show} />} />
        <Route path="BusDetails/BusCard/Booked" element={<Booked show={show} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signIn" element={<Sign/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
};

export default App;
