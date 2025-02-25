import { NavLink, Outlet } from "react-router-dom";
import LoginStatus from "../components/LoginStatus";
import React, { useState, useEffect } from "react";


const routes = [
  { path: "/", name: "首頁" },
  { path: "/search", name: "搜尋" },
  { path: "/demo", name: "展覽" },
  { path: "/donate", name: "乾爹抖內" },
  { path: "/wish", name: "展覽選擇泉" },
  { path: "/goods", name: "周邊商品" },
  { path: "/spotlight", name: "展覽聚光燈" },
];

export default function Frontlayout({ }) {
    
  return (
    <>
      <nav class="bg-white position-breakpoint">
        <div className="container py-6 navbar-layout">
            <div class="d-flex justify-content-between align-items-center">
                <a href="index.html">
                    <img src="src/assets/images/Nav/logo-Light.png" alt="logo" />
                </a>

                <LoginStatus />

            </div>
        </div>
      </nav>
      
      <Outlet></Outlet>
    </>
  );
}
