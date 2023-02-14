import { useState } from "react";

const ImageCarousel = ({ imageList }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  console.log(imageList[activeImageIndex]);
  return (
    <div>
      <img src={imageList[activeImageIndex]} />
    </div>
  );
};
export default ImageCarousel;
