import React,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import IndexPage from './Pages/IndexPage/IndexPage'
import LocationPage from './Pages/LocationPage/LocationPage'
import {Routes,Route} from "react-router-dom"
import Dropdown from './Components/LogIn/LoginProfile/ProfileDropdown/Dropdown'
import LoginProfile from './Components/LogIn/LoginProfile/Profiles/LoginProfile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage />}></Route>
        <Route path='coimbatore' element={<LocationPage />}></Route>
      </Routes>
      <LoginProfile />
      </div>
  )
}

export default App
