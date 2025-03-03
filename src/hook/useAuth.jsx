import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const loggedIn = localStorage.getItem("isLoggedIn") === "true";
		setIsLoggedIn(loggedIn);
	}, []);

	const handleLogin = () => {
		localStorage.setItem("isLoggedIn", "true");
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
