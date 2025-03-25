import React, { useEffect } from 'react'
import '../stylesheets/app.css'

const Astronauts = ({ astronauts, setAstronauts }) => {

  useEffect(() => {
      fetch('/astronauts')
      .then(data => data.json())
      .then(setAstronauts)
    }, [setAstronauts]);
  

  function renderAstronautsList(list) {
    return list.map(element => {
      return <li key={element.id}>{element.name}</li>
    })
  }

  return (
    <div className="component">
      <div className="container text-center">
        <h1>Astronauts</h1>
        <hr className='border-line'/>
        <div className='row justify-content-center'>
          <div className='col-4 list'>
            <ol>{renderAstronautsList(astronauts)}</ol>
          </div>
        </div>   
      </div>
    </div>   
  )
}

export default Astronauts