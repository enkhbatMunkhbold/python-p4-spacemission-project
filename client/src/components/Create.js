import React, { useState } from 'react'
import "../stylesheets/create.css"

const Create = ({ onAddMission }) => {
  const initialNewMission = { name: '', date: '', image: '', crew: [], space_shuttle: '', country: '', isFavorite: false}
  const [ newMission, setNewMission ]= useState(initialNewMission)
  
  const { name, date, image, crew, space_shuttle, country } = newMission

  function handleChange(e) {
    const { name, value } = e.target
    setNewMission({...newMission, [name]: value})
  }

  function handleCheck(e) {
    const { name, checked } = e.target
    setNewMission({...newMission, [name]: checked})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const missionData = {
      name: newMission.name,
      date: newMission.date,
      image: newMission.image,
      crew: newMission.crew,
      space_shuttle: newMission.space_shuttle,
      country: newMission.country,
      isFavorite: newMission.isFavorite
    }
    fetch('/missions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(missionData)
    })
     .then(res => res.json())
     .then(mission => {
        console.log(mission)
        onAddMission(mission)
      })
    setNewMission(initialNewMission)
  }

  return (
    <div className="create">
      <div className='new-mission-form'>
        <h1 className='title'>New Mission</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="missionName" className="form-label">Mission Name</label>
            <input type="text" className="form-control" 
              name="name" aria-describedby="nameHelp" 
              value={name} onChange={handleChange}
            />
            <div id="namelHelp" className="form-text">It could be your favorite mission...</div>
          </div>
          <div className="mb-3">
            <label htmlFor="missionDate" className="form-label">Mission Date</label>
            <input type="text" className="form-control" 
              name="date" value={date} onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="missionImage" className="form-label">Image Link</label>
            <input type="text" className="form-control" 
              name="image" value={image} onChange={handleChange}
            />
          </div>          
          <div className="mb-3">
            <label htmlFor="crew" className="form-label">Crew</label>
            <input type="text" className="form-control" 
              name="crew" value={crew} onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="space_shuttle" className="form-label">Space Shuttle</label>
            <input type="text" className="form-control" 
              name="space_shuttle" value={space_shuttle}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <input type="text" className="form-control" 
              name="country" value={country}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" 
              name="isFavorite" onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="isFavorite">Favorite</label>
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </div>      
    </div>
  )
}

export default Create