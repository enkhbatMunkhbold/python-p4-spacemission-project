import React from "react";
// import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cuisine from "./Cuisine"

function App() {
  return (
    <div>
      <Navbar/> 
      <main>
        <Cuisine/>
      </main>   
    </div>
  )
}

export default App;
