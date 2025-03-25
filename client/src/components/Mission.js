import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../stylesheets/mission.css"

const Mission = ({ mission, onUpdateList }) => {

  const navigate = useNavigate()
  const { id, date, image, space_shuttle, country, isInService } = mission  
  
  function handleFavoriteClick() {    
    fetch(`/missions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify({isInService: !isInService})
    }).then(res => res.json())
    .then(data => {
      onUpdateList(data)
    })
  }

  function handleButtonClick() {
    navigate(`/missions/${id}`)
  }

  return (
    <div className='card position-relative'>
      <img src={image} alt={space_shuttle} />
      <div className="container">
        <h5>{space_shuttle}</h5>
        <p>Country: {country}</p> 
        <p>Date: {date}</p>
        <div className="btn-toolbar justify-content-between" role="toolbar">
          <div className="btn-group" role="group" aria-label="button">
            <button className='btn btn-light' onClick={handleButtonClick}>More info...</button>
          </div>
          <div className="favorite-group">
            <div className="favorite-group-icon">
              {isInService? 
                ( <i className="bi bi-heart-fill" onClick={handleFavoriteClick}></i>) : 
                ( <i className="bi bi-heart" onClick={handleFavoriteClick}></i>)
              }
            </div>               
          </div>
        </div>           
      </div>
    </div>
  )
}

export default Mission