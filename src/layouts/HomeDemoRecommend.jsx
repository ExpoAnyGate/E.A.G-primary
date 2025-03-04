import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import axios from "axios";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function HomeDemoRecommend() {
	const swiperRef = useRef(null);
	const [recommendDemo, setRecommendDemo] = useState([]);
	const recommendDemoImg = [
		{ sm: "Demo/demo-sm-6.png", lg: "Demo/demo-lg-6.png" },
		{ sm: "Demo/demo-sm-3.png", lg: "Demo/demo-lg-3.png" },
		{ sm: "Demo/demo-sm-13.png", lg: "Demo/demo-lg-13.png" },
	];

	const getRecommendDemo = async () => {
		try {
			const res = await axios.get(
				`${API_URL}/api/exhibitions?featured=true&_page=0&_limit=5`,
				{
					headers: { "api-key": `${API_KEY}` },
				}
			);
			setRecommendDemo(res.data.data);
		} catch (error) {}
	};

	useEffect(() => {
		getRecommendDemo();
	}, []);

	return (
		<section className='bg-secondary-50 overflow-hidden'>
			{/* <!-- 手機版到電腦版 --> */}
			<div className='container py-sm-80 recommend position-relative py-lg-120'>
				<h2 className='fw-700 position-relative mb-15'>
					<span className='position-relative z-2'>推薦給你</span>
					<img
						className='title-line-position'
						src='deco/line-2.png'
						alt='line-2'
					/>
				</h2>
				{/* <!-- 裝飾 --> */}
				<div>
					<picture>
						<source media='(min-width: 768px)' srcSet='deco/vector-lg-1.png' />
						<img
							className='vector-position-right vector-position-right-transform-1'
							src='deco/vector-sm-1.png'
							alt='vector-sm-1'
						/>
					</picture>
					<picture>
						<source media='(min-width:768px)' srcSet='deco/vector-lg-2.png' />
						<img
							className='vector-position-right vector-position-right-transform-2'
							src='deco/vector-sm-2.png'
							alt='vector-sm-2'
						/>
					</picture>
					<img
						className='vector-position-left vector-position-left-transform-3 d-none d-md-block'
						src='deco/vector-lg-3.png'
						alt='vector-3'
					/>
					<img
						className='vector-position-left vector-position-left-transform-4 d-none d-md-block'
						src='deco/vector-lg-4.png'
						alt='vector-4'
					/>
				</div>
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
						{recommendDemo.map((demo, i) => {
							return (
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
													alt='demo-sm-6'
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
														<img
															className='align-top'
															src='icon/location_outlined.png'
															alt='location_outlined'
														/>
														<span>{demo.address}</span>
													</div>
												</li>
												<li className='mb-4'>
													<div className='d-flex'>
														<h3 className='fw-700 fs-6 text-truncate'>
															{demo.title}
														</h3>
														<img
															className='align-top'
															src='icon/Bookmark_add.png'
															alt='Bookmark_add'
														/>
													</div>
												</li>
												<li className='mb-4'>
													{demo.tags.map((tag) => {
														return (
															<span
																key={tag}
																className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2 me-5'>
																#{tag}
															</span>
														);
													})}
												</li>
												<li className='mb-4'>
													<p className='fs-4 fw-400'>{demo.description}</p>
												</li>
												<li className='mb-4'>
													<div className='d-flex'>
														<div>
															<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-outlined material-symbols-filled'>
																favorite
															</span>
															<span>{demo.likes}</span>
														</div>
														<div className='ms-6'>
															<span className='fs-6 align-middle me-1 p-0 material-symbols-outlined material-symbols-filled '>
																visibility
															</span>
															<span>{demo.views}</span>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</Link>
								</SwiperSlide>
							);
						})}
					</Swiper>

					<div className='d-flex justify-content-bp-between-center  align-items-center mt-15'>
						<button
							className='btn btn-secondary-700 py-2 pe-3'
							onClick={() => swiperRef.current?.slidePrev()}>
							<span className='material-symbols-outlined p-0 text-gray-000 align-middle ps-2'>
								arrow_back_ios
							</span>
						</button>
						<div className='swiper-pagination custom-pagination position-static'></div>
						<button
							className='btn btn-secondary-700 py-2 px-4'
							onClick={() => swiperRef.current?.slideNext()}>
							<span className='material-symbols-outlined p-0 text-gray-000 align-middle'>
								arrow_forward_ios
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
