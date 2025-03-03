import ContactFooter from "../layouts/ContactFooter";
import DemoSearchBar from "../layouts/DemoSearchBar";
import FloatingButton from "../components/WalletKun";
import HomeBanner from "../components/HmeBanner";
import HomeHotDemo from "../components/HomeHotDemo";
import DemoRecommend from "../layouts/DemoRecommend";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function HomePage() {
	const [lastDemo, setLastDemo] = useState([]);
	const [hotDemo, setHotDemo] = useState([]);

	const lastDemoImg = [
		{ sm: "Demo/demo-sm-11.png", lg: "Demo/demo-sm-11.png" },
		{ sm: "Demo/demo-sm-8.png", lg: "Demo/demo-sm-8.png" },
		{ sm: "Demo/demo-sm-7.png", lg: "Demo/demo-lg-7.png" },
	];

	const hotDemoImg = [
		{ sm: "Demo/demo-sm-12.png", lg: "Demo/demo-lg-12.png" },
		{ sm: "Demo/demo-sm-1.png", lg: "Demo/demo-lg-1.png" },
		{ sm: "Demo/demo-sm-10.png", lg: "Demo/demo-lg-10.png" },
	];

	const getLastDemo = async () => {
		try {
			const res = await axios.get(
				`${API_URL}/api/exhibitions?_sort=start_date&_order=desc&_page=0&_limit=3`,
				{
					headers: { "api-key": `${API_KEY}` },
				}
			);
			setLastDemo(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getHotDemo = async () => {
		try {
			const res = await axios.get(
				`${API_URL}/api/exhibitions?_sort=views&_order=desc&_page=0&_limit=3`,
				{
					headers: { "api-key": `${API_KEY}` },
				}
			);
			setHotDemo(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		AOS.init({ once: false });
		setTimeout(() => {
			AOS.refresh();
		}, 200);
		getLastDemo();
		getHotDemo();
	}, []);

	return (
		<>
			<section className='bg-primary-800'>
				<div className='container'>
					<div className='mt-bp-104-0 d-flex align-items-center justify-content-bp-center-start py-4 px-3 text-white'>
						<span className='material-symbols-outlined p-0 fs-6'>
							{" "}
							campaign{" "}
						</span>
						<Link to={"/donate"} className='fs-4 fw-400 ms-3'>
							開放展覽主辦單位贊助，成為本網站的乾爹
						</Link>
					</div>
				</div>
			</section>

			{/* Banner */}
			<section>
				{/* <!-- 手機版 --> */}
				<div className='container-fluid position-relative d-md-none banner px-0'>
					<div className='text-center text-nowrap text-gray-000 font-family-Noto position-absolute top-50 start-50 translate-middle z-2'>
						<h1 className='fs-9 fw-700 mb-2'>E.A.G - 藝展任意門</h1>
						<p className='fs-875 mb-6 fw-700'>
							Explore Any Exposition through the Gate
						</p>
						<h2 className='fs-6 fw-700 mb-4 position-relative'>
							<img
								src='deco/line-1.png'
								alt='line-1.png'
								className='position-absolute start-50 w-50 top-100 translate-middle'
							/>
							<span className='position-relative z-2'>隨時隨地查找</span>
						</h2>

						<h2 className='fs-6 fw-700'>參與自己感興趣的展覽</h2>
					</div>
					<HomeBanner device={"sm"} />
				</div>
				{/* <!-- 平板以上 --> */}
				<div className='container-fluid d-none d-md-block p-0 banner position-relative'>
					<div className='text-gray-000 text-nowrap position-absolute banner-text'>
						<h1 className='fs-15 fw-900 mb-2'>E.A.G - 藝展任意門</h1>
						<p className='fs-6 fw-500 mb-6'>
							Explore Any Exposition through the Gate
						</p>
						<h2 className='fs-9 fw-500'>
							<img
								src='deco/line-1.png'
								alt='line-1.png'
								className='w-45 banner-line-position'
							/>
							<span className='position-relative z-2'>
								隨時隨地查找 參與自己感興趣的展覽
							</span>
						</h2>
					</div>

					<HomeBanner device={"lg"} />
				</div>
			</section>

			{/* 搜尋列 */}
			<DemoSearchBar />

			{/* 展覽推薦	 */}
			<DemoRecommend />

			{/* 最新展覽 */}
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
														{`${demo.start_date.split("-")[0]}/${
															demo.start_date.split("-")[1]
														}/${demo.start_date.split("-")[2]} - 
														${demo.end_date.split("-")[0]}/${demo.end_date.split("-")[1]}/${
															demo.end_date.split("-")[2]
														}`}
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
														to={"/demo"}
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
								className='btn btn-gray-700 text-gray-000 py-2'
								role='button'>
								查看更多
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
														{`${demo.start_date.split("-")[0]}/${
															demo.start_date.split("-")[1]
														}/${demo.start_date.split("-")[2]} - 
														${demo.end_date.split("-")[0]}/${demo.end_date.split("-")[1]}/${
															demo.end_date.split("-")[2]
														}`}
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
													<button
														href='#'
														role='button'
														className='btn btn-gray-000 border-gray-400 align-middle py-2'>
														瞭解更多
													</button>
												</li>
											</ul>
										</li>
									</ul>
								);
							})}
							<button
								className='btn btn-read-more btn-gray-700 text-gray-000 mx-auto py-2'
								role='button'>
								查看更多
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* 熱門展覽 */}
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

					<HomeHotDemo hotDemo={hotDemo} hotDemoImg={hotDemoImg} />

					<div className='text-center mt-10'>
						<button
							className='btn btn-gray-700 text-gray-000 py-2'
							role='button'>
							查看更多
						</button>
					</div>
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
							<ul className='d-flex flex-column'>
								<li className='d-flex mb-3 '>
									<time
										dateTime={`${hotDemo[0]?.start_date} - ${hotDemo[0]?.end_date}`}
										className='font-family-Noto'>
										{`${hotDemo[0]?.start_date.split("-")[0]}/${
											hotDemo[0]?.start_date.split("-")[1]
										}/${hotDemo[0]?.start_date.split("-")[2]} - 
							${hotDemo[0]?.end_date.split("-")[0]}/${hotDemo[0]?.end_date.split("-")[1]}/${
											hotDemo[0]?.end_date.split("-")[2]
										}`}
									</time>
									<div className='text-nowrap'>
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
						</li>
						<li className='col-7'>
							<div className=' overflow-hidden border-top-left-radius-50 border-top-right-radius-50 border-bottom-right-radius-10 border-bottom-left-radius-10'>
								<img
									className=' w-100 object-fit-cover img-enlarge'
									src={hotDemoImg[0].lg}
									alt='demo-lg-12'
								/>
							</div>
						</li>

						{hotDemo.map((_, i, demos) => {
							return (
								i !== 0 && (
									<li key={demos[i]?.id} className='col-6'>
										<div className='mb-4 overflow-hidden border-top-left-radius-50 border-top-right-radius-50 border-bottom-right-radius-10 border-bottom-left-radius-10'>
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
													{`${demos[i]?.start_date.split("-")[0]}/${
														demos[i]?.start_date.split("-")[1]
													}/${demos[i]?.start_date.split("-")[2]} - 
														${demos[i]?.end_date.split("-")[0]}/${demos[i]?.end_date.split("-")[1]}/${
														demos[i]?.end_date.split("-")[2]
													}`}
												</time>
												<div className='text-nowrap'>
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
									</li>
								)
							);
						})}
					</ul>

					<div className='text-center'>
						<button
							className='btn btn-gray-700 text-gray-000 py-2 btn-read-more'
							role='button'>
							查看更多
						</button>
					</div>
				</div>
			</section>

			<section className='bg-white py-sm-80 py-lg-100'>
				{/* <!-- 手機版 --> */}
				<div
					data-aos='fade-right'
					data-aos-easing='ease-out'
					data-aos-duration='500'
					data-aos-offset='50'
					className='overflow-hidden'>
					<div className='bg-secondary-600 py-14 border-top-right-radius-100 mb-10 d-md-none'>
						<div className='container'>
							<div className='ms-8 mb-8'>
								<h2 className='fw-700 mb-3'>開啟活動新天地！</h2>
								<p>
									與我們合作，通過藝展任意門擴展推廣渠
									<br />
									道，提升曝光度！
								</p>
							</div>
							<div className='text-center'>
								<Link
									href='#'
									type='button'
									className='btn btn-gray-1000 py-4 px-6 text-gray-000 fw-700'>
									<div className='d-flex align-items-center'>
										<span>展覽主辦方申請</span>
										<span className='material-symbols-outlined p-0 ms-4'>
											arrow_right_alt
										</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div
						data-aos='fade-left'
						data-aos-easing='ease-out'
						data-aos-duration='500'
						data-aos-delay='100'
						data-aos-offset='50'
						className='bg-primary-800 py-14 border-bottom-left-radius-100 d-md-none'>
						<div className='container'>
							<div className='text-gray-000 mb-8'>
								<h2 className='fw-700 mb-3 text-end'>探索藝展任意門！</h2>
								<p className='ms-8 fw-400'>
									輕鬆找到並參與更多展覽，開啟您的藝術與文化之旅。
								</p>
							</div>
							<div className='text-center'>
								<a
									href='#'
									type='button'
									className='btn btn-gray-1000 py-4 px-6 text-gray-000 fw-700'>
									<div className='d-flex align-items-center'>
										<span className='material-symbols-outlined p-0 me-4'>
											arrow_left_alt
										</span>
										<span>成為會員</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- 平板以上 --> */}
				<div className='overflow-hidden'>
					<div
						data-aos='fade-right'
						data-aos-easing='ease-out'
						data-aos-duration='500'
						data-aos-offset='50'
						className='bg-secondary-600 py-14 border-top-right-radius-100 mb-10 d-none d-md-block'>
						<div className='container'>
							<div className='d-flex align-items-center justify-content-between'>
								<div>
									<h2 className='fw-700 mb-3'>開啟活動新天地！</h2>
									<p>與我們合作，通過藝展任意門擴展推廣渠道，提升曝光度！</p>
								</div>
								<Link
									to={"/"}
									className='btn btn-gray-1000 py-4 px-6 d-flex align-items-center text-gray-000 fw-700 '>
									<span>展覽主辦方申請</span>
									<span className='material-symbols-outlined p-0 ms-4'>
										arrow_right_alt
									</span>
								</Link>
							</div>
						</div>
					</div>
					<div
						data-aos='fade-left'
						data-aos-easing='ease-out'
						data-aos-duration='500'
						data-aos-delay='100'
						data-aos-offset='50'
						className='bg-primary-800 py-14 border-bottom-left-radius-100 d-none d-md-block'>
						<div className='container'>
							<div className='d-flex align-items-center justify-content-between'>
								<Link
									href='#'
									type='button'
									className='btn btn-gray-1000 py-4 px-6 d-flex align-items-center text-gray-000 fw-700'>
									<span className='material-symbols-outlined p-0 me-4'>
										arrow_left_alt
									</span>
									<span>成為會員</span>
								</Link>
								<div className='text-gray-000'>
									<h2 className='fw-700 mb-3'>探索藝展任意門！</h2>
									<p>輕鬆找到並參與更多展覽，開啟您的藝術與文化之旅。</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<ContactFooter />

			<FloatingButton />
		</>
	);
}
