import { useState } from 'react';
import initialImage from '../assets/images/maxence.png';
import newImage from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
  const [image, setImage] = useState(true);

  const changeImage = () => {
    setImage(!image);
  };

  return (
    <img src={image ? initialImage : newImage} onClick={changeImage} alt="" />
  );
}

export default ClickablePicture;