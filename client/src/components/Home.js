import React from 'react'
import '../stylesheets/home.css'

const Home = ({cuisines}) => {

  function renderCuisinesList(list) {
    return list.map(element => {
      return <li key={element.id}>element.name</li>
    })
  }

  return (
    <div>
      <h1 className='title'>Finding Favorite Local Dishes</h1>
      <div className='cuisines-list'>
        <ol>{renderCuisinesList(cuisines)}</ol>
      </div>
      
    </div>
  )
}

export default Home