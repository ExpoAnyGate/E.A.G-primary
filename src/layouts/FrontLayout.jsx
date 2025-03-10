import { NavLink, Outlet } from "react-router-dom";
import LoginStatus from "../components/LoginStatus";

const routes = [
	{ path: "/", name: "首頁" },
	{ path: "/search", name: "搜尋" },
	{ path: "/wish", name: "展覽選擇泉" },
	{ path: "/demo", name: "展覽資訊" },
	{ path: "/goods", name: "周邊商品" },
	{ path: "/spotlight", name: "藝展聚光燈" },
	{ path: "/donate", name: "乾爹抖內" },
];

const NavbarItem = ["/", "/goods", "/spotlight", "/wish"];
export default function FrontLayout() {
	return (
		<>
			<nav className='bg-white position-breakpoint'>
				<div className='container py-6 navbar-layout'>
					<ul className='d-flex justify-content-between align-items-center'>
						{routes
							.filter((route) => NavbarItem.includes(route.path))
							.map((route) => {
								return (
									<li key={route.path}>
										<NavLink to={route.path}>
											{route.path === "/" ? (
												<img src='common/logo-Light.png' alt='logo' />
											) : (
												route.name
											)}
										</NavLink>
									</li>
								);
							})}

						<LoginStatus />
					</ul>
				</div>
			</nav>

			<Outlet></Outlet>
		</>
	);
}
