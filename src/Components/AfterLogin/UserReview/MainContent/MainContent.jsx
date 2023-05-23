import React from 'react'
import LeftMenu from './LeftContent/LeftMenu'
import RightContent from './RightContent/RightContent'
import './MainContent.css'
import LeftMockData from './LeftContent/LeftContent'
import LeftContent from './LeftContent/LeftContent'
import Suggested from './LeftContent/Suggested/Suggested'

function MainContent() {
  return (
    <div >
    <div className='review-mainContent-wrapper'>
       <LeftContent />
        <RightContent />
    </div>
    </div>
  )
}

export default MainContent