import React from 'react'
import './Collections.css';
import GridContainer from './GridContainer';

function Collections() {

  const collections=[{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684395045/Zomato/download_fc27t5.avif",
    name:"Veggie Friendly",
    place:"9 Places",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 gvsUip"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
  },
  {
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684395081/Zomato/download_jezstf.avif",
    name:"Sweet Tooth",
    place:"8 Places",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 gvsUip"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>

  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684395113/Zomato/download_xdem4r.avif",
    name:"Great Cafes",
    place:"5 Places",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 gvsUip"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>

  },{
    img:"https://res.cloudinary.com/dhtamjbrq/image/upload/v1684395135/Zomato/download_dsrc0k.avif",
    name:"Great Buffets",
    place:"9 Places",
    svg:<svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="10" height="10" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 gvsUip"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
  }]


  return (
    <div className='collection-section'>
        <h2 className='collection-head'>Collections</h2>
        <div className='collection-subtitle'>
            <h6 className='subtitle'>Explore curated lists of top restaurants, cafes, pubs, and bars in Coimbatore, based on trends</h6>
            <div className='subtile-left'>
            All collections in Coimbatore
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="12" height="14"  viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 ezrcri"><title>right-triangle</title><path d="M5 0.42l10 10-10 10v-20z"></path></svg>
            </div>
        </div>
        <GridContainer collections={collections}/>
    </div>
  )
}

export default Collections