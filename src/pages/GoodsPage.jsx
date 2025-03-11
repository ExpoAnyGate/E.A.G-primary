import FloatingButton from "../components/WalletKun";
import { useState, useEffect } from "react";
// import GoodsCard from "./GoodsCard";

const API_URL = "https://e-a-g-api.vercel.app/"; // 替換成實際 API 路徑
const API_KEY = "ZtQ5rmRFtoev3sK1eFTLnEaP"; // 替換成你的 API Key
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
                <div className="capsule bg-official-good-6 mt-auto mb-7 ms-3"></div>
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
          <div className="container d-flex justify-content-between">
            <ul className="goods-list row d-flex flex-nowrap flex-md-wrap justify-content-md-center overflow-auto">
              {/* 1 */}
              <li
                className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000"
                data-bs-toggle="modal"
                data-bs-target="#goodsModal1"
              >
                <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                  <div className="goods-number bg-official-good-1 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-000">
                      1
                    </p>
                  </div>
                </div>
                <div className="goods-item-bottom p-6">
                  <div className="goods-image-wrapper">
                    <img
                      src="Goods/goods-1.png"
                      alt="dtto friends | 玩偶小吊飾"
                      className="w-100"
                    />
                  </div>
                  <p className="goods-info fw-700 mt-4 text-center">
                    dtto friends | 玩偶小吊飾
                  </p>
                </div>
              </li>
              {/* 2 */}
              <li className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000">
                <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                  <div className="goods-number bg-official-good-2 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-000">
                      2
                    </p>
                  </div>
                </div>
                <div className="goods-item-bottom p-6">
                  <div className="goods-image-wrapper">
                    <img
                      src="Goods/goods-2.png"
                      alt="dtto friends | 兩用造型頸枕"
                      className="w-100"
                    />
                  </div>
                  <p className="goods-info fw-700 mt-4 text-center">
                    dtto friends | 兩用造型頸枕
                  </p>
                </div>
              </li>
              {/* 3 */}
              <li
                className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000"
                data-bs-toggle="modal"
                data-bs-target="#goodsModal3"
              >
                <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                  <div className="goods-number bg-official-good-3 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-000">
                      3
                    </p>
                  </div>
                </div>
                <div className="goods-item-bottom p-6">
                  <div className="goods-image-wrapper">
                    <img
                      src="Goods/goods-3.png"
                      alt="dtto friends | 缩纷浴巾"
                      className="w-100"
                    />
                  </div>
                  <p className="goods-info fw-700 mt-4 text-center">
                    dtto friends | 缩纷浴巾
                  </p>
                </div>
              </li>
              {/* 4 */}
              <li className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000">
                <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                  <div className="goods-number bg-official-good-4 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-1000">
                      4
                    </p>
                  </div>
                </div>
                <div className="goods-item-bottom p-6">
                  <div className="goods-image-wrapper">
                    <img
                      src="Goods/goods-4.png"
                      alt="貓貓共和國 | 珪薸土杯墊"
                      className="w-100"
                    />
                  </div>
                  <p className="goods-info fw-700 mt-4 text-center">
                    貓貓共和國 | 珪薸土杯墊
                  </p>
                </div>
              </li>
              {/* 5 */}
              <li className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000">
                <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                  <div className="goods-number bg-official-good-5 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-000">
                      5
                    </p>
                  </div>
                </div>
                <div className="goods-item-bottom p-6">
                  <div className="goods-image-wrapper">
                    <img
                      src="Goods/goods-5.png"
                      alt="藝展任意門 | 2025桌曆"
                      className="w-100"
                    />
                  </div>
                  <p className="goods-info fw-700 mt-4 text-center">
                    藝展任意門 | 2025桌曆
                  </p>
                </div>
              </li>
              {/* 6 */}
              <li className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000">
                <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                  <div className="goods-number bg-official-good-6 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-000">
                      6
                    </p>
                  </div>
                </div>
                <div className="goods-item-bottom p-6">
                  <div className="goods-image-wrapper">
                    <img
                      src="Goods/goods-6.png"
                      alt="樋口裕子展 | 刺繡絨毛東口袋"
                      className="w-100"
                    />
                  </div>
                  <p className="goods-info fw-700 mt-4 text-center">
                    樋口裕子展 | 刺繡絨毛東口袋
                  </p>
                </div>
              </li>
            </ul>
          </div>
          {/* Modal */}
          {/* Modal-3 */}
          <div
            className="modal fade goods-modal"
            id="goodsModal3"
            tabIndex={-1}
            aria-labelledby="goodsModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-secondary-50 p-3 px-md-14 col-12">
                {/* Header */}
                <div className="modal-header border-0">
                  <h5
                    className="modal-title fs-4 fs-md-5 fw-bold"
                    id="goodsModalLabel"
                  >
                    dtto friends | 繽紛浴巾
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                {/* Body */}
                <div className="modal-body">
                  {/* 商品圖片 */}
                  <div className="goods-image mb-3">
                    <img
                      src="Goods/goods-3.png"
                      alt="dtto friends | 繽紛浴巾"
                      id="modalImage"
                      className="w-100 rounded"
                    />
                  </div>
                  {/* 產品描述 */}
                  <div className="goods-description">
                    <h6 className="fw-bold text-primary-800">
                      <span className="material-symbols-outlined">campaign</span>
                      繽紛色彩，點亮每一天！
                    </h6>
                    <p id="modalDescription" className="text-gray-700">
                      繽紛浴巾以絕佳觸感與高品質設計，為您打造沐浴後的極致享受。輕柔的材質包裹身體，不僅迅速吸水，還讓每一次接觸都如雲朵般輕盈。
                    </p>
                  </div>
                  {/* 產品特色 */}
                  <div className="goods-features mt-4">
                    <h6 className="fw-bold text-primary-800">
                      <span className="material-symbols-outlined">kid_star</span>
                      產品特色
                    </h6>
                    <ul className="list-unstyled">
                      <li className="">
                        <strong>高吸水力 - </strong>
                        精選細緻纖維，快速吸乾水分,讓您時刻保持清爽。
                      </li>
                      <li className="mt-2">
                        <strong>柔軟親膚 - </strong>
                        適合各種肌膚，溫和呵護敏感肌膚也不在話下。
                      </li>
                      <li className="mt-2">
                        <strong>繽紛設計 - </strong>
                        多款明亮色彩，為您的浴室增添活力與時尚感。
                      </li>
                    </ul>
                  </div>
                  {/* 適用場景 */}
                  <div className="goods-usage mt-4">
                    <h6 className="fw-bold text-primary-800">
                      <span className="material-symbols-outlined">public</span>
                      適用場景
                    </h6>
                    <p className="text-gray-700">
                      居家沐浴、運動後清潔、泳池派對必備，甚至是送禮的首選！
                    </p>
                  </div>
                  {/* 限時優惠 */}
                  <div className="goods-offer mt-4">
                    <h6 className="fw-bold text-primary-800">
                      <span className="material-symbols-outlined">schedule</span>
                      限時兌換，讓幸福觸手可及！
                    </h6>
                    <p className="text-gray-700">
                      立即擁有繽紛浴巾，用色彩與柔軟點綴您的生活！
                    </p>
                  </div>
                </div>
                {/* Footer */}
                <div className="modal-footer border-0">
                  <button
                    type="button"
                    className="btn btn-dark mx-auto px-6 py-4"
                    data-bs-dismiss="modal"
                  >
                    我了解惹！
                  </button>
                </div>
              </div>
            </div>
          </div>
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
          <div className="message-box bg-gray-000 col-12 p-8">
            <h3 className="support-title fs-6 fs-md-8 fw-700 mb-8">
              為鼓勵支持藝術家和平台運營
            </h3>

            {/* support - list */}
            <ol className="support-list ms-8">
              <li className="mb-8">
                <p className="support-sub-title mb-2">乾爹回饋</p>
                <p className="support-detail">
                  感恩支持藝術家創作與平台發展，抖內plus 會員每月可獲得<strong>1個E幣</strong>；
                  抖內pro max 每月可獲得<strong>2個E幣</strong>。
                </p>
              </li>
              <li className="mb-8">
                <p className="support-sub-title mb-2">展覽互動</p>
                <p className="support-detail">
                  參加特定藝術展覽活動，可獲取<strong>1至3個E幣</strong>的參與獎勵，讓您的支持成為藝術的一部分。
                </p>
              </li>
              <li className="mb-8">
                <p className="support-sub-title mb-2">節日活動</p>
                <p className="support-detail">
                  特殊節日將舉辦限時活動，完成挑戰有機會獲得<strong>1至3個E幣</strong>的獎勵。
                </p>
              </li>
              <li className="mb-8">
                <p className="support-sub-title mb-2">心得分享</p>
                <p className="support-detail">
                  發布與展覽相關的文章或評論，經審核通過後，可根據內容深度與質量獲得<strong>1至3個E幣</strong>。
                </p>
              </li>
              <li>
                <p className="support-sub-title">許願池驚喜</p>
                <p className="support-detail">
                  參與平台「許願池」活動，有機會隨機獲得 <strong>E幣</strong>，探索藝術的無限可能。
                </p>
              </li>
            </ol>
          </div>

          <div className="support-robot-img-wrapper">
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
