import React, { useState } from 'react'
import "../stylesheets/create.css"

const Create = ({ onAddAstronaut }) => {
  const initialNewAstronaut = { name: '', image: '', nationality: '', isInService: true, missions: [] }
  const [ newAstronaut, setNewAstronaut ]= useState(initialNewAstronaut)
  
  const { name, image, nationality, missions } = newAstronaut

  function handleChange(e) {
    const { name, value } = e.target
    setNewAstronaut({...newAstronaut, [name]: value})
  }

  function handleCheck(e) {
    const { name, checked } = e.target
    setNewAstronaut({...newAstronaut, [name]: checked})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const astronautData = {
      name: newAstronaut.name,
      image: newAstronaut.image,
      nationality: newAstronaut.nationality,
      isInService: newAstronaut.isInService,
      missions: newAstronaut.missions
    }
    fetch('/astronauts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(astronautData)
    })
     .then(res => res.json())
     .then(astronaut => {
        console.log(astronaut)
        onAddAstronaut(astronaut)
      })
    setNewAstronaut(initialNewAstronaut)
  }

  return (
    <div className="create">
      <div className='new-astronaut-form'>
        <h1 className='title'>New Astronaut</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="astronautName" className="form-label">Astronaut Name</label>
            <input type="text" className="form-control" 
              name="name" aria-describedby="nameHelp" 
              value={name} onChange={handleChange}
            />
            <div id="namelHelp" className="form-text">It could be your favorite astronaut...</div>
          </div>
          <div className="mb-3">
            <label htmlFor="astronautImage" className="form-label">Image Link</label>
            <input type="text" className="form-control" 
              name="image" value={image} onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input type="text" className="form-control" 
              name="nationality" value={nationality}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="missions" className="form-label">Missions</label>
            <input type="text" className="form-control" 
              name="missions" value={missions} onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" 
              name="isInService" onChange={handleCheck}
            />
            <label className="form-check-label" htmlFor="isInService">In Service</label>
          </div>
          <button type="submit" className="btn btn-light">Submit</button>
        </form>
      </div>      
    </div>
  )
}

export default Create