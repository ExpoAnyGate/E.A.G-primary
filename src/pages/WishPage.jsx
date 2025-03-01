import { useState, useEffect } from "react";
import WishMarquee from "../components/WishMarquee";
import FloatingButton from "../components/WalletKun";

export default function WishPage() {
  const targetDate = new Date("2025-03-18T00:00:00").getTime(); //目標時間
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const maxLength = 1000;

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
              <div className="col-lg-5">
                <div className=" mb-6 d-flex flex-column rounded-4 vs-search-card">
                  <div className="d-flex justify-content-between align-items-center rounded-top-4 border-custom py-4 px-6">
                    <p className="mb-0">2024/8/15 - 2024/9/15</p>
                    <div className="d-flex align-items-center">
                      <span className="material-symbols-outlined fs-6 px-0">
                        location_on
                      </span>
                      <p className="mb-0 nowrap">台北市</p>
                    </div>
                  </div>
                  <div className=" border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
                    <div className="card mx-auto py-0 no-border rounded-4">
                      <div className="img-240 rounded-4">
                        <img
                          src="Wish/wish-lg-4.jpeg"
                          className="card-img-top rounded-4 w-100 img-enlarge"
                          alt="..."
                        />
                      </div>
                      <div className="card-body pb-0">
                        <div className="card-title">
                          <div className="d-flex align-items-center">
                            <h3 className="fw-700 title-font-size">
                              後端工程師技術體驗展
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <div className="card-tag mb-6">
                            <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                              #程式
                            </span>
                            <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                              #技能
                            </span>
                          </div>
                          <button className="btn bg-white rounded-2 border border-gray-200">
                            更多介紹
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- 分隔線 --> */}
              <div className="col-auto d-flex align-items-center d-none d-lg-block">
                <div className="separator mb-5"></div>
              </div>
              {/* <!-- 右卡片 --> */}
              <div className="col-lg-5">
                <div className=" mb-6 d-flex flex-column rounded-4 vs-search-card">
                  <div className="d-flex justify-content-between align-items-center rounded-top-4 border-custom py-4 px-6">
                    <p className="mb-0">2024/8/15 - 2024/9/15</p>
                    <div className="d-flex align-items-center">
                      <span className="material-symbols-outlined fs-6 px-0">
                        location_on
                      </span>
                      <p className="mb-0 nowrap">台北市</p>
                    </div>
                  </div>
                  <div className=" border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
                    <div className="card mx-auto py-0 no-border rounded-4">
                      <div className="img-240 rounded-4">
                        <img
                          src="Wish/wish-lg-3.jpeg"
                          className="card-img-top rounded-4 w-100 img-enlarge"
                          alt="..."
                        />
                      </div>
                      <div className="card-body pb-0">
                        <div className="card-title">
                          <div className="d-flex align-items-center">
                            <h3 className="fw-700 title-font-size">
                              質感香氛體驗展
                            </h3>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <div className="card-tag mb-6">
                            <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                              #五感
                            </span>
                            <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                              #體驗
                            </span>
                          </div>

                          <button
                            className="btn bg-white rounded-2 border border-gray-200 w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#expoDetailModal"
                          >
                            更多介紹2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 更多介紹 Modal--> */}
          <div
            className="modal fade wish-backdrop-modal"
            id="expoDetailModal"
            tabIndex={-1}
            aria-labelledby="expoDetailModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-secondary-50">
                <div className="modal-header">
                  <h5 className="modal-title" id="expoDetailModalLabel">
                    質感香氛體驗
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/* <!-- style="border: 1px solid rgb(206, 51, 188);" --> */}
                <div className="moreDetail modal-body">
                  <div className="">
                    <div className="modal-div">
                      <img
                        className="rounded-3"
                        src="Wish/wish-lg-3.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="m-5">
                      <div className="mb-4 expoRow">
                        <div className="d-flex align-items-center title">
                          <span className="material-symbols-outlined fs-6 px-0">
                            location_on
                          </span>
                          <p className="">地點</p>
                        </div>
                        <p className="content">台北市</p>
                      </div>

                      <div className="mb-4 expoRow">
                        <div className="d-flex align-items-center title">
                          <span className="material-symbols-outlined fs-6 px-0">
                            calendar_month
                          </span>
                          <p className="">時間</p>
                        </div>
                        <p className="content">2024/8/15 - 2024/9/15</p>
                      </div>

                      <div className="mb-4 expoRow">
                        <div className="d-flex align-items-center title">
                          <span className="material-symbols-outlined fs-6 px-0">
                            kid_star
                          </span>
                          <p className="">展覽亮點</p>
                        </div>
                        <p className="content">
                          用香氣描繪生活的精緻,將質感化為觸手可及的感動。每一個氣味，都是一場專屬於嗅覺的冒險。
                        </p>
                      </div>

                      <div className="mb-4 expoRow">
                        <div className="d-flex align-items-center title">
                          <span className="material-symbols-outlined fs-6 px-0">
                            palette
                          </span>
                          <p className="">主題體驗</p>
                        </div>
                        <p className="content">
                          感官漫遊-穿越花香、木質與清新調性的香氣迷宮，發現最適合你的專屬味道。
                        </p>
                        <p className="content">
                          調香工坊-親手調製一款獨一無二的香水,記錄你專屬的氣味故事。
                        </p>
                        <p className="content">
                          香氛生活提案-探討香氛與空間美學的結合,啟發質感生活靈感。
                        </p>
                      </div>

                      <div className="mb-4 expoRow">
                        <div className="d-flex align-items-center title">
                          <span className="material-symbols-outlined fs-6 px-0">
                            saved_search
                          </span>
                          <p className="">展覽特色</p>
                        </div>
                        <p className="content">
                          來自全球的經典香氛品牌,攜手新銳調香師,共同打造氣味的饗宴。精緻展區設計,結合燈光、音樂與互動科技,提供沉浸式感官體驗。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary me-8"
                    data-bs-dismiss="modal"
                  >
                    關閉
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary-800 text-white"
                  >
                    投我
                  </button>
                </div>
              </div>
            </div>
          </div>
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
            >
              許願展覽
            </button>
          </div>

          {/* <!-- 許願 Modal--> */}
          <div
            className="modal fade"
            id="wishBoxModal"
            tabIndex={-1}
            aria-labelledby="wishBoxModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content bg-secondary-50">
                <div className="modal-header">
                  <h5 className="modal-title" id="wishBoxModalLabel">
                    許願展覽
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="recipient-name"
                        className="col-form-label"
                      >
                        帳號:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="message-text"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">
                        希望展覽在哪個縣市舉辦？
                      </label>
                      <select className="form-select" id="location-select">
                        <option value="">請選擇縣市</option>
                        <option value="Taipei">台北市</option>
                        <option value="NewTaipei">新北市</option>
                        <option value="Taichung">台中市</option>
                        <option value="Tainan">台南市</option>
                        <option value="Kaohsiung">高雄市</option>
                        <option value="Keelung">基隆市</option>
                        <option value="Hsinchu">新竹市</option>
                        <option value="Chiayi">嘉義市</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="describe-text" className="col-form-label">
                        請描述你希望主辦單位推出什麼展覽？
                      </label>
                      <textarea
                        className="form-control"
                        id="describe-text"
                        maxLength={maxLength}
                        style={{ height: "200px" }}
                        onChange={(e) => setCharCount(e.target.value.length)}
                      ></textarea>
                      <div
                        id="char-count"
                        className="fs-3 text-muted text-end mt-2"
                      >
                        <p className="fs-3 text-muted text-end mt-2">
                          {charCount}/{maxLength}
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer d-flex justify-content-center flex-column">
                  <button
                    type="button"
                    className="btn btn-secondary-800 text-white"
                    data-bs-dismiss="modal"
                  >
                    送出許願
                  </button>
                  <p className="fs-3 text-muted text-end mt-2">
                    按下 [送出許願] 會將內容送至 email@expoanygate.com
                  </p>
                </div>
              </div>
            </div>
          </div>
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
