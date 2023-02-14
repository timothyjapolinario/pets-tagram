import { useState } from "react";

const ImageCarousel = ({ imageList }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  console.log(imageList[activeImageIndex]);
  return (
    <div className="rounded-[50px] overflow-hidden">
      <img src={imageList[activeImageIndex]} className="w-full h-full" />
    </div>
  );
};
export default ImageCarousel;
