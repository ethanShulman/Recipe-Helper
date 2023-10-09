import './App.css'
import RecipeApi from './RecipeApi'
import Home from './Home'
import NavBar from './NavBar'
import Donations from './Donations'
import { Route, Routes } from 'react-router-dom'


function App() {

  

  return (
    <>
      <NavBar />
      {/* <Bootstrap /> */}
        <Routes>
          <Route path="/recipes" element={<RecipeApi />} />
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donations" element={<Donations />} />
        </Routes>
    
    </>
  );
}

export default App
