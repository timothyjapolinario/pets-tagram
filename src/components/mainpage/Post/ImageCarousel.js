import { useState } from "react";

const ImageCarousel = ({ imageList }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goToPrev = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(imageList.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeImageIndex === imageList.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };
  return (
    <div className="relative rounded-[50px] overflow-hidden h-[80vh] w-full">
      <img
        src={imageList[activeImageIndex]}
        className="w-full h-full object-cover"
      />
      <button
        className="absolute left-0 top-[45%] text-black text-[2rem] m-1"
        onClick={goToPrev}
      >
        {"<"}
      </button>
      <button
        className="absolute right-0 top-[45%] text-black z-50 text-[2rem] m-1"
        onClick={goToNext}
      >
        {">"}
      </button>
    </div>
  );
};
export default ImageCarousel;
