import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function DemoRecommend() {
	const swiperRef = useRef(null);

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
						<SwiperSlide className='swiper-slide'>
							<Link to={"/demo"} className='d-block'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-6.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-6.png'
											alt='demo-sm-6'
										/>
									</picture>
									<ul className='mt-4 text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
											<div>
												<img
													className='align-top'
													src='icon/location_outlined.png'
													alt='location_outlined'
												/>
												<span>台北市</span>
											</div>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													光影交錯：攝影藝術展
												</h3>
												<img
													className='align-top'
													src='icon/Bookmark_add.png'
													alt='Bookmark_add'
												/>
											</div>
										</li>
										<li className='mb-4'>
											<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#攝影展
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#光影藝術
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												透過鏡頭捕捉光與影的交錯瞬間，展現攝影師對日常與自然世界的深刻觀察，帶來一場視覺與情感的雙重饗宴。
											</p>
										</li>
										<li className='mb-4'>
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
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
							<Link to={"/demo"} className='d-block'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-3.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-3.png'
											alt='demo-sm-3'
										/>
									</picture>
									<ul className='mt-4 text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
											<div>
												<img
													className='align-top'
													src='icon/location_outlined.png'
													alt='location_outlined'
												/>
												<span>桃園市</span>
											</div>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													現代設計未來：數位創作引領跨世代潮流
												</h3>
												<img
													className='align-top'
													src='icon/Bookmark_add.png'
													alt='Bookmark_add'
												/>
											</div>
										</li>
										<li className='mb-4'>
											<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#數位藝術
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#未來設計
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												以數位技術為核心，這場展覽探討未來設計的可能性，結合藝術與科技，呈現前所未有的創意形式，讓觀眾一窺未來的藝術世界。
											</p>
										</li>
										<li className='mb-4'>
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
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
							<Link to={"/demo"} className='d-block'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-13.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-13.png'
											alt='demo-sm-13'
										/>
									</picture>
									<ul className='mt-4 text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
											<div>
												<img
													className='align-top'
													src='icon/location_outlined.png'
													alt='location_outlined'
												/>
												<span>高雄市</span>
											</div>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													色彩的力量：抽象繪畫展
												</h3>
												<img
													className='align-top'
													src='icon/Bookmark_add.png'
													alt='Bookmark_add'
												/>
											</div>
										</li>
										<li className='mb-4'>
											<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#攝影展
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#光影藝術
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												這場現代藝術展是一場跨越全球的創意饗宴，集合了當代藝術家的精選作品，涵蓋繪畫、雕塑、裝置藝術、數位藝術及多媒體創作。每件作品都深刻反映了藝術家對社會、文化、科技和個人情感的獨特探索，運用抽象與具象的表現手法，帶來感官的刺激和思想的啟發。觀眾將透過這些作品，體驗到不僅是藝術的美感，還有作品中隱含的深層思考與觀點。
											</p>
										</li>
										<li className='mb-4'>
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
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
							<Link to={"/demo"} className='d-block'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-6.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-6.png'
											alt='demo-sm-6'
										/>
									</picture>
									<ul className='mt-4 text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
											<div>
												<img
													className='align-top'
													src='icon/location_outlined.png'
													alt='location_outlined'
												/>
												<span>台北市</span>
											</div>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													光影交錯：攝影藝術展
												</h3>
												<img
													className='align-top'
													src='icon/Bookmark_add.png'
													alt='Bookmark_add'
												/>
											</div>
										</li>
										<li className='mb-4'>
											<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#攝影展
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#光影藝術
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												透過鏡頭捕捉光與影的交錯瞬間，展現攝影師對日常與自然世界的深刻觀察，帶來一場視覺與情感的雙重饗宴。
											</p>
										</li>
										<li className='mb-4'>
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
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide className='swiper-slide'>
							<Link to={"/demo"} className='d-block'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-3.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-3.png'
											alt='demo-sm-3'
										/>
									</picture>
									<ul className='mt-4 text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
											<div>
												<img
													className='align-top'
													src='icon/location_outlined.png'
													alt='location_outlined'
												/>
												<span>桃園市</span>
											</div>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													現代設計未來：數位創作引領跨世代潮流
												</h3>
												<img
													className='align-top'
													src='icon/Bookmark_add.png'
													alt='Bookmark_add'
												/>
											</div>
										</li>
										<li className='mb-4'>
											<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#數位藝術
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#未來設計
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												以數位技術為核心，這場展覽探討未來設計的可能性，結合藝術與科技，呈現前所未有的創意形式，讓觀眾一窺未來的藝術世界。
											</p>
										</li>
										<li className='mb-4'>
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
								</div>
							</Link>
						</SwiperSlide>
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
