import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { RxArrowTopRight } from "react-icons/rx";
import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ServiceSlider = ({ serviceData = [] }) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1.15}
        spaceBetween={15}
        freeMode={true}
        pagination={{ clickable: true }}
        breakpoints={{
          // Mobile & Tablet Kecil
          480: { slidesPerView: 1.25, spaceBetween: 15 },
          640: { slidesPerView: 1.5, spaceBetween: 15 },
          // Laptop & Screen Medium (Ukuran yang membuat card kamu kepanjangan sebelumnya)
          960: { slidesPerView: 2.1, spaceBetween: 20 },
          // Monitor / Desktop Luas
          1280: { slidesPerView: 2.3, spaceBetween: 20 },
        }}
        modules={[FreeMode, Pagination]}
        className="h-[350px] sm:h-[380px] pb-10"
      >
        {serviceData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <SwiperSlide key={index} className="!h-auto">
              <div className="bg-[rgba(65,47,123,0.25)] backdrop-blur-md h-full rounded-2xl px-6 py-6 flex flex-col justify-between group hover:bg-[rgba(89,65,169,0.35)] transition-all duration-300 border border-white/10 hover:border-emerald-400/50">
                
                <div>
                  {/* Icon & Arrow Link */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl sm:text-4xl text-emerald-400">
                      {IconComponent && <IconComponent />}
                    </div>
                    <Link
                      href={`/contact?service=${encodeURIComponent(item.title)}`}
                      className="text-2xl text-white group-hover:rotate-45 group-hover:text-emerald-400 transition-all duration-300"
                    >
                      <RxArrowTopRight />
                    </Link>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mb-1 text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-emerald-400/80 mb-2 font-mono">
                    {item.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/70 leading-normal line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Feature Bullets */}
                {item.features && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/10">
                    {item.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-black/30 text-white/80 border border-white/5 font-mono"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;