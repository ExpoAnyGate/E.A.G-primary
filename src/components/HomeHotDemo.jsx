import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeHotDemo = () => {
	const swiperRef = useRef(null);

	return (
		<>
			<Swiper
				modules={[Pagination]}
				slidesPerView='auto'
				spaceBetween={24}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				className='z-3 overflow-visible'>
				<SwiperSlide className='swiper-slide'>
					<Link to={"/demo"} className='d-block'>
						<img
							className='w-100 mb-6'
							src='Demo/demo-sm-1.png'
							alt='demo-sm-1'
						/>
						<ul className='d-flex flex-column'>
							<li className='d-flex justify-content-between mb-3'>
								<time
									dateTime='2024/8/15-2024/9/15'
									className='font-family-Noto'>
									2024/8/15-2024/9/15
								</time>
								<div>
									<img
										className='align-top ms-6'
										src='icon/location_outlined.png'
										alt='location_outlined'
									/>
									<span>新北市</span>
								</div>
							</li>
							<li className='mb-6'>
								<div className='d-flex'>
									<h3 className='fw-700 fs-6 text-truncate'>
										聲音與視覺的對話
									</h3>
									<img
										className='align-top'
										src='icon/Bookmark_add.png'
										alt='Bookmark_add'
									/>
								</div>
							</li>
							<li className='mb-6'>
								<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
									#多媒體藝術
								</span>
								<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
									#視聽體驗
								</span>
							</li>
							<li className='mb-6'>
								<p>
									這場展覽將聲音與視覺融合，展示了當代多媒體藝術的創新表達方式。藝術家們通過聲音裝置、視覺影像與互動技術，創造出跨感官的藝術體驗，讓觀眾沉浸在聲音與視覺的對話之中。展覽打破了傳統藝術的界限，探索了聲音與視覺如何共同作用於我們的感知與情感。這是一場多感官的藝術之旅，邀請觀眾進入一個充滿聲音與圖像交織的世界，並重新思考藝術的可能性。
								</p>
							</li>
							<li>
								<div className='d-flex'>
									<div>
										<img
											className='align-top me-1'
											src='icon/heart-outline.png'
											alt='heart'
										/>
										<span>1,200</span>
									</div>
									<div className='ms-6'>
										<img
											className='align-top me-1'
											src='icon/eye-filled.png'
											alt='eye'
										/>
										<span>15,000</span>
									</div>
								</div>
							</li>
						</ul>
					</Link>
				</SwiperSlide>
				<SwiperSlide className='swiper-slide'>
					<Link to={"/demo"} className='d-block'>
						<img
							className='w-100 mb-6'
							src='Demo/demo-sm-10.png'
							alt='demo-sm-10'
						/>
						<ul className='d-flex flex-column'>
							<li className='d-flex justify-content-between mb-3'>
								<time
									dateTime='2024/8/15-2024/9/15'
									className='font-family-Noto'>
									2024/8/15-2024/9/15
								</time>
								<div>
									<img
										className='align-top ms-6'
										src='icon/location_outlined.png'
										alt='location_outlined'
									/>
									<span>台北市</span>
								</div>
							</li>
							<li className='mb-6'>
								<div className='d-flex'>
									<h3 className='fw-700 fs-6 text-truncate'>
										藝術中的女性力量
									</h3>
									<img
										className='align-top'
										src='icon/Bookmark_add.png'
										alt='Bookmark_add'
									/>
								</div>
							</li>
							<li className='mb-6'>
								<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
									#女性藝術
								</span>
								<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
									#女性力量
								</span>
							</li>
							<li className='mb-6'>
								<p>
									這場展覽專注於展示女性藝術家的力量與創造力，透過她們的作品探討女性在當代藝術中的角色與貢獻。每件作品都代表了女性藝術家們對社會、身份與性別問題的獨特視角，強調了女性在藝術領域中的不可忽視的重要性。展覽展示了多樣化的藝術形式，從繪畫到裝置藝術，表現了女性藝術家們在各個領域中的卓越表現，為觀眾提供了一個全新視角來理解藝術與性別的交互關係。
								</p>
							</li>
							<li>
								<div className='d-flex'>
									<div>
										<img
											className='align-top me-1'
											src='icon/heart-outline.png'
											alt='heart'
										/>
										<span>1,200</span>
									</div>
									<div className='ms-6'>
										<img
											className='align-top me-1'
											src='icon/eye-filled.png'
											alt='eye'
										/>
										<span>15,000</span>
									</div>
								</div>
							</li>
						</ul>
					</Link>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default HomeHotDemo;

HomeHotDemo.propTypes = {
	device: PropTypes.string,
};
