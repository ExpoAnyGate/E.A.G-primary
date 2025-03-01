import ContactFooter from "../components/ContactFooter";
import DemoSearch from "../components/DemoSearch";
export default function HomePage() {
	return (
		<>
			<section className='bg-primary-800'>
				<div className='container'>
					<div className='mt-bp-104-0 d-flex align-items-center justify-content-bp-center-start py-4 px-3 text-white'>
						<span className='material-symbols-outlined p-0 fs-6'>
							{" "}
							campaign{" "}
						</span>
						<h3 className='fs-4 fw-400 ms-3'>
							開放展覽主辦單位贊助，成為本網站的乾爹
						</h3>
					</div>
				</div>
			</section>

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
					<div className='swiper mybanner'>
						<ul className='swiper-wrapper'>
							<li className='swiper-slide w-100'>
								<img
									className='d-block w-100 object-fit-cover'
									src='Demo/banner-sm-2.png'
									alt='banner-sm-2'
								/>
							</li>
							<li className='swiper-slide w-100'>
								<img
									className='d-block w-100 object-fit-cover'
									src='Demo/banner-sm-1.png'
									alt='banner-sm-1'
								/>
							</li>
							<li className='swiper-slide w-100'>
								<img
									className='d-block w-100 object-fit-cover'
									src='Demo/banner-sm-3.png'
									alt='banner-sm-3'
								/>
							</li>
						</ul>
						<div className='swiper-pagination'></div>
					</div>
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

					<div className='swiper mybanner'>
						<ul className='swiper-wrapper'>
							<li className='swiper-slide w-100 banner-mask'>
								<img
									className='d-block w-100'
									src='Demo/demo-origin-4.png'
									alt='banner-4'
								/>
							</li>
							<li className='swiper-slide w-100 banner-mask'>
								<img
									className='d-block w-100'
									src='Demo/demo-origin-9.png'
									alt='banner-9'
								/>
							</li>
							<li className='swiper-slide w-100 banner-mask'>
								<img
									className='d-block w-100'
									src='Demo/demo-origin-5.png'
									alt='banner-5'
								/>
							</li>
						</ul>
						<div className='swiper-pagination'></div>
					</div>
				</div>
			</section>

			{/* 搜尋列 */}
			<DemoSearch />

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

					<div className='swiper myrecommend z-3 overflow-visible'>
						<ul className='swiper-wrapper'>
							<li className='swiper-slide'>
								<a href='demo.html' className='d-block'>
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
								</a>
							</li>
							<li className='swiper-slide'>
								<a href='#' className='d-block'>
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
								</a>
							</li>
							<li className='swiper-slide'>
								<a href='#' className='d-block'>
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
								</a>
							</li>
							<li className='swiper-slide'>
								<a href='#' className='d-block'>
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
								</a>
							</li>
							<li className='swiper-slide'>
								<a href='#' className='d-block'>
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
								</a>
							</li>
						</ul>
						<div className='d-flex justify-content-bp-between-center align-items-center mt-15'>
							<button
								type='button'
								className='btn btn-secondary-700 py-2 pe-3 myrecommend-button-prev'>
								<span className='material-symbols-outlined p-0 text-gray-000 align-middle ps-2'>
									arrow_back_ios
								</span>
							</button>
							<div className='swiper-pagination position-static'></div>
							<button
								type='button'
								className='btn btn-secondary-700 py-2 px-4 myrecommend-button-next'>
								<span className='material-symbols-outlined p-0 text-gray-000 align-middle'>
									arrow_forward_ios
								</span>
							</button>
						</div>
					</div>
				</div>
			</section>

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

					{/* <!-- 手機版 --> */}
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
					{/* <!-- 電腦版裝飾 --> */}
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

					{/* <!-- 手機版 --> */}
					<div className='d-md-none'>
						<ul className='row gy-17 position-relative z-2'>
							<li className='col-12'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-11.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-11.png'
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
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													夢境與現實
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
												#超現實主義
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#夢幻藝術
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												這場展覽帶領觀眾進入超現實主義的夢幻世界，模糊了夢境與現實的界線。每一幅作品都充滿了象徵與隱喻，讓人思考潛意識、夢想與現實之間的關係。藝術家通過奇異的場景與不合常理的組合，挑戰了我們對現實的理解。這場展覽是一場視覺的冒險，邀請觀眾在畫布中探索那些難以解釋的世界，並重新審視日常生活中被忽略的奇蹟。
											</p>
										</li>
										<li className='mb-4'>
											<a
												href='#'
												className='btn btn-gray-000 border-gray-400'
												role='button'>
												瞭解更多
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className='col-12'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-8.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-8.png'
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
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													無形之美：雕塑與空間的對話
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
												#雕塑藝術
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#空間美學
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												這場雕塑展超越了傳統的雕塑藝術表達形式，探索了雕塑作品與其所處空間之間的互動。每件作品不僅是獨立的藝術品，還與周圍環境形成對話，通過材質、形狀和比例，重新定義了空間的使用與感知。藝術家們運用金屬、木材、玻璃等多種材料，創造出令人驚嘆的雕塑作品，挑戰觀眾對空間、物質和形態的既有認識。這場展覽不僅邀請觀眾從不同角度欣賞雕塑的形態美，更鼓勵人們思考空間與人之間的關係。
											</p>
										</li>
										<li className='mb-4'>
											<a
												href='#'
												className='btn btn-gray-000 border-gray-400'
												role='button'>
												瞭解更多
											</a>
										</li>
									</ul>
								</div>
							</li>
							<li className='col-12'>
								<div className='d-flex flex-column'>
									<picture>
										<source
											media='(min-width: 768px)'
											srcSet='Demo/demo-lg-7.png'
										/>
										<img
											className='w-100'
											src='Demo/demo-sm-7.png'
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
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													自然的回聲：環保主題藝術展
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
												#環保藝術
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#自然力量
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												以環保為主題，這場展覽通過藝術家的視角，表達了對自然的敬畏和對環境問題的關注。作品涵蓋繪畫、雕塑、裝置藝術和多媒體創作，每一件作品都反映了藝術家對自然環境的深刻洞察與思考。這些作品不僅展現了自然的美麗，還強調了環境的脆弱性，呼籲觀眾採取行動，保護我們的地球。觀眾在參觀展覽的同時，會不自覺地反思我們與自然的關係，並被激勵去更深刻地理解和關心我們賴以生存的環境。
											</p>
										</li>
										<li className='mb-4'>
											<a
												href='#'
												className='btn btn-gray-000 border-gray-400'
												role='button'>
												瞭解更多
											</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<div className='text-center mt-10'>
							<a
								href='#'
								className='btn btn-gray-700 text-gray-000 py-2'
								role='button'>
								查看更多
							</a>
						</div>
					</div>

					{/* <!-- 平板以上 --> */}
					<div className='d-none d-md-block position-relative z-3'>
						<div className='d-flex flex-column'>
							<ul className='row mb-17'>
								<li className='col-7'>
									<div className='overflow-hidden border-top-left-radius-100 border-bottom-left-radius-10 border-top-right-radius-10 border-bottom-right-radius-100'>
										<img
											className='w-100 img-enlarge object-fit-cover'
											src='Demo/demo-lg-11.png'
											alt='demo-11'
										/>
									</div>
								</li>
								<li className='col-5'>
									<ul className='text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													夢境與現實
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
												#超現實主義
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#夢幻藝術
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												這場展覽帶領觀眾進入超現實主義的夢幻世界，模糊了夢境與現實的界線。每一幅作品都充滿了象徵與隱喻，讓人思考潛意識、夢想與現實之間的關係。藝術家通過奇異的場景與不合常理的組合，挑戰了我們對現實的理解。這場展覽是一場視覺的冒險，邀請觀眾在畫布中探索那些難以解釋的世界，並重新審視日常生活中被忽略的奇蹟。
											</p>
										</li>
										<li className='mb-4'>
											<a
												href='#'
												role='button'
												className='btn btn-gray-000 border-gray-400 align-middle py-2'>
												瞭解更多
											</a>
										</li>
									</ul>
								</li>
							</ul>
							<ul className='row mb-17'>
								<li className='col-5'>
									<ul className='text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													無形之美：雕塑與空間的對話
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
												#空間美學
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#雕塑藝術
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												這場雕塑展超越了傳統的雕塑藝術表達形式，探索了雕塑作品與其所處空間之間的互動。每件作品不僅是獨立的藝術品，還與周圍環境形成對話，通過材質、形狀和比例，重新定義了空間的使用與感知。藝術家們運用金屬、木材、玻璃等多種材料，創造出令人驚嘆的雕塑作品，挑戰觀眾對空間、物質和形態的既有認識。這場展覽不僅邀請觀眾從不同角度欣賞雕塑的形態美，更鼓勵人們思考空間與人之間的關係。
											</p>
										</li>
										<li className='mb-4'>
											<a
												href='#'
												role='button'
												className='btn btn-gray-000 border-gray-400 align-middle py-2'>
												瞭解更多
											</a>
										</li>
									</ul>
								</li>
								<li className='col-7'>
									<div className='overflow-hidden border-top-left-radius-10 border-top-right-radius-100 border-bottom-right-radius-10 border-bottom-left-radius-100'>
										<img
											className='w-100 img-enlarge object-fit-cover'
											src='Demo/demo-lg-8.png'
											alt='demo-8'
										/>
									</div>
								</li>
							</ul>
							<ul className='row mb-17'>
								<li className='col-7'>
									<div className='overflow-hidden border-top-left-radius-100 border-bottom-left-radius-10 border-top-right-radius-10 border-bottom-right-radius-100'>
										<img
											className='w-100 img-enlarge object-fit-cover'
											src='Demo/demo-lg-7.png'
											alt='demo-7'
										/>
									</div>
								</li>
								<li className='col-5'>
									<ul className='text-gray-700'>
										<li className='mb-4 d-flex justify-content-between'>
											<time
												dateTime='2024/8/15-2024/9/15'
												className='font-family-Noto'>
												2024/8/15-2024/9/15
											</time>
										</li>
										<li className='mb-4'>
											<div className='d-flex'>
												<h3 className='fw-700 fs-6 text-truncate'>
													自然的回聲：環保主題藝術展
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
												#環保藝術
											</span>
											<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
												#自然力量
											</span>
										</li>
										<li className='mb-4'>
											<p className='fs-4 fw-400'>
												以環保為主題，這場展覽通過藝術家的視角，表達了對自然的敬畏和對環境問題的關注。作品涵蓋繪畫、雕塑、裝置藝術和多媒體創作，每一件作品都反映了藝術家對自然環境的深刻洞察與思考。這些作品不僅展現了自然的美麗，還強調了環境的脆弱性，呼籲觀眾採取行動，保護我們的地球。觀眾在參觀展覽的同時，會不自覺地反思我們與自然的關係，並被激勵去更深刻地理解和關心我們賴以生存的環境。
											</p>
										</li>
										<li className='mb-4'>
											<a
												href='#'
												role='button'
												className='btn btn-gray-000 border-gray-400 align-middle py-2'>
												瞭解更多
											</a>
										</li>
									</ul>
								</li>
							</ul>

							<a
								href='#'
								className='btn btn-gray-700 text-gray-000 mx-auto py-2'
								role='button'>
								查看更多
							</a>
						</div>
					</div>
				</div>
			</section>

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
						<img
							className='w-100 mb-4'
							src='Demo/demo-sm-12.png'
							alt='demo-sm-12'
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
									<h3 className='fw-700 fs-6 text-truncate'>記憶的印記</h3>
									<img
										className='align-top'
										src='icon/Bookmark_add.png'
										alt='Bookmark_add'
									/>
								</div>
							</li>
							<li className='mb-6'>
								<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
									#歷史影像
								</span>
								<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
									#時光記憶
								</span>
							</li>
							<li className='mb-6'>
								<p className='d-block h-auto'>
									這場展覽通過歷史影像，將觀眾帶回過去的關鍵時刻，重溫那些影響我們生活的重大事件。從戰爭到革命，從個人故事到集體記憶，每一張照片都記錄了人類歷史中的重要瞬間。展覽不僅讓我們重新認識歷史，更幫助我們理解這些事件如何塑造了現代世界。透過這些珍貴的影像，觀眾能夠深入思考歷史的連續性，並對當下的社會現象有更深的理解。
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
					</div>

					<div className='swiper myHotdemo overflow-visible'>
						<ul className='swiper-wrapper'>
							<li className='swiper-slide'>
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
							</li>
							<li className='swiper-slide'>
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
							</li>
						</ul>
					</div>

					<div className='text-center mt-10'>
						<a
							href='#'
							className='btn btn-gray-700 text-gray-000 py-2'
							role='button'>
							查看更多
						</a>
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

					<ul className='row gy-100 mb-15 position-relative z-2'>
						<li className='col-5'>
							<ul className='d-flex flex-column'>
								<li className='d-flex mb-3'>
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
										<h3 className='fw-700 fs-6 text-truncate'>記憶的印記</h3>
										<img
											className='align-top'
											src='icon/Bookmark_add.png'
											alt='Bookmark_add'
										/>
									</div>
								</li>
								<li className='mb-6'>
									<span className='rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
										#歷史影像
									</span>
									<span className='ms-4 rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2'>
										#時光記憶
									</span>
								</li>
								<li className='mb-6'>
									<p className='d-block h-auto'>
										這場展覽通過歷史影像，將觀眾帶回過去的關鍵時刻，重溫那些影響我們生活的重大事件。從戰爭到革命，從個人故事到集體記憶，每一張照片都記錄了人類歷史中的重要瞬間。展覽不僅讓我們重新認識歷史，更幫助我們理解這些事件如何塑造了現代世界。透過這些珍貴的影像，觀眾能夠深入思考歷史的連續性，並對當下的社會現象有更深的理解。
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
						</li>
						<li className='col-7'>
							<div className='overflow-hidden border-top-left-radius-50 border-top-right-radius-50 border-bottom-right-radius-10 border-bottom-left-radius-10'>
								<img
									className='w-100 object-fit-cover img-enlarge'
									src='Demo/demo-lg-12.png'
									alt='demo-lg-12'
								/>
							</div>
						</li>
						<li className='col-6 pe-14'>
							<div className='mb-4 overflow-hidden border-top-left-radius-50 border-top-right-radius-50 border-bottom-right-radius-10 border-bottom-left-radius-10'>
								<img
									className='w-100 img-enlarge object-fit-cover'
									src='Demo/demo-lg-1.png'
									alt='demo-lg-1'
								/>
							</div>
							<ul className='d-flex flex-column'>
								<li className='d-flex mb-3'>
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
										#視覺體驗
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
						</li>
						<li className='col-6 ps-14'>
							<div className='mb-4 overflow-hidden border-top-left-radius-50 border-top-right-radius-50 border-bottom-right-radius-10 border-bottom-left-radius-10'>
								<img
									className='w-100 img-enlarge object-fit-cover'
									src='Demo/demo-lg-10.png'
									alt='demo-lg-10'
								/>
							</div>
							<ul className='d-flex flex-column'>
								<li className='d-flex mb-3'>
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
						</li>
					</ul>

					<div className='text-center'>
						<a
							href='#'
							className='btn btn-gray-700 text-gray-000 py-2'
							role='button'>
							查看更多
						</a>
					</div>
				</div>
			</section>
			{/* AOS暫時去除 */}
			<section className='bg-white py-sm-80 py-lg-100'>
				{/* <!-- 手機版 --> */}
				<div className='overflow-hidden'>
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
								<a
									href='#'
									type='button'
									className='btn btn-gray-1000 py-4 px-6 text-gray-000 fw-700'>
									<div className='d-flex align-items-center'>
										<span>展覽主辦方申請</span>
										<span className='material-symbols-outlined p-0 ms-4'>
											arrow_right_alt
										</span>
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className='bg-primary-800 py-14 border-bottom-left-radius-100 d-md-none'>
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
					<div className='bg-secondary-600 py-14 border-top-right-radius-100 mb-10 d-none d-md-block'>
						<div className='container'>
							<div className='d-flex align-items-center justify-content-between'>
								<div>
									<h2 className='fw-700 mb-3'>開啟活動新天地！</h2>
									<p>與我們合作，通過藝展任意門擴展推廣渠道，提升曝光度！</p>
								</div>
								<a
									href='#'
									type='button'
									className='btn btn-gray-1000 py-4 px-6 d-flex align-items-center text-gray-000 fw-700'>
									<span>展覽主辦方申請</span>
									<span className='material-symbols-outlined p-0 ms-4'>
										arrow_right_alt
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className='bg-primary-800 py-14 border-bottom-left-radius-100 d-none d-md-block'>
						<div className='container'>
							<div className='d-flex align-items-center justify-content-between'>
								<a
									href='#'
									type='button'
									className='btn btn-gray-1000 py-4 px-6 d-flex align-items-center text-gray-000 fw-700'>
									<span className='material-symbols-outlined p-0 me-4'>
										arrow_left_alt
									</span>
									<span>成為會員</span>
								</a>
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
		</>
	);
}
