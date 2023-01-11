import React, { useState } from "react";
import leftArrow from "../assets/VectorLeft.svg";
import rightArrow from "../assets/VectorRight.svg";

const Carousel = (data) => {
  // Setting initial state of Carousel index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setting previous picture change
  const previousPicture = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Setting next picture change
  const nextPicture = () => {
    const isLastSlide = currentIndex === data.data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel_container">
      {/* If data length > 1, display the arrows */}
      {data.data.length > 1 && (
        <>
          <img
            src={leftArrow}
            alt=""
            className="carousel_container_arrow leftArrow"
            onClick={previousPicture}
          />
          <img
            src={rightArrow}
            alt=""
            className="carousel_container_arrow rightArrow"
            onClick={nextPicture}
          />
        </>
      )}
      {/* Display the index of the picture in slideshow */}
      <div className="carousel_container_pictures">
        <img src={data.data[currentIndex]} alt="" />
      </div>
      <div className="carousel_container_numbers">
        <p>{currentIndex + 1 + "/" + data.data.length}</p>
      </div>
    </div>
  );
};

export default Carousel;
