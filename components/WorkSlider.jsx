import { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "CloudResto OS",
          description: "Integrated Restaurant System",
          path: "/cloudresto.jpg",
        },
        {
          title: "E-PJOK Portal",
          description: "Guru & Student Learning Portal",
          path: "/pjok.jpg",
        },
        {
          title: "Jasindo Syariah",
          description: "Agent OS & Admin Portal",
          path: "/jasindo.jpg",
        },
        {
          title: "Persuratan UGM",
          description: "Academic Management System",
          path: "/ugm.png",
        },
      ],
    },
    {
      images: [
        {
          title: "PLN System",
          description: "ICON Management System",
          path: "/pln.png",
        },
        {
          title: "Kicktime",
          description: "Booking & Match App",
          path: "/kicktime.png",
        },
        {
          title: "Keuangan IT",
          description: "Financial Tracker",
          path: "/keuanganIT.png",
        },
        {
          title: "BNI App",
          description: "Scaning NEW Rekening",
          path: "/bni.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  // State untuk zoom preview lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
              {slide.images.map((image, imageI) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group h-full w-full bg-secondary/20 cursor-pointer"
                  key={imageI}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                    {/* Image dengan object-cover */}
                    <Image
                      src={image.path}
                      alt={image.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Overlay Gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500"
                      aria-hidden
                    />

                    {/* Icon Zoom di Kanan Atas */}
                    <div
                      className="absolute top-3 right-3 p-2 bg-black/60 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                      title="Klik untuk Zoom"
                    >
                      <BsSearch className="text-sm" />
                    </div>

                    {/* Title & Description Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                      <h3 className="text-white text-sm sm:text-lg font-bold translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75">
                        {image.title}
                      </h3>

                      <p className="text-gray-300 text-[11px] sm:text-xs translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pop-up Modal Zoom */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] bg-black/40 rounded-xl overflow-hidden p-2 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black rounded-full text-white transition-all"
            >
              <IoClose className="text-2xl" />
            </button>

            {/* Display Gambar Full */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.path}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Info Keterangan Gambar */}
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold text-white">{selectedImage.title}</h4>
              <p className="text-sm text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSlider;