import React, { useState } from 'react'
import '../stylesheets/home.css'
import Search from './Search'

const Home = () => {

  const [ search, setSearch ] = useState('')
  
  function handleSearch(input) {
    setSearch(input)
  }

  return (
    <div className='home'>
      <div class="container text-center">
        <h1>Finding Favorite Local Dishes</h1>   
        <hr className='border-line'/>   
        <Search onSearch={handleSearch}/><br/><br/>
      </div>
    </div>    
  )
}

export default Home