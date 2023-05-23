import React from 'react'
import './ProfileWidget.css'

function ProfileWidget() {
  return (
    <div>
        <h4 className='left-menu-heading'>ZOMATO PROFILE WIDGET</h4>
        <p className='widget-subtitle'>Showcase your Zomato profile on your blog.</p>
        <img className='widget-image' src="https://res.cloudinary.com/dhtamjbrq/image/upload/v1684848729/Zomato/download_hknuww.png" alt="" />
        <div className='get-widget'>
            <div className='text-widget'>Get this widget</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 gvsUip"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>

        </div>
    </div>
  )
}

export default ProfileWidget