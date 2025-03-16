import React, { useEffect } from 'react'
import '../stylesheets/app.css'

const Astronauts = ({ astronauts, setAstronauts }) => {

  useEffect(() => {
      fetch('/astronauts')
      .then(data => data.json())
      .then(setAstronauts)
    }, []);
  

  function renderAstronautsList(list) {
    return list.map(element => {
      return <li key={element.id}>{element.name}</li>
    })
  }

  return (
    <div className="component">
      <div class="container text-center">
        <h1>Astronauts</h1>
        <hr className='border-line'/>
        <div class='row justify-content-center'>
          <div class='col-4 list'>
            <ol>{renderAstronautsList(astronauts)}</ol>
          </div>
        </div>   
      </div>
    </div>   
  )
}

export default Astronauts