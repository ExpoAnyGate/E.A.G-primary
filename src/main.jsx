import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</StrictMode>
);
