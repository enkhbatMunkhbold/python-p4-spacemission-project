import React from 'react'
import '../stylesheets/missions.css'

const Astronauts = ({astronauts}) => {

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
          <div class='col-4 cuisines-list'>
            <ol>{renderAstronautsList(astronauts)}</ol>
          </div>
        </div>   
      </div>
    </div>   
  )
}

export default Astronauts