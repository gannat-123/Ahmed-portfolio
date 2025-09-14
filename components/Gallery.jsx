import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

export default function Gallery() {
  const images = [
    { src: "/work19.jpg" },
    { src: "/work10.jpg" },
    { src: "/work9.jpg" },
    { src: "/work4.jpg" },
    { src: "/work11.jpg" },
    { src: "/work15.jpg" },
    { src: "/work14.jpg" },
    { src: "/work12.jpg" },
    { src: "/work13.jpg" },
    { src: "/work16.jpg" },
    { src: "/work17.jpg" },
    { src: "/work18.jpg" },
    { src: "/work8.jpg" },
    { src: "/work2.jpg" },
    { src: "/work1.jpg" },
    { src: "/work3.jpg" },
    { src: "/work5.jpg" },
    { src: "/work6.jpg" },
    { src: "/work7.jpg" },
    { src: "/work20.jpg" },
    { src: "/work21.jpg" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-amber-500">
        معرض أعمالي
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={`work-${idx}`}
              className="w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </Masonry>

      <Lightbox
        slides={images}
        open={open}
        index={index}
        close={() => setOpen(false)}
      />
    </section>
  );
}
