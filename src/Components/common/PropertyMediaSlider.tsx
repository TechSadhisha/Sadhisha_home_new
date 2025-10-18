import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyMediaSliderProps {
  media: string[]; // Array of image URLs
}

const PropertyMediaSlider: React.FC<PropertyMediaSliderProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const scrollToThumbnail = (index: number) => {
    const container = thumbnailsRef.current;
    if (!container) return;

    const thumbnail = container.children[index] as HTMLElement;
    if (thumbnail) {
      const containerRect = container.getBoundingClientRect();
      const thumbnailRect = thumbnail.getBoundingClientRect();

      // Center the active thumbnail in the scroll view
      const offset =
        thumbnailRect.left -
        containerRect.left -
        containerRect.width / 2 +
        thumbnailRect.width / 2;

      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? media.length - 1 : prev - 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev === media.length - 1 ? 0 : prev + 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  return (
    <div className="position-relative mb-4">
      {/* Main Image */}
      <img
        src={media[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="img-fluid rounded w-100"
        style={{
          height: "500px",
          objectFit: "cover",
        }}
      />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y ms-2"
        style={{ width: "40px", height: "40px" }}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y me-2"
        style={{ width: "40px", height: "40px" }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Thumbnails */}
      <div
        ref={thumbnailsRef}
        className="d-flex mt-3 gap-2 overflow-auto px-2"
        style={{
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
        }}
      >
        {media.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => {
              setCurrentIndex(index);
              scrollToThumbnail(index);
            }}
            className={`rounded ${
              currentIndex === index ? "border border-dark" : ""
            }`}
            style={{
              width: "100px",
              height: "60px",
              objectFit: "cover",
              cursor: "pointer",
              flex: "0 0 auto",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyMediaSlider;
