import React, { useState } from 'react'
import "../stylesheets/create.css"

const Create = ({ onAddAstronaut }) => {
  const initialNewAstronaut = { name: '', image: '', location: '', isFavorite: false, phoneNumber: '', rating: 0 }
  const [ newAstronaut, setNewAstronaut ]= useState(initialNewAstronaut)
  
  const { name, image, location, phoneNumber, rating } = newAstronaut

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
      location: newAstronaut.location,
      isFavorite: newAstronaut.isFavorite,
      phoneNumber: newAstronaut.phoneNumber,
      rating: newAstronaut.rating
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
        <h1>New Astronaut</h1>
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
            <label htmlFor="restaurantImage" className="form-label">Image Link</label>
            <input type="text" className="form-control" 
              name="image" value={image} onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location</label>
            <input type="text" className="form-control" 
              name="location" value={location}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" 
              name="phoneNumber" value={phoneNumber} onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input step="0.1" type="number" className="form-control" 
              name="rating" value={rating}
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