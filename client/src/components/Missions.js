import React from 'react'
import '../stylesheets/missions.css'

const Missions = ({missions}) => {

  function renderMissionsList(list) {
    return list.map(element => {
      return <li key={element.id}>{element.name}</li>
    })
  }

  return (
    <div className="component">
      <div class="container text-center">
        <h1>Missions</h1>
        <hr className='border-line'/>
        <div class='row justify-content-center'>
          <div class='col-4 cuisines-list'>
            <ol>{renderMissionsList(missions)}</ol>
          </div>
        </div>   
      </div>
    </div>   
  )
}

export default Missions