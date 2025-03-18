import React, { useState } from 'react'
import '../stylesheets/home.css'
import Search from './Search'
import Astronaut from './Astronaut'

const Home = ({ astronauts, onUpdateList }) => {

  const [ search, setSearch ] = useState('')

  const initialData = {
    name: '',
    image: '../images/default-image.png',
    location: '',
    isFavorite: false,
    phoneNumber: '',
    rating: 0
  }
  
  function handleSearch(input) {
    setSearch(input)
  }

  const filteredAstronauts = astronauts.filter(ast => ast.name.toLowerCase().includes(search.toLowerCase()))

  const displayAstronauts = filteredAstronauts.map(ast => {
    return (
      <Astronaut key={ast.id} 
        astronaut={ast} 
        onUpdateList={onUpdateList}
      />
    )
  }) 

  return (
    <div className='home'>
      <div class="container text-center">
        <h1>Space Missions</h1>   
        <hr className='border-line'/>   
        <Search onSearch={handleSearch}/><br/><br/>
        <ul className='cards'>
          {search.length === 0 ? <Astronaut astronaut={initialData}/> : displayAstronauts}        
        </ul> 
      </div>
    </div>    
  )
}

export default Home