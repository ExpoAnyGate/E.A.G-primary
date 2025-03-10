import ContactFooter from "../layouts/ContactFooter";
import DemoSearchBar from "../layouts/DemoSearchBar";
import FloatingButton from "../components/WalletKun";
import HomeBanner from "../components/HmeBanner";
import HomeHotDemo from "../layouts/HomeHotDemo";
import HomeLastDemo from "../layouts/HomeLastDemo";
import HomeDemoRecommend from "../layouts/HomeDemoRecommend";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
	useEffect(() => {
		//不的出現在AOS之後，影響捲軸定位
		window.scrollTo(0, 0);

		AOS.init({ once: false });
		setTimeout(() => {
			AOS.refresh();
		}, 100);
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
				<div className='container-fluid d-none d-md-block p-0 banner position-relative mb-n1'>
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
			<HomeDemoRecommend />

			{/* 最新展覽 */}
			<HomeLastDemo />

			<HomeHotDemo />

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
