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
  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    fetch('/cuisines')
    .then(cus => cus.json())
    .then(setCuisines)
  }, []);

  return (
    <div className="App">      
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/cuisine" element={ <Cuisine cuisines={cuisines}/>}/>        
        <Route path="/restaurants" element={ <Restaurants restaurants={restaurants} setRestaurants={setRestaurants}/>}/>
        <Route exact path="/cuisine/:id" element={ <Create />}/>
      </Routes>      
    </div>
  )
}

export default App;
