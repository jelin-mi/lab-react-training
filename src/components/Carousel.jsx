import { useState } from 'react';

function Carousel({ images }) {
  const [image, setImage] = useState(0);

  const moveLeft = () => {
    setImage((previous) => {
      if (previous > 0) {
        return previous - 1;
      } else {
        return images.length - 1;
      }
    });
  };

  const moveRight = () => {
    setImage((previous) => {
      if (previous < images.length - 1) {
        return previous + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <>
      <h2>Carousel</h2>
      <button onClick={moveLeft}>Left</button>
      <img src={images[image]} alt="" />
      <button onClick={moveRight}>Right</button>
    </>
  );
}

export default Carousel;