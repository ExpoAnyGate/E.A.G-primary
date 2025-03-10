import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { handleLogin, setAccount, setPassword, setCaptcha } = useAuth();
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const account = e.target.Account.value;
  //   const password = e.target.Password.value;
  //   const captcha = e.target.captcha.value;

  //   // 嘗試登入
  //   if (handleLogin(account, password, captcha)) {
  //       navigate("/", {
	// 		state: {
	// 			isLoggedIn: true,
	// 		},
	// 	});
  //   } else {
  //     alert("登入失敗，請檢查帳號、密碼或驗證碼");
  //   }
  // };

const handleSubmit = async (e) => {
    e.preventDefault();
    const account = e.target.Account.value;
    const password = e.target.Password.value;
    const captcha = e.target.captcha.value;
  
    const success = await handleLogin(account, password, captcha);
    if (success) {
      console.log("登入成功");
      // navigate("/");
      window.location.reload();
    } else {
      alert("登入失敗，請檢查帳號、密碼或驗證碼");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="form-floating">
          <input
            type="text"
            id="Account"
            className="form-control"
            placeholder="帳號"
            onChange={(e) => setAccount(e.target.value)}
          />
          <label htmlFor="Account" className="fs-4 text-gray-500">
            帳號
          </label>
        </div>
      </div>
      <div className="mb-3">
        <div className="form-floating">
          <input
            type="password"
            id="Password"
            className="form-control"
            placeholder="密碼"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="Password" className="fs-4 text-gray-500">
            密碼
          </label>
        </div>
      </div>
      <div className="mb-3">
        <div className="d-flex">
          <div className="form-floating">
            <input
              type="text"
              id="captcha"
              className="form-control"
              placeholder="圖形驗證碼"
              onChange={(e) => setCaptcha(e.target.value)}
            />
            <label htmlFor="captcha" className="fs-4 text-gray-500">
              圖形驗證碼
            </label>
          </div>
          <div className="ms-1 d-none d-md-block">
            <span className="bg-gray-200 h-100 d-flex align-items-center">
              <img src="common/captcha.png" alt="captcha" className="w-90" />
            </span>
          </div>
          <button className="btn btn-gray-000 border-gray-200 ms-1 d-none d-md-block">
            <span className="material-symbols-outlined p-0">refresh</span>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <button
          type="button"
          className="btn btn-gray-400 text-gray-000 w-50 py-3 d-md-none"
          aria-label="Close"
          data-bs-dismiss='modal'
        >
          取消
        </button>
        <button
          type="submit"
          className="btn btn-primary-600 text-gray-000 w-50 py-3 ms-3"
          aria-label="Close"
          id='login-btn'
          data-bs-dismiss='modal'
          aria-label='Close'
        >
          登入
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
