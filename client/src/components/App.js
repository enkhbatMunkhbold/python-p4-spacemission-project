import React, { useState } from "react";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Missions from "./Missions"
import Create from "./Create";
import "../stylesheets/app.css"
import Astronauts from "./Astronauts";

function App() {

  const [ missions, setMissions ] = useState([])
  const [ astronauts, setAstronauts ] = useState([])

  return (
    <div className="App">      
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home astronauts={astronauts}/>}/>
        <Route path="/missions" element={ <Missions missions={missions} setMissions={setMissions}/>}/>        
        <Route path="/astronauts" element={ <Astronauts astronauts={astronauts} setAstronauts={setAstronauts}/>}/>
        <Route exact path="/missions/:id" element={ <Create />}/>
      </Routes>      
    </div>
  )
}

export default App;
