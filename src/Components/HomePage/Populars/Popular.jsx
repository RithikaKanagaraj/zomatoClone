import {useState} from 'react'
import './Popular.css'

function Popular({popular}) {
    const [visibleCards, setVisibleCards] = useState(8); // Initial number of visible cards

  const handleSeeMore = () => {
    setVisibleCards(visibleCards + (popular.length -8)); // Increase the number of visible cards by 4
  };
  return (
    <div className='Populars'>
        <h3 className='populat-title'>Popular localities in and around <span className='city-name'>Coimbatore</span></h3>
    <div className="grid-box">
        {popular.slice(0, visibleCards).map((item, index) => (
            <div className="cards-grid" key={index}>
            <div className="card-content">
                <div className="flex-content-column">
                <h5 className="place-name">{item.name}</h5>
                <p className="total-place">{item.total}</p>
                </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#1C1C1C"
                width="15"
                height="15"
                viewBox="0 0 20 20"
                aria-labelledby="icon-svg-title- icon-svg-desc-"
                role="img"
                className="sc-rbbb40-0 jKmKoK"
                >
                <title>chevron-right</title>
                <path d="M6.98 15.94c-0.3-0.28-0.3-0.76 0-1.060l4.46-4.46-4.46-4.48c-0.3-0.28-0.3-0.76 0-1.060s0.76-0.28 1.060 0l5 5c0.28 0.3 0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0z"></path>
                </svg>
            </div>
            </div>
        ))}
        {visibleCards < popular.length && (
            <div className='see-more-btn'>
                <p className="button" onClick={handleSeeMore}>see more</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="20" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>chevron-down</title><path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
            </div>
        )}
        </div>
        </div>
    )
}

export default Popular