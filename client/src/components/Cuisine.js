import React from 'react'
import '../stylesheets/cuisine.css'

const Cuisine = ({cuisines}) => {

  function renderCuisinesList(list) {
    return list.map(element => {
      return <li key={element.id}>{element.name}</li>
    })
  }

  return (
    <div class="container text-center">
      <h1 className='title'>Cuisines</h1>
      <div class='row justify-content-center'>
        <div class='col-4 cuisines-list'>
          <ol>{renderCuisinesList(cuisines)}</ol>
        </div>
      </div>   
    </div>
  )
}

export default Cuisine