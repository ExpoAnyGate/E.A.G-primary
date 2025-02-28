import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ArtistSwiper = () => {
  return (
    <Swiper
      className="artist-swiper"
      spaceBetween={10} // 可根據需求調整
      slidesPerView={1} // 每次顯示的 slide 數量
      pagination={{ clickable: true }}
      loop={true} // 啟用無限循環
      speed={8000}
      autoplay={{
        delay: 0, // 每 3 秒自動切換
        disableOnInteraction: false, // 使用者滑動後仍繼續自動播放
      }}
      modules={[Pagination, Autoplay]} // 使用 Swiper 的 Pagination 模組
    >
      <SwiperSlide>
        <img
          className="d-block object-fit-cover bg-secondary-50"
          src="Spotlight/spotlight-img.png"
          alt="spotlight-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="d-block w-100 object-fit-cover"
          src="Spotlight/spotlight-img.png"
          alt="spotlight-img"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="d-block w-100 object-fit-cover"
          src="Spotlight/spotlight-img.png"
          alt="spotlight-img"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ArtistSwiper;
