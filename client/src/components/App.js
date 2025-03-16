import React, { useState } from "react";
import { Routes, Route  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Missions from "./Missions"
import Create from "./Create";
import "../stylesheets/app.css"
import Astronauts from "./Astronauts";
import Programs from "./Programs";

function App() {

  const [ missions, setMissions ] = useState([])
  const [ astronauts, setAstronauts ] = useState([])
  const [ programs, setPrograms ] = useState([])  

  return (
    <div className="App">      
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/programs" element={ <Programs programs={programs} setPrograms={setPrograms}/>}/> 
        <Route path="/missions" element={ <Missions missions={missions} setMissions={setMissions}/>}/>        
        <Route path="/astronauts" element={ <Astronauts astronauts={astronauts} setAstronauts={setAstronauts}/>}/>
        <Route exact path="/missions/:id" element={ <Create />}/>
      </Routes>      
    </div>
  )
}

export default App;
