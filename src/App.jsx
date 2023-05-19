import React,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import IndexPage from './Pages/IndexPage/IndexPage'
import LocationPage from './Pages/LocationPage/LocationPage'

function App() {
  return (
    <div className="App">

      <LocationPage />
      <IndexPage />
      </div>
  )
}

export default App
