import React, { useState } from 'react'
import '../stylesheets/home.css'
import Search from './Search'
import Mission from './Mission'

const Home = ({ missions, onUpdateList }) => {

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

  const filteredMissions = missions.filter(mission => mission.name.toLowerCase().includes(search.toLowerCase()))

  const displayMissions = filteredMissions.map(mission => {
    return (
      <Mission key={mission.id} 
        mission={mission} 
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
          {search.length === 0 ? <Mission mission={initialData}/> : displayMissions}        
        </ul> 
      </div>
    </div>    
  )
}

export default Home