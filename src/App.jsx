import React,{ useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import IndexPage from './Pages/IndexPage/IndexPage'
import LocationPage from './Pages/LocationPage/LocationPage'
import {Routes,Route} from "react-router-dom"
import Review from './Components/AfterLogin/UserReview/Review'
import Notification from './Components/AfterLogin/Notification/Notification'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<IndexPage />}></Route>
        <Route path='coimbatore' element={<LocationPage />}></Route>
        <Route path='reviews' element={<Review />}></Route>
        <Route path='notification' element={<Notification/>}></Route>
      </Routes>
      {/* <LoginProfile /> */}
      </div>
  )
}

export default App
