import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();

// const API_URL = "https://e-a-g-api.vercel.app/"; // 替換成實際 API 路徑
const API_URL = "http://localhost:3000/"; 
const API_KEY = "ZtQ5rmRFtoev3sK1eFTLnEaP"; // 替換成你的 API Key

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [account, setAccount] = useState(""); // 儲存帳號
	const [password, setPassword] = useState(""); // 儲存密碼
	const [captcha, setCaptcha] = useState(""); // 儲存驗證碼

	useEffect(() => {
		const loggedIn = localStorage.getItem("isLoggedIn") === "true";
		setIsLoggedIn(loggedIn);
	}, []);

	// const handleLogin = (inputAccount, inputPassword, inputCaptcha) => {
	// 	// 這裡進行驗證邏輯（帳號、密碼、驗證碼）
	// 	if (inputAccount === "admin" && inputPassword === "1234" && inputCaptcha === "02915") {
	// 		localStorage.setItem("isLoggedIn", "true");
	// 		setIsLoggedIn(true);
	// 		return true;
	// 	}
	// 	return false;
	// };
	// const handleLogin = async (inputAccount, inputPassword, inputCaptcha) => {
	// 	try {
	// 		const response = await axios.post(`${API_URL}api/login`, {
	// 			email: inputAccount,
	// 			password: inputPassword,
	// 			// captcha: inputCaptcha,
	// 		});
	// 		// const response = await axios.get(`${API_URL}api/exhibitions/${demo_id}?_expand=organizer`,{
	// 		// 	headers: { "api-key": `${API_KEY}` }, 
	// 		//   });

	// 		console.log(response.data);
	// 		console.log(response.status);
	// 		// 確保 API 回傳的格式正確
	// 		if (response.status === 200 && response.data) {
	// 			localStorage.setItem("isLoggedIn", "true");
	// 			// localStorage.setItem("authToken", response.data.token);
	// 			localStorage.setItem("userId", response.data.id); // 儲存使用者 ID
	// 			setIsLoggedIn(true);
				
	// 			return true;
	// 		}
	// 	} catch (error) {
	// 		console.error("登入失敗", error);
	// 	}
	// 	return false;
	// };

	// const handleLogin = async (inputAccount, inputPassword, inputCaptcha) => {
	// 	try {
	// 	  const response = await axios.post(`${API_URL}api/login`, {
	// 		email: inputAccount,
	// 		password: inputPassword,
	// 		// captcha: inputCaptcha,
	// 	  });
	
	// 	  if (response.status === 200 && response.data) {
	// 		localStorage.setItem("isLoggedIn", "true");
	// 		localStorage.setItem("userId", response.data.id);
	// 		setIsLoggedIn(true);
	// 		return true;
	// 	  }
	// 	} catch (error) {
	// 	  console.error("登入失敗", error);
	// 	}
	// 	return false;
	//   };

	const handleLogin = async (inputAccount, inputPassword, inputCaptcha) => {
		try {
		  const response = await axios.post(`${API_URL}api/login`, {
			email: inputAccount,
			password: inputPassword,
			captcha: inputCaptcha,
		  });
	  
		  if (response.status === 200 && response.data) {
			localStorage.setItem("isLoggedIn", "true");
			localStorage.setItem("userId", response.data.id);
			setIsLoggedIn(true);
			return true;
		  }
		} catch (error) {
		  console.error("登入失敗", error);
		}
		return false;
	  };

	const handleLogout = () => {
		localStorage.removeItem("isLoggedIn");
		localStorage.removeItem("userId");
		setIsLoggedIn(false);
		window.location.reload();
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, account, password, captcha, setAccount, setPassword, setCaptcha }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
