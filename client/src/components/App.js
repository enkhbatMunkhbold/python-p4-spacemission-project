import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Missions from "./Missions"
import Create from "./Create";
import "../stylesheets/app.css"
import Astronauts from "./Astronauts";
import MissionDetails from "./MissionDetails"

function App() {

  const [ missions, setMissions ] = useState([])
  const [ astronauts, setAstronauts ] = useState([])

  useEffect(() => {
    fetch('/missions')
    .then(res => res.json())
    .then(data => setMissions(data));
  }, []);

  function handleUpdateMissions(updatedMission) {
    const updatedList = missions.map(mission => mission.id === updatedMission.id ? updatedMission : mission)
    setMissions(updatedList)
  }

  function handleAddMission(data) {
    setMissions([...missions, data])
  } 

  function handleUpdateAstronauts(updatedAstronaut) {
    const updatedList = astronauts.map(astronaut => astronaut.id === updatedAstronaut.id ? updatedAstronaut : astronaut)
    setAstronauts(updatedList)
  }

  function handleAddAstronauts(data) {
    // const[first, ...rest] = data
    setAstronauts([...astronauts, data])
  } 

  function removeMission(deletedMission) {
    const updatedMissions = missions.filter(mission => mission.id !== deletedMission.id)
    setMissions(updatedMissions)
  }

  return (
    <div className="App"> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home missions={missions} onUpdateList={handleUpdateMissions}/>}/>
          <Route path="/missions" element={ 
            <Missions missions={missions} 
              onUpdateList={handleUpdateMissions}
              onRemoveMission={removeMission}
            />}/>        
          <Route path="/astronauts" element={ 
            <Astronauts astronauts={astronauts} 
              setAstronauts={setAstronauts} 
              onUpdateAstronauts={handleUpdateAstronauts}
            />}/>
          <Route path="/missions/new" element={
            <Create onAddMission={handleAddMission} 
              onAddAstronauts={handleAddAstronauts}
              astronauts={astronauts}
            />} />
          <Route path="/missions/:id" element={ <MissionDetails/>}/>
        </Routes>      
      </Router>       
    </div>
  )
}

export default App;
