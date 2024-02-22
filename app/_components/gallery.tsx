import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  const images = [
    {
      src: "/gallery/1.jpg",
      alt: "1",
    },
    {
      src: "/gallery/2.jpg",
      alt: "2",
    },
    {
      src: "/gallery/3.jpg",
      alt: "3",
    },
    {
      src: "/gallery/4.jpg",
      alt: "4",
    },
    {
      src: "/gallery/5.jpg",
      alt: "5",
    },
    {
      src: "/gallery/6.jpg",
      alt: "6",
    },
    {
      src: "/gallery/7.jpg",
      alt: "7",
    },
    {
      src: "/gallery/8.jpg",
      alt: "8",
    },
    {
      src: "/gallery/9.jpg",
      alt: "9",
    },
    {
      src: "/gallery/10.jpg",
      alt: "10",
    },
    {
      src: "/gallery/11.jpg",
      alt: "11",
    },
  ];
  return (
    <div className="py-12 sm:py-20 lg:py-24 xl:py-32">
      <div className="text-normal px-4 pb-4 text-center font-secondary text-3xl sm:px-12 sm:text-4xl md:text-5xl lg:px-16 lg:text-6xl xl:px-32 2xl:px-48">
        glipmse into the&nbsp;
        <span className="text-primary">memories&nbsp;</span>we{" "}
        <span className="whitespace-nowrap">have created</span>
      </div>
      <Marquee pauseOnHover autoFill className="z-0 p-10 ">
        {images.map((image, index) => (
          <div className="h-48" key={index}>
            <Image
              className="mx-3 h-full rounded object-cover grayscale transition-all duration-200 ease-in hover:scale-110 hover:grayscale-0"
              src={image.src}
              alt={image.alt}
              height={200}
              width={300}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
