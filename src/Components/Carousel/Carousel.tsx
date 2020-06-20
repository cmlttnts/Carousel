import './Carousel.scss';

import React, { useState, useRef } /* , { useState, useEffect, useContext } */ from 'react';
// Define props type

export type CarouselType = 'linear' | 'circular';

type CarouselPropsType = {
  images: string[];
  type: CarouselType;
};

type LastButtonType = 'left' | 'right' | 'none';

/**
 * Decide which animation gets to activate by giving it correct class name
 * @param index image array index
 * @param activeIndex soon to be active image
 * @param lastActiveIndex soon to be disabled image
 * @param lastButton animation direction depends on which button
 */
function decideClassName(
  index: number, activeIndex: number,
  lastActiveIndex: number, lastButton: LastButtonType,
): string {

  switch (lastButton) {

    case 'left':
      if (index === activeIndex) return 'ActiveFromLeft';
      if (index === lastActiveIndex) return 'DisabledFromRight';
      return '';
    case 'right':
      if (index === activeIndex) return 'ActiveFromRight';
      if (index === lastActiveIndex) return 'DisabledFromLeft';
      return '';
    default:
      if (index === activeIndex) return 'ActiveAtStart';
      return '';
  }

}


/**
 *
 * @param images array of source strings of images
 * @param type linear or circular carousel
 */
const Carousel = ({ images, type }: CarouselPropsType): JSX.Element => {

  const [activeImg, setActiveImg] = useState<number>(0);
  const [lastButton, setLastButton] = useState<LastButtonType>('none');
  const lastActive = useRef(0);

  const handleRight = (): void => {

    if (type === 'linear' && activeImg < images.length - 1) {
      lastActive.current = activeImg;
      setActiveImg(activeImg + 1);
      setLastButton('right');
    } else if (type === 'circular') {
      lastActive.current = activeImg;
      setActiveImg((activeImg + 1) % images.length);
      setLastButton('right');
    }
  };

  const handleLeft = (): void => {

    if (activeImg > 0) {
      setActiveImg(activeImg - 1);
      lastActive.current = activeImg;
      setLastButton('left');
    } else if (type === 'circular') {
      lastActive.current = activeImg;
      setActiveImg((activeImg - 1 + images.length) % images.length);
      setLastButton('left');
    }
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
        (imgSrc, index) => (
          <img
            className={decideClassName(index, activeImg, lastActive.current, lastButton)}
            src={imgSrc}
            alt={type}
            key={imgSrc}
          />
        ),
      )}
      <span className="CarouselCounter">{`${activeImg + 1} / ${images.length}`}</span>
    </div>
  );
};

export default Carousel;
