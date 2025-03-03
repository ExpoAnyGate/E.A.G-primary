import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeHotDemo = ({ hotDemo, hotDemoImg }) => {
	const swiperRef = useRef(null);
	console.log(hotDemo[0]);

	return (
		<>
			<div className='mb-100'>
				<img className='w-100 mb-4' src={hotDemoImg[0].sm} alt='demo-sm-12' />
				<ul className='d-flex flex-column'>
					<li className='d-flex justify-content-between mb-3'>
						<time
							dateTime={`${hotDemo[0]?.start_date} - ${hotDemo[0]?.end_date}`}
							className='font-family-Noto'>
							{`${hotDemo[0]?.start_date.split("-")[0]}/${
								hotDemo[0]?.start_date.split("-")[1]
							}/
							${hotDemo[0]?.start_date.split("-")[2]} - 
							${hotDemo[0]?.end_date.split("-")[0]}/${hotDemo[0]?.end_date.split("-")[1]}/${
								hotDemo[0]?.end_date.split("-")[2]
							}`}
						</time>
						<div>
							<img
								className='align-top ms-6'
								src='icon/location_outlined.png'
								alt='location_outlined'
							/>
							<span>{hotDemo[0]?.address}</span>
						</div>
					</li>
					<li className='mb-6'>
						<div className='d-flex'>
							<h3 className='fw-700 fs-6 text-truncate'>{hotDemo[0]?.title}</h3>
							<span className='material-symbols-outlined p-0 fs-6'>
								bookmarks
							</span>
						</div>
					</li>
					<li className='mb-6'>
						{hotDemo[0]?.tags.map((tag) => {
							return (
								<span
									key={tag}
									className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2 me-5'>
									#{tag}
								</span>
							);
						})}
					</li>
					<li className='mb-6'>
						<p className='d-block h-auto position-relative z-3'>
							{hotDemo[0]?.description}
						</p>
					</li>
					<li>
						<div className='d-flex'>
							<div>
								<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-outlined'>
									favorite
								</span>
								<span>{hotDemo[0]?.likes}</span>
							</div>
							<div className='ms-6'>
								<span className='fs-6 align-middle me-1 p-0 material-symbols-outlined material-symbols-filled '>
									visibility
								</span>
								<span>{hotDemo[0]?.views}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<Swiper
				modules={[Pagination]}
				slidesPerView='auto'
				spaceBetween={24}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				className='z-3 overflow-visible'>
				{hotDemo.map((_, i, demos) => {
					return (
						i !== 0 && (
							<SwiperSlide key={demos[i]?.id} className='swiper-slide'>
								<Link to={"/demo"} className='d-block'>
									<img
										className='w-100 mb-6'
										src={hotDemoImg[i]?.sm}
										alt='demo-sm-1'
									/>
									<ul className='d-flex flex-column'>
										<li className='d-flex justify-content-between mb-3'>
											<time
												dateTime={`${demos[i]?.start_date} - ${demos[i]?.end_date}`}
												className='font-family-Noto'>
												{`${demos[i]?.start_date.split("-")[0]}/${
													demos[i]?.start_date.split("-")[1]
												}/
														${demos[i]?.start_date.split("-")[2]} - 
														${demos[i]?.end_date.split("-")[0]}/${demos[i]?.end_date.split("-")[1]}/${
													demos[i]?.end_date.split("-")[2]
												}`}
											</time>
											<div>
												<img
													className='align-top ms-6'
													src='icon/location_outlined.png'
													alt='location_outlined'
												/>
												<span>{demos[i]?.address}</span>
											</div>
										</li>
										<li className='mb-6'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													{demos[i]?.title}
												</h3>
												<img
													className='align-top'
													src='icon/Bookmark_add.png'
													alt='Bookmark_add'
												/>
											</div>
										</li>
										<li className='mb-6'>
											{demos[i]?.tags.map((tag) => {
												return (
													<span
														key={tag}
														className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2 me-5'>
														#{tag}
													</span>
												);
											})}
										</li>
										<li className='mb-6'>
											<p>{demos[i]?.description}</p>
										</li>
										<li>
											<div className='d-flex'>
												<div>
													<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-outlined'>
														favorite
													</span>
													<span>{demos[i]?.likes}</span>
												</div>
												<div className='ms-6'>
													<span className='fs-6 align-middle me-1 p-0 material-symbols-outlined material-symbols-filled '>
														visibility
													</span>
													<span>{demos[i]?.views}</span>
												</div>
											</div>
										</li>
									</ul>
								</Link>
							</SwiperSlide>
						)
					);
				})}

				{/* <SwiperSlide className='swiper-slide'>
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
				</SwiperSlide> */}
			</Swiper>
		</>
	);
};

export default HomeHotDemo;

HomeHotDemo.propTypes = {
	hotDemo: PropTypes.shape({
		start_date: PropTypes.string,
		end_date: PropTypes.string,
		address: PropTypes.string,
		likes: PropTypes.number,
		views: PropTypes.number,
	}),
};
