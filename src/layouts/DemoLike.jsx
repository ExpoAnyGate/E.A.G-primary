import React, { useState, useEffect } from "react";

export default function DemoLike({}) {
  return(
  <>
    <div class="demo-special py-4 px-6 bg-gray-100 rounded-4">
      <h2 class="fs-5 fw-700 text-gray-700 mb-4">你可能會喜歡</h2>
      <div class="d-flex flex-column gap-4 w-100">
        <div class="demo-card d-flex flex-column">
          <div class="demo-small-info d-flex justify-content-between align-items-center  bg-gray-000 rounded-top-2 w-100 px-6 py-4">
            <div>
              <p class="fs-4 fw-400">2024/8/15 - 2024/9/15</p>
            </div>

            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-6 px-0 py-0">
                location_on
              </span>
              <span class="nowrap">台北市</span>
            </div>
          </div>

          <div class="demo-small-info d-flex flex-column justify-content-between bg-gray-000 rounded-bottom-2 w-100 p-6 gap-4">
            <img
              src="Demo/youmaylike01.png"
              alt=""
              class=" youmaylikeimg w-100"
            />
            <div class="demo-small-title d-flex flex-column gap-4">
              <p class="fs-8 fw-700">現代設計的未來：數位藝術展</p>

              <ul class="demo-tags d-flex align-items-center gap-3 fs-3 ">
                <li>
                  <span class="rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2">
                    #多媒體藝術
                  </span>
                </li>
                <li>
                  <span class="rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2">
                    ＃視聽體驗
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="demo-card d-flex flex-column">
          <div class="demo-small-info d-flex justify-content-between bg-gray-000 rounded-top-2 w-100 px-6 py-4">
            <div>
              <p class="fs-4 fw-400">2024/8/15 - 2024/9/15</p>
            </div>

            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined fs-6 px-0 py-0">
                location_on
              </span>
              <span class="nowrap">台北市</span>
            </div>
          </div>

          <div class="demo-small-info d-flex flex-column justify-content-between bg-gray-000 rounded-bottom-2 w-100 p-6 gap-4">
            <img
              src="Demo/youmaylike02.png"
              alt=""
              class="youmaylikeimg w-100"
            />
            <div class="demo-small-title d-flex flex-column gap-4">
              <p class="fs-8 fw-700">藝術中的女性力量</p>

              <ul class="demo-tags d-flex align-items-center gap-3 fs-3 ">
                <li>
                  <span class="rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2">
                    #多媒體藝術
                  </span>
                </li>
                <li>
                  <span class="rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2">
                    ＃視聽體驗
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
