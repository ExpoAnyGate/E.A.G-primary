import ContactFooter from "../components/ContactFooter";
import DemoSearch from "../components/DemoSearch";

export default function SearchPage() {
  return (
    <>
      <DemoSearch />
      <section className="container mt-17 mb-17">
        <div className="row gx-6 h-100 mb-6">
          {/* <!-- 左 大圖區塊--> */}
          <div className="col-lg-8 col-sm-12 focus-card">
            <div className="d-flex flex-column h-100 search-card rounded-4">
              <div className="d-flex justify-content-between align-items-center rounded-top-4 border-custom py-4 px-6">
                <p className="mb-0">2024/8/15 - 2024/9/15</p>
                <div className="d-flex align-items-center">
                  <span className="material-symbols-outlined fs-6 px-0">
                    location_on
                  </span>
                  <p className="mb-0 nowrap">台北市</p>
                </div>
              </div>
              {/* <!-- 圖＋文 --> */}
              <div className=" border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
                <div className="card mx-auto py-0 no-border">
                  <div className="overflow-hidden rounded-4">
                    <img
                      src="Demo/demo-origin-6.png"
                      className="card-img-top rounded-4 img-enlarge object-fit-cover"
                      alt="..."
                    />
                  </div>
                  <div className="card-body pb-0">
                    <div className="card-title">
                      <div className="d-flex align-items-center">
                        <h3 className="fw-700 title-font-size">
                          光影交錯：攝影藝術展
                        </h3>
                        <span className="material-symbols-outlined title-font-size">
                          bookmark_add
                        </span>
                      </div>
                    </div>
                    <div className="card-tag mb-4">
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                        #攝影展
                      </span>
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                        #光影藝術
                      </span>
                    </div>
                    <div className="card-text d-none d-sm-block">
                      <p className="mb-4">
                        這場攝影展深入探索了光影的無限可能，展示了攝影師如何巧妙運用光線變化來塑造場景、情感與故事。從清晨的第一縷光芒，到黃昏時分的柔和色調，再到城市夜景中霓虹燈的閃爍，每一張照片都捕捉到了光與影交錯的瞬間之美。這些作品不僅展現了攝影師對光線的敏銳掌控，更凸顯了光影在情感表達中的重要作用，能夠在平凡的場景中創造出令人難以忘懷的氛圍。
                      </p>
                      <p>
                        透過這些影像，觀眾能夠體驗到光與影如何重新定義我們對周遭世界的感知，從而將看似日常的場景轉化為詩意的視覺體驗。每一張照片都仿佛是光影書寫的故事，讓人們在觀看的過程中沉浸其中，思考光影背後隱藏的細節與情感。展覽提供了一個全新視角，邀請觀眾放慢腳步，重新審視日常生活中的美好與神秘，在光影的舞動之間發現無限的創意與靈感。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- 右區塊--> */}
          <div className="col-lg-4 col-sm-12">
            <div className="h-100 row">
              {/* <!-- 右上 --> */}
              <div className="col">
                <div className="rightT mb-6 d-flex flex-column rounded-4 search-card">
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
                    <div className="card mx-auto py-0 no-border">
                      <div className="img-240 rounded-4">
                        <img
                          src="Demo/demo-origin-3.png"
                          className="card-img-top rounded-4 w-100 img-enlarge"
                          alt="..."
                        />
                      </div>
                      <div className="card-body pb-0">
                        <div className="card-title">
                          <div className="d-flex align-items-center">
                            <h3 className="fw-700 title-font-size">
                              現代設計的未來：數位藝術展
                            </h3>
                            <span className="material-symbols-outlined title-font-size">
                              bookmark_add
                            </span>
                          </div>
                        </div>
                        <div className="card-tag">
                          <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                            #攝影展
                          </span>
                          <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                            #光影藝術
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- 右下 --> */}
              <div className="col">
                <div className="rightB d-flex flex-column search-card rounded-4 h-100">
                  <div className="d-flex justify-content-between align-items-center rounded-top-4 border-custom py-4 px-6">
                    <p className="mb-0">2024/8/15 - 2024/9/15</p>
                    <div className="d-flex align-items-center">
                      <span className="material-symbols-outlined fs-6 px-0">
                        location_on
                      </span>
                      <p className="mb-0 nowrap">台北市</p>
                    </div>
                  </div>
                  <div className="border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
                    <div className="card mx-auto py-0 no-border">
                      <div className="img-240 rounded-4">
                        <img
                          src="Demo/demo-origin-7.png"
                          className="card-img-top rounded-4 img-enlarge"
                          alt="..."
                        />
                      </div>
                      <div className="card-body pb-0">
                        <div className="card-title">
                          <div className="d-flex align-items-center">
                            <h3 className="fw-700 title-font-size">
                              光影交錯：攝影藝術展
                            </h3>
                            <span className="material-symbols-outlined title-font-size">
                              bookmark_add
                            </span>
                          </div>
                        </div>
                        <div className="card-tag">
                          <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                            #攝影展
                          </span>
                          <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                            #光影藝術
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- card --> */}
        <div className="row h-100">
          <div className="col-lg-4">
            <div className=" mb-6 d-flex flex-column rounded-4 search-card">
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
                      src="Demo/demo-origin-12.png"
                      className="card-img-top rounded-4 w-100 img-enlarge"
                      alt="..."
                    />
                  </div>
                  <div className="card-body pb-0">
                    <div className="card-title">
                      <div className="d-flex align-items-center">
                        <h3 className="fw-700 title-font-size">記憶的印記</h3>
                        <span className="material-symbols-outlined title-font-size">
                          bookmark_add
                        </span>
                      </div>
                    </div>
                    <div className="card-tag">
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                        #攝影展
                      </span>
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                        #光影藝術
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" mb-6 d-flex flex-column rounded-4 search-card">
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
                      src="Demo/demo-origin-1.png"
                      className="card-img-top rounded-4 w-100 img-enlarge"
                      alt="..."
                    />
                  </div>
                  <div className="card-body pb-0">
                    <div className="card-title">
                      <div className="d-flex align-items-center">
                        <h3 className="fw-700 title-font-size">
                          聲音與視覺的對話
                        </h3>
                        <span className="material-symbols-outlined title-font-size">
                          bookmark_add
                        </span>
                      </div>
                    </div>
                    <div className="card-tag">
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                        #攝影展
                      </span>
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                        #光影藝術
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" mb-6 d-flex flex-column rounded-4 search-card">
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
                      src="Demo/demo-origin-10.png"
                      className="card-img-top rounded-4 w-100 img-enlarge"
                      alt="..."
                    />
                  </div>
                  <div className="card-body pb-0">
                    <div className="card-title">
                      <div className="d-flex align-items-center">
                        <h3 className="fw-700 title-font-size">
                          藝術中的女性力量
                        </h3>
                        <span className="material-symbols-outlined title-font-size">
                          bookmark_add
                        </span>
                      </div>
                    </div>
                    <div className="card-tag">
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1">
                        #攝影展
                      </span>
                      <span className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ms-4">
                        #光影藝術
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 分頁 --> */}
      <div className="container">
        <div className="mb-17">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center ">
              <li className="page-item preBtn">
                <a
                  className="page-link mobile-pre d-flex align-items-center"
                  href="#"
                  aria-label="Previous"
                >
                  <span className="material-symbols-outlined fs-12">
                    keyboard_arrow_left
                  </span>
                </a>
              </li>
              <li className="page-item preBtn">
                <a
                  className="page-link desktop-pre"
                  href="#"
                  aria-label="Previous"
                >
                  上一頁
                </a>
              </li>

              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item nextBtn">
                <a
                  className="page-link desktop-next"
                  href="#"
                  aria-label="Next"
                >
                  下一頁
                </a>
              </li>
              <li className="page-item nextBtn">
                <a
                  className="page-link mobile-next d-flex align-items-center"
                  href="#"
                  aria-label="Next"
                >
                  <span className="material-symbols-outlined fs-12">
                    keyboard_arrow_right
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* footer    */}
      <ContactFooter />
    </>
  );
}
