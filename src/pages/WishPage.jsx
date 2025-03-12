import { useState, useEffect } from "react";
import WishMarquee from "../components/WishMarquee";
import FloatingButton from "../components/WalletKun";
import WishPkCard from "../layouts/WishPkCard";
import ExpoDetailModal from "../layouts/ExpoDetailModal";
import WishBoxModal from "../layouts/WishBoxModal";
import axios from "axios";
import Swal from "sweetalert2";

export default function WishPage() {
  const targetDate = new Date("2025-03-18T00:00:00").getTime(); //目標時間
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); //更多介紹Modal
  const [selectedExpo, setSelectedExpo] = useState(null);
  const [expoDataList, setExpoDataList] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URL_LOCAL = "http://localhost:3000";

  const [userInfo, setUserInfo] = useState({
    userId: 0,
    userName: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  //const [message, setMessage] = useState("");

  const handleCardClick = (expoData) => {
    setSelectedExpo(expoData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getExpoDataList = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/exhibition_pk`, {
        headers: { "api-key": `${API_KEY}` },
      });
      setExpoDataList(response.data);
    } catch (error) {
      console.error("Error  setExpoDataList:", error);
    }
  };

  const [regionList, setRegionList] = useState([]);

  const getRegionList = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/regions`, {
        headers: { "api-key": `${API_KEY}` },
      });
      setRegionList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getExpoDataList();
      await getRegionList();
      setIsDataReady(true); // 確保資料拿到後才設定為 true
      //會員資訊暫時先寫死

      setUserInfo({
        userId: 4,
        userName: "Nicole",
        email: "nicole@gmail.com",
      });
    };

    fetchData();
  }, []);

  //許願箱Modal
  const [isWishBoxModalOpen, setIsWishBoxModalOpen] = useState(false);
  const handleOpenWishBoxModal = () => {
    setIsWishBoxModalOpen(true);
  };

  const handleCloseWishBoxModal = () => {
    setIsWishBoxModalOpen(false);
  };

  const handleSubmitWish = (wishData) => {
    console.log("收到許願資料:", wishData);
     Swal.fire({
       title: "許願成功！",
       text: "您的許願已發送 email@expoanygate.com",
       icon: "success",
       confirmButtonText: "確定",
     });
  };

  //倒數計時
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeGap = targetDate - now;

    if (timeGap <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }
    setDays(Math.floor(timeGap / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((timeGap % (1000 * 60)) / 1000));
  };

  useEffect(() => {
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => {
      clearInterval(countdownInterval);
    }; // 清除計時器
  }, []);

  //跑馬燈文字
  const wishes = [
    { icon: "candle", text: "阿鼠：許願一場沉浸式香氛展@桃園~~" },
    { icon: "favorite", text: "1457：許願一場農漁地景藝術展@彰化~~" },
    { icon: "family_star", text: "禮央：許願Day6見面會@台中~~" },
    { icon: "favorite", text: "Harry：許願咖波主題展@高雄~~" },
    { icon: "candle", text: "阿鼠：許願獵人原畫展@台北！" },
    { icon: "family_star", text: "1457：吉卜力展覽快來@新竹~~" },
  ];

  //投票
  const handleVote = async (exhibitionPkId) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/api/pk_vote`,
        {
          userId: userInfo.userId,
          exhibition_pkId: exhibitionPkId,
        },
        { headers: { "api-key": `${API_KEY}` }}
      );
       Swal.fire({
         title: "投票成功！",
         icon: "success",
         confirmButtonText: "確定",
       });
    } catch (error) {
      Swal.fire({
        title: "投票失敗",
        text: error.response?.data?.message,
        icon: "error",
        confirmButtonText: "確定",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <!-- 頂圖 --> */}
      <section className="topBanner container-fluid p-0 m-0 position-relative">
        <div className="w-100" style={{ height: "900px" }}>
          <img
            src="Wish/wish-lg-1.jpeg"
            className="w-100 h-100 object-fit-cover"
            alt="..."
          />
          {/* <!-- 電腦版（單行）d-md-block : ≥768px（平板以上）時顯示 --> */}
          <h1 className="fs-8 fw-700 position-absolute top-50 start-50 translate-middle text-white text-nowrap d-none d-md-block">
            還在祈禱夢寐以求的展覽嗎？沒關係，湖中女神幫您實現。
          </h1>

          {/* <!-- 平板 & 手機版（兩行） --> */}
          <h1 className="fs-8 fw-700 position-absolute text-center top-50 start-50 translate-middle text-white text-nowrap d-block d-md-none text-center">
            還在祈禱夢寐以求的展覽嗎？
            <br />
            沒關係，湖中女神幫您實現。
          </h1>
        </div>
      </section>
      {/* <!-- 金銀對決 --> */}
      <section className="vsBlock">
        <div className="vsBg"></div>
        {/* <!-- 投票倒數 --> */}
        <div className="vsBlock-top">
          <div className="title d-flex justify-content-center mb-6">
            <p className="fs-8 fw-700 mt-17 vsBlock-text">
              <span>到底是舉辦</span>
              <span className="sliver">銀光</span>
              <span className="">展覽比較誘人？ </span>
              <br className="d-md-none" />
              <span>還是舉辦</span>
              <span className="gold">金光</span>
              <span className="">的展覽令人嚮往？</span>
            </p>
          </div>
          <div className="time d-flex justify-content-center mb-15">
            <div id="timeDisplay" className="countdown">
              <span id="" className="fw-400">
                投票倒數：
              </span>
              <span id="days" className="fw-400">
                {days}
              </span>
              <span className="fw-400">天</span>
              <span id="hours" className="fw-400">
                {hours}
              </span>
              <span className="fw-400">小時</span>
              <span id="minutes" className="fw-400">
                {minutes}
              </span>
              <span className="fw-400">分</span>
              <span id="seconds" className="fw-400">
                {seconds}
              </span>
              <span className="fw-400">秒</span>
            </div>
          </div>
        </div>
        {/* <!-- 對決卡片 --> */}
        <div className="vsCard">
          <div className="container">
            <div className="row gx-12 d-flex justify-content-center">
              {/* <!-- 左卡片 --> */}
              {isDataReady ? (
                <WishPkCard
                  expoData={expoDataList[0] || {}}
                  onButtonClick={() => handleCardClick(expoDataList[0])}
                  regionList={regionList}
                  handleVote={handleVote}
                />
              ) : (
                <></>
              )}

              {/* <!-- 分隔線 --> */}
              <div className="col-auto d-flex align-items-center d-none d-lg-block">
                <div className="separator mb-5"></div>
              </div>
              {/* <!-- 右卡片 --> */}
              {isDataReady ? (
                <WishPkCard
                  expoData={expoDataList[1] || {}}
                  onButtonClick={() => handleCardClick(expoDataList[1])}
                  regionList={regionList}
                  handleVote={handleVote}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          {/* <!-- 更多介紹 Modal--> */}
          <ExpoDetailModal
            isOpen={isModalOpen}
            expoData={selectedExpo}
            onClose={handleCloseModal}
            handleVote={handleVote}
            regionList={regionList}
          />
        </div>

        {/* <!-- 進度條 --> */}
        <div className="m-17">
          <div className="row">
            <div className="col-10 mx-auto">
              <div
                className="progress"
                style={{ height: "30px", position: "relative" }}
              >
                <div
                  className="progress-bar bg-gradient-gray"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  125
                </div>
                <div className="vs-text-container">
                  <span className="vs-text fs-3">VS</span>
                  <div className="vs-circle"></div>
                </div>
                <div
                  className="progress-bar bg-gradient-gold"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  83
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 即刻投票 --> */}
        <div className="m-5">
          <div className="row">
            <div className="mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="mb-3">
                  <span className="fs-6 fw-700">即刻投票，</span>
                  <br className="d-md-none" />
                  <span className="fs-6 fw-700">
                    下個舉辦的展覽就在你身邊！
                  </span>
                </div>
                <button
                  className="btn btn-secondary-800 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#JoinMember"
                >
                  加入會員
                </button>
                {/* 加入會員Modal */}
                <div
                  className="modal fade fade-motion"
                  id="JoinMember"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0">
                      <div className="modal-header bg-primary-700 border-0">
                        <h1
                          className="modal-title fs-5 text-gray-000"
                          id="exampleModalLabel"
                        >
                          登入／註冊
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body bg-primary-100 py-5">
                        <ul className="row">
                          <li className="col-4">
                            <span className="h-100 d-flex flex-column justify-content-center">
                              <img src="common/logo-Dark.png" alt="logo-Dark" />
                            </span>
                          </li>
                          <li className="col-8">
                            <form>
                              <div className="mb-3">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    id="Account"
                                    className="form-control"
                                    placeholder="帳號"
                                  />
                                  <label
                                    htmlFor="Account"
                                    className="fs-4 text-gray-500"
                                  >
                                    帳號
                                  </label>
                                </div>
                              </div>
                              <div className="mb-3">
                                <div className="form-floating">
                                  <input
                                    type="text"
                                    id="Password"
                                    className="form-control"
                                    placeholder="密碼"
                                  />
                                  <label
                                    htmlFor="Password"
                                    className="fs-4 text-gray-500"
                                  >
                                    密碼
                                  </label>
                                </div>
                              </div>
                              <div className="mb-3">
                                <div className="d-flex">
                                  <div className="form-floating w-100">
                                    <input
                                      type="text"
                                      id="captcha"
                                      className="form-control"
                                      placeholder="圖形驗證碼"
                                    />
                                    <label
                                      htmlFor="captcha"
                                      className="fs-4 text-gray-500"
                                    >
                                      圖形驗證碼
                                    </label>
                                  </div>
                                  <div className="ms-1 d-none d-md-block">
                                    <span className="bg-gray-200 h-100 d-flex align-items-center">
                                      <img
                                        src="common/captcha.png"
                                        alt="captcha"
                                        className="w-90"
                                      />
                                    </span>
                                  </div>
                                  <button className="btn btn-gray-000 border-gray-200 ms-1 d-none d-md-block">
                                    <span className="material-symbols-outlined p-0">
                                      refresh
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="d-md-none mb-3">
                                <div className="d-flex">
                                  <div className="ms-1">
                                    <span className="bg-gray-200 h-100 d-flex align-items-center">
                                      <img
                                        src="common/captcha.png"
                                        alt="captcha"
                                        className="w-100"
                                      />
                                    </span>
                                  </div>
                                  <button className="btn btn-gray-000 border-gray-200 ms-1">
                                    <span className="material-symbols-outlined p-0 align-middle">
                                      refresh
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                            <div className="d-flex justify-content-center mb-5">
                              <button
                                type="summit"
                                className="btn btn-gray-400 text-gray-000 w-50 py-3 d-md-none"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                取消
                              </button>
                              <button
                                type="summit"
                                className="btn btn-primary-600 text-gray-000 w-50 py-3 ms-3"
                                data-bs-dismiss="modal"
                                id="login-btn"
                                onClick="changeLogin()"
                                aria-label="Close"
                              >
                                登入
                              </button>
                            </div>
                            <div className="d-flex flex-wrap justify-content-between">
                              <a
                                href="#"
                                className="fs-4 text-gray-500 px-3 py-2 d-block"
                              >
                                忘記帳號/密碼
                              </a>
                              <a
                                href="#"
                                className="fs-4 text-primary-800 fw-500 px-3 py-2 d-block"
                              >
                                立刻註冊
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="modal-footer justify-content-start border-0 pb-10 position-relative overflow-hidden">
                        <img
                          src="deco/linegp-lg-1.png"
                          alt="linegp-lg-1"
                          className="position-absolute z-1 start-0 top-0"
                        />
                        <ul className="row gy-5 position-relative z-2">
                          <li className="col-12">
                            <h3 className="fs-5 text-gray-500 mb-2">
                              快速成為探索者
                            </h3>
                            <h3 className="fs-5 text-gray-500">
                              蒐藏個人專屬的展覽！
                            </h3>
                          </li>
                          <li className="col-12">
                            <div className="text-center">
                              <button
                                className="btn btn-danger text-white fw-500 py-2 btn-google"
                                id="login-button"
                              >
                                <i className="bi bi-google"></i>
                                透過 google 帳號登入
                              </button>
                            </div>
                          </li>
                          <li className="col-12">
                            <div className="text-center">
                              <button className="btn btn-success text-white py-2 px-26 fw-500">
                                <i className="bi bi-line"></i>
                                透過 line 帳號登入
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 規則框 --> */}
        <div className="m-15">
          <div className="row d-flex justify-content-center">
            <div className="col-10 mx-auto">
              <div className="bg-white rounded-2 border border-gray-200">
                <div className="d-flex flex-column p-6">
                  <h3 className="fs-6 text-gray-600 fw-700 mb-4">投票規則：</h3>
                  <p className="mb-1 text-gray-500">
                    1. 活動期間，一個會員帳號限投一票
                  </p>
                  <p className="mb-4 text-gray-500">
                    2. 送出的投票不得修改，請謹慎選擇
                  </p>
                  <p className="text-muted text-gray-200 fs-3">
                    *平台保留隨時修正、暫停、終止或解釋活動之最終權利（包括但不限於更換活動、提前終止或延長活動時間之最終決定權等事項），並以本活動網站公告為準。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 電腦版 底部圓--> */}
        <img
          className="deco-position-lg-top-left deco-position-lg-top-left-transform d-none d-md-block"
          src="Wish/vs-deco-lg-01.png"
          alt="vs-deco-lg-1"
        />
        <img
          className="deco-position-lg-top-right deco-position-lg-top-right-transform d-none d-md-block"
          src="Wish/vs-deco-lg-02.png"
          alt="vs-deco-lg-2"
        />
      </section>
      {/* <!-- 展覽許願箱 --> */}
      <section className="voteBg  position-relative ">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <p
              className="fs-12 fw-700 position-absolute text-white"
              id="voteTitle"
            >
              展覽許願箱
            </p>
            <p className="fs-6 position-absolute text-white" id="subTitle">
              許下你想辦的展覽！
            </p>
            <button
              className="btn btn-dark position-absolute"
              id="wishButton"
              data-bs-toggle="modal"
              data-bs-target="#wishBoxModal"
              onClick={handleOpenWishBoxModal}
            >
              許願展覽
            </button>
          </div>

          {/* <!-- 許願 Modal--> */}
          <WishBoxModal
            isWishBoxModalOpen={isWishBoxModalOpen}
            handleCloseWishBoxModal={handleCloseWishBoxModal}
            userInfo={userInfo}
            handleSubmitWish={handleSubmitWish}
          />
        </div>

        <picture>
          {/* <!-- 767px 以下載入小圖 --> */}
          <source srcSet="Wish/wish-sm-1.png" media="(max-width: 767px)" />
          {/* <!-- 預設載入大圖 --> */}
          <img className="voteBg" src="Wish/wish-lg-2.png" alt="wish image" />
        </picture>
      </section>
      {/* 跑馬燈 */}
      <div>
        <div>
          <WishMarquee wishList={wishes} />
        </div>
      </div>
      <FloatingButton />
    </>
  );
}
