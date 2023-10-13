import './App.css'
import RecipeApi from './RecipeApi'
import Home from './Home'
import NavBar from './NavBar'
import Donations from './Donations'
import { Route, Routes } from 'react-router-dom'
import { createContext, useContext } from 'react'
import { useState } from 'react'

export const NameContext = createContext()

function App() {

  const [username, setUsername] = useState('');
 
  

  return (
    <>
      {/* <Bootstrap /> */}
      <NameContext.Provider value={{username, setUsername}}>
      <NavBar />
        <Routes>
          <Route path="/recipes" element={<RecipeApi />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="*" element={<Home />} />
        </Routes>
        </NameContext.Provider>
    </>
  );
}

export default App
