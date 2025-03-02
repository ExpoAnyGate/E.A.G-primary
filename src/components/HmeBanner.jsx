import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from "prop-types";
const HomeBanner = ({ device }) => {
	return (
		<>
			{device === "sm" ? (
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={0}
					pagination={{ clickable: true }}
					autoplay={{ delay: 2500, disableOnInteraction: false }}>
					<SwiperSlide className='w-100 banner-mask'>
						<img
							className='d-block w-100 object-fit-cover'
							src='Demo/banner-sm-2.png'
							alt='banner-sm-2'
						/>
					</SwiperSlide>
					<SwiperSlide className='d-block w-100 object-fit-cover'>
						<img
							className='d-block w-100'
							src='Demo/banner-sm-1.png'
							alt='banner-sm-1'
						/>
					</SwiperSlide>
					<SwiperSlide className='d-block w-100 object-fit-cover'>
						<img
							className='d-block w-100'
							src='Demo/banner-sm-3.png'
							alt='banner-sm-3'
						/>
					</SwiperSlide>
				</Swiper>
			) : (
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={0}
					pagination={{ clickable: true }}
					autoplay={{ delay: 2500, disableOnInteraction: false }}>
					<SwiperSlide className='w-100 banner-mask'>
						<img
							className='d-block w-100'
							src='Demo/demo-origin-4.png'
							alt='banner-4'
						/>
					</SwiperSlide>
					<SwiperSlide className='w-100 banner-mask'>
						<img
							className='d-block w-100'
							src='Demo/demo-origin-9.png'
							alt='banner-9'
						/>
					</SwiperSlide>
					<SwiperSlide className='w-100 banner-mask'>
						<img
							className='d-block w-100'
							src='Demo/demo-origin-5.png'
							alt='banner-5'
						/>
					</SwiperSlide>
				</Swiper>
			)}
		</>
	);
};

export default HomeBanner;

HomeBanner.propTypes = {
	device: PropTypes.string,
};
