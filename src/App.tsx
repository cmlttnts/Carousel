import React, { useState, useEffect } from 'react';
import 'main.scss';
import Carousel from 'Components/Carousel/Carousel';
import imgArr from 'images';

const App = (): JSX.Element => {

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(imgArr);
  }, []);


  return (
    <div className="App">
      <div>
        <h1>Linear Carousel</h1>
        <Carousel images={images} type="linear" />
      </div>
      <div>
        <h1>Circular Carousel</h1>
        <Carousel images={images} type="circular" />
      </div>
    </div>
  );
};

export default App;
