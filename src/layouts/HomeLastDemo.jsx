import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const HomeLastDemo = () => {
	const [lastDemo, setLastDemo] = useState([]);
	const readMoreBtnLG = useRef(null);
	const readMoreBtnSM = useRef(null);
	const [isWaiting, setIsWaiting] = useState(false);

	const lastDemoImg = [
		{ sm: "Demo/demo-sm-11.png", lg: "Demo/demo-lg-11.png" },
		{ sm: "Demo/demo-sm-8.png", lg: "Demo/demo-lg-8.png" },
		{ sm: "Demo/demo-sm-7.png", lg: "Demo/demo-lg-7.png" },
		{ sm: "Demo/demo-lg-14.jpg", lg: "Demo/demo-lg-14.jpg" },
		{ sm: "Demo/demo-lg-15.jpg", lg: "Demo/demo-lg-15.jpg" },
		{ sm: "Demo/demo-lg-16.jpg", lg: "Demo/demo-lg-16.jpg" },
	];

	const getLastDemo = async (page = 0) => {
		try {
			setIsWaiting(true);
			const res = await axios.get(
				`${API_URL}/api/exhibitions?_sort=start_date&_order=desc&_page=${page}&_limit=3`,
				{
					headers: { "api-key": `${API_KEY}` },
				}
			);

			if (page === 0) {
				setLastDemo(res.data.data);
			} else {
				setLastDemo((pre) => [...pre, ...res.data.data]);
				readMoreBtnLG.current.style.display = "none";
				readMoreBtnSM.current.style.display = "none";
			}
		} finally {
			setIsWaiting(false);
		}
	};

	useEffect(() => {
		getLastDemo();
	}, []);

	return (
		<section className='bg-primary-50 overflow-hidden'>
			<div className='container py-sm-80 last-demo py-lg-120 position-relative'>
				<h2 className='fw-700 position-relative mb-15'>
					<span className='position-relative z-2'>最新展覽</span>
					<img
						className='title-line-position'
						src='deco/line-3.png'
						alt='line-3'
					/>
				</h2>

				{/* <!-- 手機版裝飾 --> */}
				<div>
					<img
						className='linegp-position-sm-2 linegp-position-sm-2-transform d-md-none'
						src='deco/linegp-sm-2.png'
						alt='linegp-sm-2'
					/>
					<img
						className='linegp-position-sm-1 linegp-position-sm-1-transform d-md-none'
						src='deco/linegp-sm-1.png'
						alt='linegp-sm-1'
					/>
					<img
						className='linegp-position-sm-3 linegp-position-sm-3-transform d-md-none'
						src='deco/linegp-sm-3.png'
						alt='linegp-sm-3'
					/>
				</div>
				{/* <!-- 電腦版裝飾 --> */}
				<div>
					<img
						className='linegp-position-lg-top linegp-position-lg-top-transform d-none d-md-block'
						src='deco/linegp-lg-2.png'
						alt='linegp-lg-2'
					/>
					<img
						className='linegp-position-lg-bottom linegp-position-lg-bottom-transform d-none d-md-block'
						src='deco/linegp-lg-1.png'
						alt='linegp-lg-1'
					/>
				</div>

				{/* <!-- 手機版 --> */}
				<div className='d-md-none'>
					<ul className='row gy-17 position-relative z-2'>
						{lastDemo.map((demo, index) => {
							return (
								<li key={demo.id} className='col-12'>
									<div className='d-flex flex-column'>
										<img
											className='w-100'
											src={lastDemoImg[index].sm}
											alt='demo-sm-6'
										/>
										<ul className='mt-4 text-gray-700'>
											<li className='mb-4 d-flex justify-content-between'>
												<time
													dateTime={`${demo.start_date} - ${demo.end_date}`}
													className='font-family-Noto'>
													{`${demo.start_date.split("-").join("/")} - 
														${demo.end_date.split("-").join("/")}`}
												</time>
											</li>
											<li className='mb-4'>
												<div className='d-flex'>
													<h3 className='fw-700 fs-6 text-truncate'>
														{demo.title}
													</h3>
													<span className='material-symbols-outlined p-0 fs-6'>
														bookmarks
													</span>
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
												<Link
													to={`/demo/${demo.id}`}
													className='btn btn-gray-000 border-gray-400'
													role='button'>
													瞭解更多
												</Link>
											</li>
										</ul>
									</div>
								</li>
							);
						})}
					</ul>
					<div className='text-center mt-10'>
						<button
							onClick={() => getLastDemo(2)}
							ref={readMoreBtnSM}
							className='btn btn-gray-700 text-gray-000 py-2'
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

				{/* <!-- 平板以上 --> */}
				<div className='d-none d-md-block position-relative z-3'>
					<div className='d-flex flex-column'>
						{lastDemo.map((demo, index) => {
							return (
								<ul key={demo.id} className='row mb-17'>
									<li className='col-7'>
										<div className='overflow-hidden border-top-left-radius-100 border-bottom-left-radius-10 border-top-right-radius-10 border-bottom-right-radius-100'>
											<img
												className='w-100 img-enlarge object-fit-cover'
												src={lastDemoImg[index].lg}
												alt='demo-11'
											/>
										</div>
									</li>
									<li className='col-5'>
										<ul className='text-gray-700'>
											<li className='mb-4 d-flex justify-content-between'>
												<time
													dateTime={`${demo.start_date} - ${demo.end_date}`}
													className='font-family-Noto'>
													{`${demo.start_date.split("-").join("/")} - 
														${demo.end_date.split("-").join("/")}`}
												</time>
											</li>
											<li className='mb-4'>
												<div className='d-flex'>
													<h3 className='fw-700 fs-6 text-truncate'>
														{demo.title}
													</h3>
													<span className='material-symbols-outlined p-0 fs-6'>
														bookmarks
													</span>
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
												<Link
													to={`demo/${demo.id}`}
													role='button'
													className='btn btn-gray-000 border-gray-400 align-middle py-2'>
													瞭解更多
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							);
						})}

						<button
							onClick={() => getLastDemo(2)}
							ref={readMoreBtnLG}
							className='btn btn-read-more btn-gray-700 text-gray-000 mx-auto py-2'
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
			</div>
		</section>
	);
};
export default HomeLastDemo;
