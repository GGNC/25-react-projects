import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ limit = 8 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?limit=${limit}`
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchImages();
  }, []);

  function handleSwitch(direction) {
    switch (direction) {
      case "before":
        setCurrentSlide(
          currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
        break;
      case "after":
        setCurrentSlide(
          currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
        break;
    }
  }

  if (loading) {
    return <div>Loading Please wait...</div>;
  }
  if (errorMessage) {
    return <div>Error accured : {errorMessage};</div>;
  }
  return (
    <div className="flex justify-center items-center">
        <div className="relative flex justify-center items-center w-8/12 h-5/12">
        <BsArrowLeftCircleFill
            onClick={() => {
            handleSwitch("before");
            }}
            className="absolute w-8 h-8 left-4 cursor-pointer"
            color="#fff"
        />
        {images && images.length
            ? images.map((image, index) => {
                return (
                <img
                    key={image.id}
                    alt={image.download_url}
                    src={image.download_url}
                    className={
                    currentSlide === index ? "rounded-lg w-full h-full" : "hidden"
                    }
                />
                );
            })
            : null}
        <BsArrowRightCircleFill
            onClick={() => {
            handleSwitch("after");
            }}
            className="absolute w-8 h-8 right-4 cursor-pointer"
            color="#fff"
        />
        <span className="absolute flex bottom-4">
            {images && images.length
            ? images.map((_, index) => {
                return (
                    <button
                    key={index}
                    className={currentSlide === index ? "bg-white w-4 h-4 rounded-2xl border-0 outline-none mx-2 cursor-pointer" : "bg-slate-500 w-4 h-4 rounded-2xl border-0 outline-none mx-2 cursor-pointer" }
                    onClick={()=>{setCurrentSlide(index)}}
                    ></button>
                );
                })
            : null}
        </span>
        </div>
    </div>
  );
}

export default ImageSlider;
