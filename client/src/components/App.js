import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Cuisine from "./Cuisine"
import Create from "./Create";
import "../stylesheets/app.css"
import Restaurants from "./Restaurants";

function App() {

  const [ cuisines, setCuisines ] = useState([])

  useEffect(() => {
    fetch('/cuisines')
    .then(cus => cus.json())
    .then(setCuisines)
  }, []);

  return (
    <div className="App">      
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home cuisines={cuisines}/>}/>
        <Route path="/cuisine" element={ <Cuisine />}/>
        <Route exact path="/cuisine/:id" element={ <Create />}/>
        <Route path="/restaurants" element={ <Restaurants />}/>
      </Routes>      
    </div>
  )
}

export default App;
