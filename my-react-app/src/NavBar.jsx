import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const NavBar = () => {
  return (
    <div>
      <div id='Nav-Id'>
      <button><Link to="/home">Home</Link></button>
      <button><Link to="/recipes">Recipes</Link></button>
      <button><Link to="/donations">Donations</Link></button>
    </div>
    </div>
  )
}

export default NavBar
