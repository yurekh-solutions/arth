"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface CarouselProps {
  items: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  autoplay?: boolean;
  effect?: "slide" | "coverflow";
  className?: string;
  showNavigation?: boolean;
  showPagination?: boolean;
}

export default function Carousel({
  items,
  slidesPerView = 3,
  spaceBetween = 30,
  autoplay = true,
  effect = "slide",
  className = "",
  showNavigation = true,
  showPagination = true,
}: CarouselProps) {
  const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];

  return (
    <div className={`carousel-wrapper ${className}`}>
      <Swiper
        modules={modules}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        autoplay={autoplay ? { delay: 4000, disableOnInteraction: false } : false}
        effect={effect}
        coverflowEffect={
          effect === "coverflow"
            ? { rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }
            : undefined
        }
        breakpoints={{
          640: { slidesPerView: Math.min(2, slidesPerView) },
          1024: { slidesPerView },
        }}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
