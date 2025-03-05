import ContactFooter from "../layouts/ContactFooter";
import DonatePlanSwiper from "../components/DonatePlanSwiper";
import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
export default function DonatePage() {
	const donateModal = useRef(null);
	const donateModalInstance = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);
		donateModalInstance.current = new Modal(donateModal.current);
	}, []);

	const openDonateModal = () => {
		donateModalInstance.current.show();
	};

	const closeDonateModal = () => {
		donateModalInstance.current.hide();
	};

	return (
		<>
			<section>
				<div className='container-fluid px-0 position-relative mt-bp-104-0'>
					<picture>
						<source
							media='(min-width: 768px)'
							srcSet='Donate/donate-banner.png'
						/>
						<img
							className='donate-banner'
							src='Donate/donate-banner-sm.png'
							alt='donate-banner'
						/>
					</picture>
					<div className='position-absolute donate-banner-title'>
						<h1>抖內贊聲</h1>
						<h1 className='ms-100-220'>打造更多可能</h1>
					</div>
				</div>
			</section>

			<section className='bg-secondary-50 py-sm-80 py-lg-120 donate-plan'>
				{/* <!-- 手機到平板版 --> */}
				<div className='container d-lg-none'>
					<div className='donate-plan-title text-gray-1000'>
						<h2 className='fw-700 fs-8 position-relative mb-4'>
							<img
								src='Donate/donate-deco-line.png'
								alt='donate-deco-line'
								className='donate-plan-deco-line'
							/>
							<span className='position-relative text-nowrap'>
								選擇適合的抖內方案，搜刮所有的展覽優惠
							</span>
						</h2>
						<span className='fw-400 fs-4 d-block position-relative z-2'>
							*抖內不綁約，可隨時取消!
						</span>
					</div>
					{/* <!-- tab區塊 --> */}
					<ul
						className='nav nav-tabs justify-content-between border-0'
						id='myTab'
						role='tablist'>
						<li className='nav-item' role='presentation'>
							<button
								className='active btn btn-gray-000 btn-outline-gray-400 donate-plan-tab-btn mb-8'
								id='home-tab'
								data-bs-toggle='tab'
								data-bs-target='#tab-plan-sm'
								type='button'
								role='tab'
								aria-controls='home-tab-pane'
								aria-selected='true'>
								抖內方案
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button
								className='btn btn-gray-000 btn-outline-gray-400 donate-plan-tab-btn mb-8'
								id='home-tab'
								data-bs-toggle='tab'
								data-bs-target='#tab-gift-sm'
								type='button'
								role='tab'
								aria-controls='home-tab-pane'
								aria-selected='true'>
								專屬好禮
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button
								className='btn btn-gray-000 btn-outline-gray-400 donate-plan-tab-btn'
								id='home-tab'
								data-bs-toggle='tab'
								data-bs-target='#tab-pay-sm'
								type='button'
								role='tab'
								aria-controls='home-tab-pane'
								aria-selected='true'>
								支付方式
							</button>
						</li>
					</ul>
					{/* <!-- 輪播 --> */}
					<ul className='tab-content content' id='myTabContent'>
						<li
							className='tab-pane fade show active'
							id='tab-plan-sm'
							role='tabpanel'
							aria-labelledby='tab-plan'
							tabIndex='0'>
							<DonatePlanSwiper tab={"plan"} />
						</li>
						<li
							className='tab-pane fade'
							id='tab-gift-sm'
							role='tabpanel'
							aria-labelledby='tab-gift'
							tabIndex='0'>
							<DonatePlanSwiper tab={"gift"} />
						</li>
						<li
							className='tab-pane fade'
							id='tab-pay-sm'
							role='tabpanel'
							aria-labelledby='tab-pay'
							tabIndex='0'>
							<DonatePlanSwiper tab={"pay"} />
						</li>
					</ul>
					<div className='text-center mt-15'>
						<button className='btn btn-gray-700 donate-btn'>立即抖內</button>
					</div>
				</div>

				{/* <!-- 電腦版 --> */}
				<div className='container d-none d-lg-block'>
					<div className='donate-plan-title text-gray-1000'>
						<h2 className='fw-700 fs-10 position-relative'>
							<img
								src='Donate/donate-deco-line.png'
								alt='donate-deco-line'
								className='donate-plan-deco-line'
							/>
							<span className='position-relative text-nowrap'>
								選擇適合的抖內方案，搜刮所有的展覽優惠
							</span>
						</h2>
						<span className='fw-400 fs-4 text-nowrap position-relative z-2'>
							*抖內不綁約，可隨時取消!
						</span>
					</div>
					{/* <!-- tab區塊 --> */}
					<ul className='row flex-nowrap position-relative z-3'>
						<li className='col-1'>
							<ul className='nav nav-tabs' id='myTab' role='tablist'>
								<li className='nav-item' role='presentation'>
									<button
										className='active btn btn-gray-000 btn-outline-gray-400 donate-plan-tab-btn mb-8'
										id='home-tab'
										data-bs-toggle='tab'
										data-bs-target='#tab-plan'
										type='button'
										role='tab'
										aria-controls='home-tab-pane'
										aria-selected='true'>
										抖內方案
									</button>
								</li>
								<li className='nav-item' role='presentation'>
									<button
										className='btn btn-gray-000 btn-outline-gray-400 donate-plan-tab-btn mb-8'
										id='home-tab'
										data-bs-toggle='tab'
										data-bs-target='#tab-gift'
										type='button'
										role='tab'
										aria-controls='home-tab-pane'
										aria-selected='true'>
										專屬好禮
									</button>
								</li>
								<li className='nav-item' role='presentation'>
									<button
										className='btn btn-gray-000 btn-outline-gray-400 donate-plan-tab-btn'
										id='home-tab'
										data-bs-toggle='tab'
										data-bs-target='#tab-pay'
										type='button'
										role='tab'
										aria-controls='home-tab-pane'
										aria-selected='true'>
										支付方式
									</button>
								</li>
							</ul>
						</li>
						<li className='col-11'>
							<div className='ms-10'>
								<ul className='tab-content content' id='myTabContent'>
									<li
										className='tab-pane fade show active'
										id='tab-plan'
										role='tabpanel'
										aria-labelledby='tab-plan'
										tabIndex='0'>
										<ul className='row flex-nowrap'>
											<li className='col-4'>
												<div className='px-1'>
													<img
														className='donate-plan-img'
														src='Donate/donate-plan-mini.png'
														alt='donate-mini'
													/>
													<div className='text-center mt-4'>
														<h3 className='mb-4 fw-700 fs-8'>抖內 Mini</h3>
														<span>適合族群：</span>
														<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
															#學生
														</span>
													</div>
												</div>
											</li>
											<li className='col-4'>
												<div className='px-1'>
													<img
														className='donate-plan-img'
														src='Donate/donate-plan-plus.png'
														alt='donate-mini'
													/>
													<div className='text-center mt-4'>
														<h3 className='mb-4 fw-700 fs-8'>抖內 Plus</h3>
														<span>適合族群：</span>
														<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
															#上班族
														</span>
													</div>
												</div>
											</li>
											<li className='col-4'>
												<div className='px-1'>
													<img
														className='donate-plan-img'
														src='Donate/donate-plan-pro.png'
														alt='donate-pro'
													/>
												</div>
												<div className='text-center mt-4'>
													<h3 className='mb-4 fw-700 fs-8'>抖內 Pro</h3>
													<span>適合族群：</span>
													<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
														#展覽狂粉
													</span>
												</div>
											</li>
										</ul>
									</li>
									<li
										className='tab-pane fade'
										id='tab-gift'
										role='tabpanel'
										aria-labelledby='tab-gift'
										tabIndex='0'>
										<ul className='row'>
											<li className='col-6'>
												<div className='px-4'>
													<img
														className='donate-plan-img'
														src='Donate/donate-coupon.png'
														alt='donate-coupon'
													/>
													<div className='text-center mt-4 fs-6'>
														<strong>Coupon 優惠逛展享不完</strong>
													</div>
												</div>
											</li>
											<li className='col-6'>
												<div className='px-4'>
													<img
														className='donate-plan-img'
														src='Donate/donate-Ecoin.png'
														alt='donate-Ecoin'
													/>
													<div className='text-center mt-4 fs-6'>
														<strong>專屬 E 幣兌獎樂翻天</strong>
													</div>
												</div>
											</li>
										</ul>
									</li>
									<li
										className='tab-pane fade'
										id='tab-pay'
										role='tabpanel'
										aria-labelledby='tab-pay'
										tabIndex='0'>
										<ul className='row'>
											<li className='col-4'>
												<div className='px-1'>
													<img
														className='donate-plan-img'
														src='Donate/donate-credit-card.png'
														alt='credit-card'
													/>
												</div>
											</li>
											<li className='col-4'>
												<div className='px-1'>
													<img
														className='donate-plan-img'
														src='Donate/donate-line-pay.jpg'
														alt='line-pay'
													/>
												</div>
											</li>
											<li className='col-4'>
												<div className='px-1'>
													<img
														className='donate-plan-img w-100'
														src='Donate/donate-google-pay.jpg'
														alt='line-pay'
													/>
												</div>
											</li>
											<div className='text-center mt-14'>
												<h3 className='fw-700 text-gray-600'>
													支援多元支付，線上付款最安心！
												</h3>
											</div>
										</ul>
									</li>
								</ul>
							</div>
						</li>
					</ul>
					{/* <!-- 抖內 Modal --> */}
					<div className='text-center mt-15'>
						<button
							onClick={openDonateModal}
							type='button'
							data-bs-toggle='modal'
							className='btn btn-gray-700 donate-btn'>
							立即抖內
						</button>
					</div>
					<div
						ref={donateModal}
						className='modal fade'
						data-bs-backdrop='static'
						data-bs-keyboard='false'
						tabIndex='-1'
						aria-labelledby='staticBackdropLabel'
						aria-hidden='true'>
						<div className='modal-dialog'>
							<div className='modal-content bg-secondary-50'>
								<div className='modal-header border-0'>
									<h1
										className='modal-title fs-7 fw-700'
										id='staticBackdropLabel'>
										抖內方案
									</h1>
									<button
										onClick={closeDonateModal}
										type='button'
										className='btn-close'
										data-bs-dismiss='modal'
										aria-label='Close'></button>
								</div>
								<div className='modal-body'>
									<ul className='row'>
										<li className='col-4'>
											<div className='card h-100'>
												<img
													src='Donate/donate-plan-mini.png'
													className='card-img-top'
													alt='donate-plan-mini'
												/>
												<div className='card-body px-12'>
													<h2 className='fs-8 text-center'>抖內 Mini</h2>
													<ul className='card-text'>
														<li className='mt-4'>
															<span>適合族群：</span>
															<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
																#學生
															</span>
														</li>
														<li className='mt-4'>
															<p>開局禮包：展覽折價券*2</p>
														</li>
														<li className='mt-4'>
															每月抖內價格:{" "}
															<strong className='fs-5'>30元/月</strong>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className='col-4'>
											<div className='card h-100'>
												<img
													src='Donate/donate-plan-plus.png'
													className='card-img-top'
													alt='donate-plan-plus'
												/>
												<div className='card-body px-12'>
													<h2 className='fs-8 text-center'>抖內 Plus</h2>
													<ul className='card-text'>
														<li className='mt-4'>
															<span>適合族群：</span>
															<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
																#上班族
															</span>
														</li>
														<li className='mt-4'>
															<p>開局禮包：展覽折價券*4 + 加贈 1 顆 E 幣</p>
														</li>
														<li className='mt-4'>
															每月抖內價格:{" "}
															<strong className='fs-5'>75元/月</strong>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className='col-4'>
											<div className='card h-100'>
												<img
													src='Donate/donate-plan-pro.png'
													className='card-img-top'
													alt='donate-plan-pro'
												/>
												<div className='card-body px-12'>
													<h2 className='fs-8 text-center'>抖內 Pro</h2>
													<ul className='card-text'>
														<li className='mt-4'>
															<span>適合族群：</span>
															<span className='badge rounded-pill px-2 py-2 bg-gray-000 text-gray-700 fs-875 border-gray-700'>
																#展覽狂粉
															</span>
														</li>
														<li className='mt-4'>
															<p>開局禮包：展覽折價券*6 + 加贈 2 顆 E 幣</p>
														</li>
														<li className='mt-4'>
															每月抖內價格:{" "}
															<strong className='fs-5'>150元/月</strong>
														</li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className='modal-footer border-0 justify-content-center'>
									<button
										type='button'
										className='btn btn-primary btn-gray-700 donate-btn'>
										立即抖內
									</button>
								</div>
							</div>
						</div>
					</div>
					<div>
						<picture>
							<source
								media='(min-width: 768px)'
								srcSet='deco/vector-lg-1.png'
							/>
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
						<div>
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
					</div>
				</div>
			</section>

			<section className='overflow-hidden'>
				<div className='container-fluid px-0 position-relative z-2'>
					<picture>
						<source
							media='(min-width: 993px)'
							srcSet='Donate/donate-explore.png'
						/>
						<img
							className='donate-explore my-n1'
							src='Donate/donate-explore-sm.png'
							alt='donate-banner'
						/>
					</picture>
					<div className='position-absolute start-50 top-50 translate-middle text-center'>
						<h2 className='fw-700 text-gray-000 mb-6 text-nowrap'>
							探索藝展任意門
						</h2>
						<p className='text-gray-100 fw-700 mb-6'>
							輕鬆找到並參與更多展覽，開啟您的藝術與文化之旅。
						</p>
						<a href='#' className='btn btn-gray-700 donate-btn'>
							<i className='bi bi-person-plus'></i> 成為會員
						</a>
					</div>
				</div>
			</section>

			<ContactFooter />
		</>
	);
}
