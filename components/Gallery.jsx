import Masonry from "react-masonry-css";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import { useState } from "react";

export default function Gallery() {
  const images = [
    "/work19.jpg",
    "/work10.jpg",
    "/work9.jpg",
    "/work4.jpg",
    "/work11.jpg",
    "/work15.jpg",
    "/work14.jpg",
    "/work12.jpg",
    "/work13.jpg",
    "/work16.jpg",
    "/work17.jpg",
    "/work18.jpg",
    "/work8.jpg",
    "/work2.jpg",
    "/work4.jpg",
    "/work1.jpg",
    "/work2.jpg",
    "/work3.jpg",
    "/work5.jpg",
    "/work6.jpg",
    "/work7.jpg",
    "/work20.jpg",
    "/work21.jpg",
    
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section
      id="gallery"
      className="py-20 px-4 max-w-7xl mx-auto bg-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-amber-500">
        معرض أعمالي
      </h2>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={img}
              alt={`work-${index}`}
              className="w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </Masonry>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
}
