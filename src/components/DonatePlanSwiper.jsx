import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import PropTypes from "prop-types";


const DonatePlanSwiper = ({ tab }) => {
	const swiperRef = useRef(null);

	const tabContent = (tab) => {
		if (tab === "plan") {
			return (
				<Swiper
					modules={[Pagination]}
					slidesPerView='auto'
					spaceBetween={24}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					className='z-3 overflow-visible donate-plan-swiper'>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-plan-mini.png'
							alt='donate-mini'
						/>
						<div className='text-center mt-4'>
							<h3 className='mb-4 fw-700 fs-8'>抖內 Mini</h3>
							<span>適合族群：</span>
							<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
								#學生
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-plan-plus.png'
							alt='donate-mini'
						/>
						<div className='text-center mt-4'>
							<h3 className='mb-4 fw-700 fs-8'>抖內 Plus</h3>
							<span>適合族群：</span>
							<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
								#上班族
							</span>
						</div>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-plan-pro.png'
							alt='donate-pro'
						/>
						<div className='text-center mt-4'>
							<h3 className='mb-4 fw-700 fs-8'>抖內 Pro</h3>
							<span>適合族群：</span>
							<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
								#展覽狂粉
							</span>
						</div>
					</SwiperSlide>
				</Swiper>
			);
		}
		if (tab === "gift") {
			return (
				<Swiper
					modules={[Pagination]}
					slidesPerView='auto'
					spaceBetween={24}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					className='z-3 overflow-visible donate-plan-swiper'>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-coupon.png'
							alt='donate-coupon'
						/>
						<div className='text-center mt-4 fs-6'>
							<strong>Coupon 優惠逛展享不完</strong>
						</div>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-Ecoin.png'
							alt='donate-Ecoin'
						/>
						<div className='text-center mt-4 fs-6'>
							<strong>專屬 E 幣兌獎樂翻天</strong>
						</div>
					</SwiperSlide>
				</Swiper>
			);
		}
		if (tab === "pay") {
			return (
				<Swiper
					modules={[Pagination]}
					slidesPerView='auto'
					spaceBetween={24}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					className='z-3 overflow-visible donate-plan-swiper'>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-credit-card.png'
							alt='credit-card'
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img'
							src='Donate/donate-line-pay.jpg'
							alt='line-pay'
						/>
					</SwiperSlide>
					<SwiperSlide className='swiper-slide'>
						<img
							className='donate-plan-img w-100'
							src='Donate/donate-google-pay.jpg'
							alt='line-pay'
						/>
					</SwiperSlide>
				</Swiper>
			);
		}
	};

	return <>{tabContent(tab)}</>;
};

export default DonatePlanSwiper;

DonatePlanSwiper.propTypes = {
	tab: PropTypes.string,
};
