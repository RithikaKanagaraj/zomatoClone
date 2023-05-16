
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Order.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Order = ({ data,heading }) => {
  return (
    <div className="carousel-container">
      <h3 className="heading">
        {heading}
      </h3>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carouselItem" 
        
      >
        
        {data.map((item, index) => {
          
          return (
            
            <div className="foodCard" key={index}>
             
              <div  className="foodCard-section">
                <img className="foodImage" src={item.img} alt={item.item} />
              </div>
              <div className="foodCard-bottom">
               <p className="foodText hotelText">{item.item}</p>
              
              {item.time && <p className="time">{item.time}</p>}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Order;