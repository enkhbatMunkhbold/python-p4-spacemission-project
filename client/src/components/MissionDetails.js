import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../stylesheets/details.css";

const MissionDetails = () => {

  const params = useParams();
  const missionId = params.id;
  const [mission, setMission] = useState({})
  const { name, image, date, crew, program, country, isFavorite } = mission 

  useEffect(() => {
    fetch(`/missions/${missionId}`)
    .then(res => res.json())
    .then(data => setMission(data))
  }, [missionId])

  const displeyCrew = (list) => {
    return list.map(astronaut => {
      return <p>{astronaut.name}</p>
    })
  }
  
  return (
    <div className='details container'>
      <h1>{name}</h1>
      <hr className='border-line'/>
      <div className='row'>
        <div className='col-sm-4 mx-auto'>
          <img src={image} alt={name}/>
          <div className='text'>
            <p><span>Country:</span> {country}</p>
            <p><span>Program:</span> {program}</p>
            <p><span>Date:</span> {date}</p> 
            {displeyCrew(crew)}
            <p><span>Favorite:</span>
              {isFavorite ? <i className="bi bi-hand-thumbs-up-fill"></i> : 
                <i className="bi bi-hand-thumbs-down"></i>}
            </p>             
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionDetails