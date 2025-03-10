import { StrictMode } from "react";
import { AuthProvider } from "./hook/useAuth";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./hook/usePersistStore"; // 引入 store 和 persistor

import router from "./router"; // 假设你有定义好的 router 配置

import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</PersistGate>
		</Provider>
	</StrictMode>
);
