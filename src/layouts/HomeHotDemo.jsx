import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const HomeHotDemo = () => {
	const swiperRef = useRef(null);
	const [hotDemo, setHotDemo] = useState([]);
	const readMoreBtnLG = useRef(null);
	const [clickCount, setClickCount] = useState(2);
	const [isWaiting, setIsWaiting] = useState(false);

	const hotDemoImg = [
		{ sm: "Demo/demo-sm-12.png", lg: "Demo/demo-lg-12.png" },
		{ sm: "Demo/demo-sm-1.png", lg: "Demo/demo-lg-1.png" },
		{ sm: "Demo/demo-sm-10.png", lg: "Demo/demo-lg-10.png" },
		{ sm: "Demo/demo-lg-17.jpg", lg: "Demo/demo-lg-17.jpg" },
		{ sm: "Demo/demo-lg-18.jpg", lg: "Demo/demo-lg-18.jpg" },
		{ sm: "Demo/demo-lg-19.jpg", lg: "Demo/demo-lg-19.jpg" },
		{ sm: "Demo/demo-lg-20.jpg", lg: "Demo/demo-lg-20.jpg" },
		{ sm: "Demo/demo-lg-21.jpg", lg: "Demo/demo-lg-21.jpg" },
		{ sm: "Demo/demo-lg-22.jpg", lg: "Demo/demo-lg-22.jpg" },
		{ sm: "Demo/demo-lg-23.jpg", lg: "Demo/demo-lg-23.jpg" },
		{ sm: "Demo/demo-lg-24.jpg", lg: "Demo/demo-lg-24.jpg" },
	];

	const getHotDemo = async (page = 0) => {
		try {
			setIsWaiting(true);
			const res = await axios.get(
				`${API_URL}/api/exhibitions?_sort=views&_order=desc&_page=${page}&_limit=3&_expand=region`,
				{
					headers: { "api-key": `${API_KEY}` },
				}
			);

			if (page === 0) {
				setHotDemo(res.data.data);
			} else {
				setHotDemo((pre) => [...pre, ...res.data.data]);
				setClickCount((pre) => pre + 1);
			}
		} finally {
			setIsWaiting(false);
		}
	};

	useEffect(() => {
		getHotDemo();
	}, []);

	return (
		<section className='bg-tertiary-50 overflow-hidden'>
			{/* <!-- 手機版 --> */}
			<div className='container d-md-none hot-demo py-sm-80 position-relative'>
				<h2 className='fw-700 position-relative mb-15'>
					<span className='position-relative z-2'>熱門展覽</span>
					<img
						className='title-line-position'
						src='deco/line-1.png'
						alt='line-1'
					/>
				</h2>
				<img
					className='round-position-sm-right'
					src='deco/round-sm-2.png'
					alt='round-sm-2'
				/>
				<div className='mb-100'>
					<Link to={`demo/${hotDemo[0]?.id}`}>
						<img
							className='w-100 mb-4'
							src={hotDemoImg[0].sm}
							alt='demo-sm-12'
						/>
						<ul className='d-flex flex-column'>
							<li className='d-flex justify-content-between mb-3'>
								<time
									dateTime={`${hotDemo[0]?.start_date} - ${hotDemo[0]?.end_date}`}
									className='font-family-Noto'>
									{`${hotDemo[0]?.start_date.split("-").join("/")} -
							${hotDemo[0]?.end_date.split("-").join("/")}`}
								</time>
								<div>
									<img
										className='align-top ms-6'
										src='icon/location_outlined.png'
										alt='location_outlined'
									/>
									<span>{hotDemo[0]?.region.name}</span>
								</div>
							</li>
							<li className='mb-6'>
								<div className='d-flex'>
									<h3 className='fw-700 fs-6 text-truncate'>
										{hotDemo[0]?.title}
									</h3>
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
								<p className='position-relative z-3'>
									{hotDemo[0]?.description}
								</p>
							</li>
							<li>
								<div className='d-flex'>
									<div>
										<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-outlined material-symbols-filled'>
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
					</Link>
				</div>

				<Swiper
					modules={[Pagination]}
					slidesPerView='auto'
					spaceBetween={24}
					pagination={{
						clickable: true,
						dynamicBullets: true,
						el: ".hot-pagination",
					}}
					onSwiper={(swiper) => (swiperRef.current = swiper)}
					className='z-3 overflow-visible'>
					{hotDemo.map((_, i, demos) => {
						return (
							i !== 0 &&
							i < 3 && (
								<SwiperSlide key={demos[i]?.id} className='swiper-slide '>
									<Link to={`/demo/${demos.id}`} className='d-block'>
										<div className='img-box'>
											<img
												className='w-100 mb-6 '
												src={hotDemoImg[i]?.sm}
												alt='demo-sm-1'
											/>
										</div>
										<ul className='d-flex flex-column'>
											<li className='d-flex justify-content-between mb-3'>
												<time
													dateTime={`${demos[i]?.start_date} - ${demos[i]?.end_date}`}
													className='font-family-Noto'>
													{`${demos[i]?.start_date.split("-").join("/")} -
												${demos[i]?.end_date.split("-").join("/")}`}
												</time>
												<div>
													<img
														className='align-top ms-6'
														src='icon/location_outlined.png'
														alt='location_outlined'
													/>
													<span>{demos[i]?.region.name}</span>
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
														<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-outlined material-symbols-filled'>
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
				</Swiper>

				<div className='swiper-pagination hot-pagination '></div>
			</div>

			{/* <!-- 平板版以上 --> */}
			<div className='container py-sm-80 py-lg-120 hot-demo position-relative d-none d-md-block'>
				<h2 className='fw-700 position-relative mb-15'>
					<span className='position-relative z-2'>熱門展覽</span>
					<img
						className='title-line-position'
						src='deco/line-1.png'
						alt='line-1'
					/>
				</h2>
				<div>
					<img
						className='round-position-lg-left'
						src='deco/round-lg-2.png'
						alt='round-lg-2.png'
					/>
					<img
						className='round-position-lg-right'
						src='deco/round-lg-1.png'
						alt='round-lg-1.png'
					/>
				</div>

				<ul className='row gy-100 mb-15 position-relative z-2'>
					<li className='col-5'>
						<Link to={`demo/${hotDemo[0]?.id}`}>
							<ul className='d-flex flex-column'>
								<li className='d-flex mb-3 '>
									<time
										dateTime={`${hotDemo[0]?.start_date} - ${hotDemo[0]?.end_date}`}
										className='font-family-Noto'>
										{`${hotDemo[0]?.start_date.split("-").join("/")} - 
											${hotDemo[0]?.end_date.split("-").join("/")}`}
									</time>
									<div className='text-nowrap'>
										<img
											className='align-top ms-6'
											src='icon/location_outlined.png'
											alt='location_outlined'
										/>
										<span>{hotDemo[0]?.region.name}</span>
									</div>
								</li>
								<li className='mb-6'>
									<div className='d-flex'>
										<h3 className='fw-700 fs-6 text-truncate'>
											{hotDemo[0]?.title}
										</h3>
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
												# {tag}
											</span>
										);
									})}
								</li>
								<li className='mb-6'>
									<div className='main-box'>{hotDemo[0]?.description}</div>
								</li>
								<li>
									<div className='d-flex'>
										<div>
											<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-filled material-symbols-outlined'>
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
						</Link>
					</li>
					<li className='col-7'>
						<Link to={`demo/${hotDemo[0]?.id}`}>
							<div className='overflow-hidden border-top-left-radius-50 border-top-right-radius-50 border-bottom-right-radius-10 border-bottom-left-radius-10'>
								<img
									className='w-100 object-fit-cover img-enlarge'
									src={hotDemoImg[0].lg}
									alt='demo-lg-12'
								/>
							</div>
						</Link>
					</li>

					{hotDemo.map((_, i, demos) => {
						return (
							((i !== 0 && i % 3 !== 2) || i === 2) && (
								<li key={demos[i]?.id} className='col-6'>
									<Link to={`/demo/${demos[i]?.id}`}>
										<div className='mb-4 overflow-hidden img-box'>
											<img
												className='w-100 img-enlarge object-fit-cover'
												src={hotDemoImg[i]?.lg}
												alt='demo-lg-1'
											/>
										</div>
										<ul className='d-flex flex-column'>
											<li className='d-flex mb-3'>
												<time
													dateTime={`${demos[i]?.start_date} - ${demos[i]?.end_date}`}
													className='font-family-Noto'>
													{`${demos[i]?.start_date.split("-").join("/")} -
														${demos[i]?.end_date.split("-").join("/")}`}
												</time>
												<div className='text-nowrap'>
													<img
														className='align-top ms-6'
														src='icon/location_outlined.png'
														alt='location_outlined'
													/>
													<span>{demos[i]?.region.name}</span>
												</div>
											</li>
											<li className='mb-6'>
												<div className='d-flex'>
													<h3 className='fw-700 fs-6 text-truncate'>
														{demos[i]?.title}
													</h3>
													<span className='material-symbols-outlined p-0 fs-6'>
														bookmarks
													</span>
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
														<span className='fs-6 text-danger align-middle me-1 p-0 material-symbols-outlined material-symbols-filled '>
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
								</li>
							)
						);
					})}
				</ul>

				<div className='text-center'>
					<button
						ref={readMoreBtnLG}
						onClick={() => getHotDemo(clickCount)}
						className='btn btn-gray-700 text-gray-000 py-2 btn-read-more'
						style={{ display: clickCount > 4 && "none" }}
						role='button'
						disabled={isWaiting}>
						查看更多{" "}
						{isWaiting && (
							<div className='spinner-border spinner-border-sm' role='status'>
								<span className='visually-hidden'>Loading...</span>
							</div>
						)}
					</button>
				</div>
			</div>
		</section>
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
