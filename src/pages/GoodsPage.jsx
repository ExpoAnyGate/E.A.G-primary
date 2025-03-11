import FloatingButton from "../components/WalletKun";
import GoodList from "../layouts/GoodsList";
// import GoodsCard from "./GoodsCard";

export default function GoodsPage() {
  return (
    <>
      {/* goods-banner-section */}
      <section className="goods-banner bg-secondary-50 py-sm-80 py-lg-120 position-relative overflow-hidden mt-bp-104-0">
        <img
          className="circle-position-left d-none d-sm-block"
          src="deco/round-lg-2.png"
          alt="round-lg-1"
        />
        <img
          className="circle-position-right d-none d-sm-block"
          src="deco/round-lg-1.png"
          alt="round-lg-2"
        />
        <div className="goods-banner-image-wrapper position-relative">
          <div className="container-fluid d-flex justify-content-center">
            <div className="capsule-container">
              <div className="capsule-box d-flex mx-md-3 mx-md-6 gap-md-3">
                <div className="capsule bg-official-good-5 mt-auto mb-17"></div>
                <div className="capsule bg-official-good-4 mt-auto"></div>
                <div className="capsule bg-official-good-2 mt-auto mb-6 ms-5"></div>
              </div>
            </div>

            <picture>
              <source
                srcSet="Goods/goods-gashapon-lg.png"
                media="(min-width: 992px)"
              />
              <source
                srcSet="Goods/goods-gashapon-md.png"
                media="(min-width: 768px)"
              />
              <img
                className="gashapon-image"
                src="Goods/goods-gashapon-sm.png"
                alt="gashapon image"
              />
            </picture>

            <div className="capsule-container">
              <div className="capsule-box d-flex mx-md-3 mx-md-6 gap-md-3">
                <div className="capsule bg-official-good-3 mt-auto mb-15 mb-sm-20"></div>
                <div className="capsule bg-official-good-1 mt-auto mb-6"></div>
                <div className="capsule bg-official-good-6 mt-auto mb-12 ms-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* goods-list-section */}
      <section className="goods bg-secondary-50 py-sm-80 py-lg-120">
        <div className="container">
          {/* goods-title */}
          <div className="d-flex flex-column align-items-center mb-15">
            <h2 className="goods-title fs-8 fs-lg-15 fw-700 text-primary-800 mb-6">
              周邊商品
            </h2>
            <h2 className="goods-title font-bagel-fat-one fs-8 fs-lg-12 text-primary-800">
              OFFICIAL GOODS
            </h2>
          </div>
          {/* goods-list */}
          <GoodList />

          {/* 我要轉扭蛋-btn */}
          <div className="text-center mt-17 mt-xl-20">
            <a
              href="#"
              className="btn btn-gray-700 text-gray-000 py-2 px-4"
              data-bs-toggle="modal"
              data-bs-target="#gachaModal-1"
            >
              我要轉扭蛋
            </a>
          </div>
          {/* gacha-Modal */}
          {/* gacha-Modal-1 */}
          <div
            className="gacha-modal modal fade"
            id="gachaModal-1"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-secondary-50 px-6 px-md-15 pt-6 pb-10">
                <div className="modal-header p-0 border-bottom-0">
                  <h5 className="modal-title fs-5 fw-700">轉扭蛋</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body text-center">
                  <img
                    src="Goods/goods-gashapon-sm.png"
                    alt="扭蛋機"
                  />
                  <div className="gacha-container text-center">
                    <span className="fw-bold">我想轉</span>
                    {/* 下拉選單 */}
                    <select id="gachaCount" className="gacha-select">
                      <option value={1}>1</option>
                      <option value={2} selected="">
                        2
                      </option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                    <span className="fw-bold">次扭蛋</span>
                    <p>
                      你總共有{" "}
                      <span id="totalEcoins" className="text-primary fw-bold">
                        100
                      </span>{" "}
                      個E幣，
                    </p>
                    <p>
                      此次會花掉{" "}
                      <span id="costEcoins" className="text-danger fw-bold">
                        60
                      </span>{" "}
                      個E幣
                    </p>
                  </div>
                  <button className="btn btn-dark" id="startGacha">
                    抽起來
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* support - robot */}
      <section className="support-robot-section bg-secondary-50 py-17 py-lg-20">
        <div className="message-container container-lg d-flex flex-column justify-content-center align-items-center">
          <div className="message-box bg-gray-000 col-12 p-8 position-relative">
            <h3 className="support-title fs-6 fs-md-8 fw-700 mb-8">
              為鼓勵支持藝術家和平台運營
            </h3>

            {/* support - list */}
            <ol className="support-list ms-8">
              <li className="mb-8">
                <p className="support-sub-title text-primary-800 fw-bold fs-4 fs-md-6 mb-2">乾爹回饋</p>
                <p className="support-detail">
                  感恩支持藝術家創作與平台發展，抖內plus 會員每月可獲得<strong class="text-primary-800">1個E幣</strong>；
                  抖內pro max 每月可獲得<strong class="text-primary-800">2個E幣</strong>。
                </p>
              </li>
              <li className="mb-8">
                <p className="support-sub-title text-primary-800 fw-bold fs-4 fs-md-6 mb-2">展覽互動</p>
                <p className="support-detail">
                  參加特定藝術展覽活動，可獲取<strong class="text-primary-800">1至3個E幣</strong>的參與獎勵，讓您的支持成為藝術的一部分。
                </p>
              </li>
              <li className="mb-8">
                <p className="support-sub-title text-primary-800 fw-bold fs-4 fs-md-6 mb-2">節日活動</p>
                <p className="support-detail">
                  特殊節日將舉辦限時活動，完成挑戰有機會獲得<strong class="text-primary-800">1至3個E幣</strong>的獎勵。
                </p>
              </li>
              <li className="mb-8">
                <p className="support-sub-title text-primary-800 fw-bold fs-4 fs-md-6 mb-2">心得分享</p>
                <p className="support-detail">
                  發布與展覽相關的文章或評論，經審核通過後，可根據內容深度與質量獲得<strong class="text-primary-800">1至3個E幣</strong>。
                </p>
              </li>
              <li>
                <p className="support-sub-title text-primary-800 fw-bold fs-4 fs-md-6 ">許願池驚喜</p>
                <p className="support-detail">
                  參與平台「許願池」活動，有機會<strong class="text-primary-800">隨機獲得 E幣</strong>，探索藝術的無限可能。
                </p>
              </li>
            </ol>
          </div>

          <div className="support-robot-img-wrapper container-lg d-flex justify-content-end">
            <picture>
              {/* 平板版 */}
              <source srcSet="Goods/goods-robot-lg.svg" media="(min-width: 768px)" />
              {/* 手機版 (畫面以小尺寸為主) */}
              <img
                src="Goods/goods-robot-sm.svg"
                alt="support-robot-img"
                className="support-robot-img d-block"
              />
            </picture>
          </div>
        </div>
      </section>

      <FloatingButton />
    </>
  );
}
