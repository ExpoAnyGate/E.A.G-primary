import { NavLink, Outlet } from "react-router-dom";

const routes = [
  { path: "/", name: "首頁" },
  { path: "/search", name: "搜尋" },
  { path: "/demo", name: "展覽" },
  { path: "/donate", name: "乾爹抖內" },
  { path: "/wish", name: "展覽選擇泉" },
  { path: "/goods", name: "周邊商品" },
  { path: "/spotlight", name: "展覽聚光燈" },
];

export default function Frontlayout({ children }) {
  return (
    <>
      <nav
        class="bg-white position-breakpoint"
      >
        <div className="container">
          <ul className="navbar-nav flex-row gap-5 fs-5">
            {routes.map((route) => (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to={route.path}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      
      <Outlet></Outlet>
    </>
  );
}
