import React,{ useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import{Routes,Route} from "react-router-dom"
import Home  from './components/home'
import EditPage from './pages/edit'


function App() {
 
  return (
  
    <div className='App'>

      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<EditPage/>}/>
      </Routes>

    </div>
  )
}

export default App
