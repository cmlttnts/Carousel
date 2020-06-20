import './Carousel.scss';

import React /* , { useState, useEffect, useContext } */ from 'react';
// Define props type

export type CarouselType = 'linear' | 'circular';

type CarouselPropsType = {
  images: string[];
  type: CarouselType;
};


/**
 *
 * @param images array of source strings of images
 * @param type linear or circular carousel
 */
const Carousel = ({ images, type }: CarouselPropsType): JSX.Element => {

  const handleRight = (): void => {

  };

  const handleLeft = (): void => {

  };

  return (
    <div className="Carousel">
      <button className="SliderB LeftSliderB" type="button" onClick={handleLeft}>
        <i className="fas fa-chevron-left fa-3x "></i>
      </button>
      <button className="SliderB RightSliderB" type="button" onClick={handleRight}>
        <i className="fas fa-chevron-right fa-3x "></i>
      </button>
      {images.map(
        (imgSrc) => <img className="Carousel__image" src={imgSrc} alt={type} key={imgSrc} />,
      )}
    </div>
  );
};

export default Carousel;
