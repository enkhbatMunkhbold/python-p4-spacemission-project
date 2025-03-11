import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Cuisine from "./Cuisine"
import Create from "./Create";
import "../stylesheets/app.css"

function App() {

  const [ cuisines, setCuisines ] = useState([])

  useEffect(() => {
    fetch('/cuisines')
    .then(cus => cus.json())
    .then(data => setCuisines(data))
  }, []);

  return (
    <div className="App">      
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home cuisines={cuisines}/>}/>
        <Route path="/cuisine" element={ <Cuisine />}/>
        <Route path="/cuisine/:id" element={ <Create />}/>
      </Routes>      
    </div>
  )
}

export default App;
