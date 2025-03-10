import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function HomeDemoRecommend({ isLoggedIn }) {
	const swiperRef = useRef(null);
	const [recommendDemo, setRecommendDemo] = useState([]);

	// 圖片對應表
	const recommendDemoImg = [
		{ sm: "Demo/demo-sm-6.png", lg: "Demo/demo-lg-6.png" },
		{ sm: "Demo/demo-sm-3.png", lg: "Demo/demo-lg-3.png" },
		{ sm: "Demo/demo-sm-13.png", lg: "Demo/demo-lg-13.png" },
	];

	// API 請求函數
	const getRecommendDemo = async () => {
		try {
			const res = await axios.get(
				`${API_URL}/api/exhibitions?featured=true&_page=0&_limit=5`,
				{
					headers: { "api-key": API_KEY },
				}
			);
			setRecommendDemo(res.data.data);
		} catch (error) {
			console.error("獲取推薦展覽失敗", error);
		}
	};

	// 只在 isLoggedIn 變更時請求數據
	useEffect(() => {
		if (isLoggedIn) {
			getRecommendDemo();
		} else {
			setRecommendDemo([]); // 未登入時清空推薦列表
		}
	}, [isLoggedIn]);

	// 如果沒登入，不顯示區塊
	if (!isLoggedIn) return null;

	return (
		<section className='bg-secondary-50 overflow-hidden'>
			<div className='container py-sm-80 recommend position-relative py-lg-120'>
				<h2 className='fw-700 position-relative mb-15'>
					<span className='position-relative z-2'>推薦給你</span>
					<img className='title-line-position' src='deco/line-2.png' alt='line-2' />
				</h2>

				<div className='recommend'>
					<Swiper
						modules={[Pagination]}
						slidesPerView='auto'
						spaceBetween={24}
						pagination={{
							clickable: true,
							dynamicBullets: true,
							el: ".custom-pagination",
						}}
						onSwiper={(swiper) => (swiperRef.current = swiper)}
						className='z-3 overflow-visible'>
						{recommendDemo.map((demo, i) => (
							<SwiperSlide key={demo.id} className='swiper-slide'>
								<Link to={`/demo/${demo.id}`} className='d-block'>
									<div className='d-flex flex-column'>
										<picture>
											<source
												media='(min-width: 768px)'
												srcSet={
													i < recommendDemoImg.length
														? recommendDemoImg[i].lg
														: recommendDemoImg[i - recommendDemoImg.length].lg
												}
											/>
											<img
												className='w-100'
												src={
													i < recommendDemoImg.length
														? recommendDemoImg[i].sm
														: recommendDemoImg[i - recommendDemoImg.length].sm
												}
												alt='demo'
											/>
										</picture>
										<ul className='mt-4 text-gray-700'>
											<li className='mb-4 d-flex justify-content-between'>
												<time
													dateTime={`${demo.start_date} - ${demo.end_date}`}
													className='font-family-Noto'>
													{`${demo.start_date.split("-").join("/")} - 
													${demo.end_date.split("-").join("/")}`}
												</time>
												<div>
													<img className='align-top' src='icon/location_outlined.png' alt='location' />
													<span>{demo.address}</span>
												</div>
											</li>
											<li className='mb-4'>
												<div className='d-flex'>
													<h3 className='fw-700 fs-6 text-truncate'>{demo.title}</h3>
													<img className='align-top' src='icon/Bookmark_add.png' alt='Bookmark' />
												</div>
											</li>
											<li className='mb-4'>
												{demo.tags.map((tag) => (
													<span key={tag} className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2 me-5'>
														#{tag}
													</span>
												))}
											</li>
											<li className='mb-4'>
												<p className='fs-4 fw-400'>{demo.description}</p>
											</li>
										</ul>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>

					<div className='d-flex justify-content-between align-items-center mt-15'>
						<button className='btn btn-secondary-700 py-2 pe-3' onClick={() => swiperRef.current?.slidePrev()}>
							<span className='material-symbols-outlined p-0 text-gray-000 align-middle ps-2'>arrow_back_ios</span>
						</button>
						<div className='swiper-pagination custom-pagination position-static'></div>
						<button className='btn btn-secondary-700 py-2 px-4' onClick={() => swiperRef.current?.slideNext()}>
							<span className='material-symbols-outlined p-0 text-gray-000 align-middle'>arrow_forward_ios</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
