import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const multiplier = {
  translate: 0.1,
  rotate: 0.01,
};

const images = Array.from({ length: 12 }, (_, i) => `https://picsum.photos/800/1200?random=${i + 1}`);

const calculateWheel = () => {
  const slides = document.querySelectorAll(".single");
  slides.forEach((slide) => {
    const rect = slide.getBoundingClientRect();
    const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
    let ty = Math.abs(r) * multiplier.translate - rect.width * multiplier.translate;
    if (ty < 0) ty = 0;
    const transformOrigin = r < 0 ? "left top" : "right top";
    slide.style.transform = `translate(0, ${ty}px) rotate(${-r * multiplier.rotate}deg)`;
    slide.style.transformOrigin = transformOrigin;
  });
};

const MemorySwiper = () => {
  useEffect(() => {
    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };
    raf();
  }, []);

  return (
        <div className="carousel">
          <Swiper
            className="spotlight-swiper"
            slidesPerView="auto"
            spaceBetween={90}
            centeredSlides
            loop
            grabCursor
            allowTouchMove
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="single relative shadow-lg">
                  <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  );
};

export default MemorySwiper;
