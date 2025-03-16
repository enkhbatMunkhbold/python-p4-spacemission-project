import React, { useEffect } from 'react'
import '../stylesheets/programs.css'

const Programs = ({ programs, setPrograms }) => {

  useEffect(() => {
      fetch('/programs')
      .then(data => data.json())
      .then(setPrograms)
    }, []);

  function renderProgramsList(list) {
    return list.map(element => {
      return <li key={element.id}>{element.name}</li>
    })
  }

  return (
    <div className="programs">
      <div class="container text-center">
        <h1>Programs</h1>
        <hr className='border-line'/>
        <div class='row justify-content-center'>
          <div class='col-4 list'>
            <ol>{renderProgramsList(programs)}</ol>
          </div>
        </div>   
      </div>
    </div>   
  )
}

export default Programs