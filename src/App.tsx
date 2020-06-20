import React, { useState, useEffect } from 'react';
import 'main.scss';
import Carousel from 'Components/Carousel/Carousel';
import imgArr from 'images';
import Footer from 'Components/Footer/Footer';

const App = (): JSX.Element => {

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(imgArr);
  }, []);


  return (
    <div className="App">
      <div className="CarouselsCont">
        <div>
          <h1>Linear</h1>
          <Carousel images={images} type="linear" />
        </div>
        <div>
          <h1>Circular</h1>
          <Carousel images={images} type="circular" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
