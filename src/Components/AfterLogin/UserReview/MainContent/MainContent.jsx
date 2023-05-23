import React from 'react'
import LeftMenu from './LeftContent/LeftMenu'
import RightContent from './RightContent/RightContent'
import './MainContent.css'
import LeftMockData from './LeftContent/LeftContent'
import LeftContent from './LeftContent/LeftContent'

function MainContent() {
  return (
    <div className='review-mainContent-wrapper'>
       <LeftContent />
        <RightContent />
    </div>
  )
}

export default MainContent