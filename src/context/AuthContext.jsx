import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		return sessionStorage.getItem("isLoggedIn") === "true";
	});

	const handleLogin = () => {
		setIsLoggedIn(true);
		sessionStorage.setItem("isLoggedIn", "true");
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		sessionStorage.setItem("isLoggedIn", "false");
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
