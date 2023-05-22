import React,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import IndexPage from './Pages/IndexPage/IndexPage'
import LocationPage from './Pages/LocationPage/LocationPage'
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage />}></Route>
        <Route path='coimbatore' element={<LocationPage />}></Route>
      </Routes>
      </div>
  )
}

export default App
