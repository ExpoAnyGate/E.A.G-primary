import { use, useEffect, useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginForm";


const LoginStatus = () => {
	const { isLoggedIn, handleLogin, handleLogout } = useAuth();
	const navigate = useNavigate();
	const handleUserLogin = () => {
		handleLogin();
		// 利用路由傳遞登入的訊號
		navigate("/", {
			state: {
				isLoggedIn: true,
			},
			
		});
	};

	// const handleUserLogout = () => {
	// 	handleLogout();
	// 	// 利用路由傳遞登出的訊號
	// 	navigate("/", {
	// 		state: {
	// 			isLoggedIn: false,
	// 		},
	// 	});
	// };
	const handleUserLogout = () => {
		handleLogout();
		navigate("/", { state: { isLoggedIn: false } });
		window.location.reload();  // 強制刷新頁面
	  };
	  

//   useEffect(() => {
// 		if (location.pathname === "/") {
// 			setIsOpen(false);
// 		}
// 	}, [location.pathname]);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			{isLoggedIn ? (
				<div className='dropdown'>
					<button
						className='btn btn-white border border-gray-400  rounded-3 login-btn py-2 px-4'
						type='button'
						onClick={() => setIsOpen(!isOpen)}>
						<span
							style={{ height: "1.5rem", width: "1.5rem" }}
							className='material-symbols-outlined p-0 align-middle user-icon'>
							person
						</span>
					</button>
					{isOpen && (
						<ul className='dropdown-menu' style={{ left: "-175px" }}>
							<li>
								<button
									className='dropdown-item d-flex align-items-center p-item'
									data-bs-toggle='collapse'
									data-bs-target='#collapseAccount'
									role='button'
									aria-expanded='false'
									aria-controls='collapseAccount'>
									<img
										src='icon/User-edit_outlined.png'
										alt='User-edit_outlined'
										className='me-4'
									/>
									<span>帳號管理</span>
									<img
										src='icon/Dropdown.png'
										className='ms-12'
										alt='Dropdown'
									/>
								</button>
								<ul className='collapse' id='collapseAccount'>
									<li>
										<a href='#' className='p-sub-item dropdown-item'>
											基本設定
										</a>
									</li>
									<li>
										<a href='#' className='p-sub-item dropdown-item'>
											密碼設定
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									className='dropdown-item p-item d-flex align-items-center'
									href='#'>
									<img
										src='icon/Thumb up_outlined.png'
										alt='Thumb up_outlined'
										className='me-4'
									/>
									<span>展覽推薦設定</span>
								</a>
							</li>
							<li>
								<a
									className='dropdown-item p-item d-flex align-items-center'
									href='#'>
									<img
										src='icon/Bookmark_add.png'
										alt='Bookmark_add'
										className='me-4'
									/>
									<span>收藏／評分</span>
								</a>
							</li>
							<li>
								<a
									className='dropdown-item p-item d-flex align-items-center'
									href='#'>
									<img
										src='icon/Calendar.png'
										alt='Calendar'
										className='me-4'
									/>
									<span>我的行事曆</span>
								</a>
							</li>
							<li>
								<button
									onClick={() => handleUserLogout()}
									className='dropdown-item p-item d-flex align-items-center'>
									<img src='icon/Login.png' alt='Login.png' className='me-4' />
									<span>會員登出</span>
								</button>
							</li>
							<li>
								<a
									className='dropdown-item p-item d-flex align-items-center'
									href='evaluate.html'>
									<img src='icon/User.png' className='me-4' alt='User' />
									<span>我是會員</span>
									<img
										src='icon/Settings_outlined.png'
										alt='Settings_outlined'
										className='ms-12'
									/>
								</a>
							</li>
						</ul>
					)}
				</div>
			) : (
				<div className='dropdown-login'>
					<button
						type='button'
						className='btn btn-white border border-gray-400 rounded-3 login-btn py-2 px-4 login-btn'
						data-bs-toggle='modal'
						data-bs-target='#memberLogin'>
						<span
							style={{ height: "1.5rem", width: "1.5rem" }}
							className='material-symbols-outlined p-0 align-middle user-icon me-1'>
							login
						</span>
						登入
					</button>

					<div
						className='modal fade fade-motion'
						id='memberLogin'
						tabIndex='-1'
						aria-labelledby='exampleModalLabel'
						aria-hidden='true'>
						<div className='modal-dialog modal-dialog-centered'>
							<div className='modal-content border-0'>
								<div className='modal-header bg-primary-700 border-0'>
									<h1
										className='modal-title fs-5 text-gray-000'
										id='exampleModalLabel'>
										登入／註冊
									</h1>
									<button
										type='button'
										className='btn-close d-none d-md-block'
										data-bs-dismiss='modal'
										aria-label='Close'></button>
								</div>
								<h2 className='fs-5 text-center text-gray-000 bg-primary-500 py-4'>
									ExpoAnyGate 藝展任意門
								</h2>
								<div className='modal-body bg-primary-100 py-5'>
									<ul className='row'>
										<li className='col-4'>
											<span className='h-100 d-flex flex-column justify-content-center'>
												<img src='common/logo-Dark.png' alt='logo-Dark' />
											</span>
										</li>
										<li className='col-8'>
											{/* <form>
												<div className='mb-3'>
													<div className='form-floating'>
														<input
															type='text'
															id='Account'
															className='form-control'
															placeholder='帳號'
														/>
														<label
															htmlFor='Account'
															className='fs-4 text-gray-500'>
															帳號
														</label>
													</div>
												</div>
												<div className='mb-3'>
													<div className='form-floating'>
														<input
															type='text'
															id='Password'
															className='form-control'
															placeholder='密碼'
														/>
														<label
															htmlFor='Password'
															className='fs-4 text-gray-500'>
															密碼
														</label>
													</div>
												</div>
												<div className='mb-3'>
													<div className='d-flex'>
														<div className='form-floating w-100'>
															<input
																type='text'
																id='captcha'
																className='form-control'
																placeholder='圖形驗證碼'
															/>
															<label
																htmlFor='captcha'
																className='fs-4 text-gray-500'>
																圖形驗證碼
															</label>
														</div>
														<div className='ms-1 d-none d-md-block'>
															<span className='bg-gray-200 h-100 d-flex align-items-center'>
																<img
																	src='common/captcha.png'
																	alt='captcha'
																	className='w-90'
																/>
															</span>
														</div>
														<button className='btn btn-gray-000 border-gray-200 ms-1 d-none d-md-block'>
															<span className='material-symbols-outlined p-0'>
																refresh
															</span>
														</button>
													</div>
												</div>
												<div className='d-md-none mb-3'>
													<div className='d-flex'>
														<div className='ms-1'>
															<span className='bg-gray-200 h-100 d-flex align-items-center'>
																<img
																	src='common/captcha.png'
																	alt='captcha'
																	className='w-100'
																/>
															</span>
														</div>
														<button className='btn btn-gray-000 border-gray-200 ms-1'>
															<span className='material-symbols-outlined p-0 align-middle'>
																refresh
															</span>
														</button>
													</div>
												</div>
											</form>
											<div className='d-flex justify-content-center mb-5'>
												<button
													type='summit'
													className='btn btn-gray-400 text-gray-000 w-50 py-3 d-md-none'
													data-bs-dismiss='modal'
													aria-label='Close'>
													取消
												</button>
												<button
													type='summit'
													className='btn btn-primary-600 text-gray-000 w-50 py-3 ms-3'
													data-bs-dismiss='modal'
													id='login-btn'
													onClick={() => handleUserLogin()}
													aria-label='Close'>
													登入
												</button>
											</div> */}
                      <LoginForm />
											<div className='d-flex flex-wrap justify-content-between'>
												<a
													href='#'
													className='fs-4 text-gray-500 px-3 py-2 d-block'>
													忘記帳號/密碼
												</a>
												<a
													href='#'
													className='fs-4 text-primary-800 fw-500 px-3 py-2 d-block'>
													立刻註冊
												</a>
											</div>
										</li>
									</ul>
								</div>
								<div className='modal-footer justify-content-start border-0 pb-10 position-relative overflow-hidden'>
									<img
										src='deco/linegp-lg-1.png'
										alt='linegp-lg-1'
										className='position-absolute z-1 start-0 top-0'
									/>
									<ul className='row gy-5 position-relative z-2'>
										<li className='col-12'>
											<h3 className='fs-5 text-gray-500 mb-2'>
												快速成為探索者
											</h3>
											<h3 className='fs-5 text-gray-500'>
												蒐藏個人專屬的展覽！
											</h3>
										</li>
										<li className='col-12'>
											<div className='text-center'>
												<button
													className='btn btn-danger text-white fw-500 py-2 btn-google'
													id='login-button'>
													<i className='bi bi-google'></i>
													透過 google 帳號登入
												</button>
											</div>
										</li>
										<li className='col-12'>
											<div className='text-center'>
												<button className='btn btn-success text-white py-2 px-26 fw-500'>
													<i className='bi bi-line'></i>
													透過 line 帳號登入
												</button>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LoginStatus;
