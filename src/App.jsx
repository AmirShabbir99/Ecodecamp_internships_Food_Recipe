import React from 'react' 
import './App.css'
import Popularslider  from './Popularslider.jsx'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Recipeid from './Recipeid.jsx'
import Category from './Category.jsx'
import SearchElement from './SearchElement.jsx'

const App = () => {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Popularslider></Popularslider>}></Route>
          <Route path='/:idMeal' element={<Recipeid/>}></Route>
          <Route path='/category/:name' element={<Category/>}></Route>
          <Route path='/search/:searchTerm' element={<SearchElement/>}></Route>
        </Routes>
      </Router>
    
    
    </div>
    </>
  )
}

export default App