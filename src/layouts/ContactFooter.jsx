import { Link } from "react-router-dom";

const ContactFooter = () => {
	return (
		<section>
			{/* <!-- 手機版 --> */}
			<footer className='bg-gray-700 d-md-none'>
				<div className='container py-sm-64'>
					<div className='d-flex flex-column align-items-center'>
						<Link to={"/"}>
							<img src='common/logo-Light-V.png' alt='logo-Light-V' />
						</Link>
						<ul className='d-flex flex-column mt-14'>
							<li>
								<Link to={"/"} className='text-white py-2 px-4 mb-6'>
									認識我們
								</Link>
							</li>
							<li>
								<Link to={"/"} className='text-white py-2 px-4 mb-6'>
									常見問題
								</Link>
							</li>
							<li>
								<Link to={"/"} className='text-white py-2 px-4'>
									聯絡我們
								</Link>
							</li>
						</ul>
						<ul className='d-flex mt-14 w-60 justify-content-between align-items-center'>
							<li>
								<Link to={"/"}>
									<img src='icon/facebook-light.png' alt='Facebook' />
								</Link>
							</li>
							<li>
								<Link to={"/"}>
									<img src='icon/Instagram-light.png' alt='Instagram' />
								</Link>
							</li>
							<li>
								<Link to={"/"}>
									<img src='icon/youtube-light.png' alt='youtube' />
								</Link>
							</li>
							<li>
								<Link to={"/"}>
									<img src='icon/Line-light.png' alt='line' />
								</Link>
							</li>
						</ul>
						<p className='text-copyright'>
							Copyright © 2024 ExpoAnyGate. All rights reserved.
						</p>
					</div>
				</div>
			</footer>

			{/* <!-- 平板以上 --> */}
			<footer className='bg-gray-700 d-none d-md-block'>
				<div className='container py-sm-64'>
					<div className='d-flex align-items-center justify-content-between'>
						<Link to={"/"}>
							<img src='common/logo-Light-L.png' alt='logo-Light-L' />
						</Link>
						<ul className='d-flex'>
							<li>
								<Link to={"/"} className='text-white py-2 px-4'>
									認識我們
								</Link>
							</li>
							<li>
								<Link to={"/"} className='text-white py-2 px-4'>
									常見問題
								</Link>
							</li>
							<li>
								<Link to={"/"} className='text-white py-2 px-4'>
									聯絡我們
								</Link>
							</li>
						</ul>
					</div>

					<div className='d-flex justify-content-between align-items-center mt-8'>
						<ul className='d-flex w-bp-icon justify-content-between align-items-center'>
							<li>
								<Link to={"/"}>
									<img src='icon/facebook-light.png' alt='Facebook' />
								</Link>
							</li>
							<li>
								<Link to={"/"}>
									<img src='icon/Instagram-light.png' alt='Instagram' />
								</Link>
							</li>
							<li>
								<Link to={"/"}>
									<img src='icon/youtube-light.png' alt='youtube' />
								</Link>
							</li>
							<li>
								<Link to={"/"}>
									<img src='icon/Line-light.png' alt='line' />
								</Link>
							</li>
						</ul>
						<p className='text-copyright m-0'>
							Copyright © 2024 ExpoAnyGate. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
};
export default ContactFooter;
