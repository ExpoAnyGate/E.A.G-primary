import React, { useState, useEffect } from "react";
import DemoLike from "../layouts/DemoLike";
import DemoSponsor from "../layouts/DemoSponsor";

export default function DemoPage({}) {
  return (
    <>
      <div class="demo-banner mt-bp-140-0"></div>

      <div class="container">
        <div class="demo-top w-100 d-flex gap-4 mt-17">
          <div class="main-demo">
            <div class="border border-gray-700 rounded-3 p-10">
              <div class="demo-card-header d-flex">
                <div class="demo-title d-flex align-items-center">
                  <p class="fs-12 fw-bold me-2">現代藝術展</p>
                  <span
                    id="bookmark-icon"
                    class="material-symbols-outlined fs-6 px-0 demo-bookmark"
                  >
                    bookmark_add
                  </span>
                </div>
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

              <ul class="demo-info d-flex flex-column gap-3 mt-6">
                <li class="d-flex align-items-center gap-3">
                  <span class="material-symbols-outlined fs-6 px-0 py-0">
                    calendar_month
                  </span>
                  <span>2024/8/15 - 2024/9/15</span>
                </li>
                <li class="d-flex align-items-center gap-3">
                  <span class="material-symbols-outlined fs-6 px-0 py-0">
                    schedule
                  </span>
                  <span>09:00-18:00</span>
                </li>
                <li class="d-flex align-items-center gap-3">
                  <span class="material-symbols-outlined fs-6 px-0 py-0">
                    location_on
                  </span>
                  <span>台北市中區繼光街59號</span>
                </li>
                <li class="d-flex align-items-center gap-3">
                  <span class="material-symbols-outlined fs-6 px-0 py-0">
                    public
                  </span>
                  <span>http:123456789.com</span>
                </li>
              </ul>

              <p class="mt-6">
                現代藝術展是一場充滿創新與思想碰撞的視覺盛宴，匯集了來自全球的前衛藝術家和創作者,他們以獨特的視角和風格呈現了當代藝術的多樣性和豐富性。本次展覽以“無限創意"為主題,探索了當代社會中的多元文化、科技變革、環境保護等議題,並以藝術的形式展現出對這些主題的深刻思考與詮釋。
              </p>

              <ul class="action-icons d-flex gap-6 mt-6">
                <li class="d-flex align-items-center gap-2">
                  <span class="material-symbols-outlined p-0 demo-favorite fs-6">
                    favorite
                  </span>
                  <span>1,200</span>
                </li>
                <li class="d-flex align-items-center gap-2">
                  <span class="material-symbols-rounded p-0 fs-6">
                    visibility
                  </span>
                  <span>15,000</span>
                </li>
              </ul>

              <a class="btn btn-gray-700 mt-8 rounded-8 w-100 demo-button">
                我要參加
              </a>
            </div>

            <div class="main-demo-special">
              <DemoSponsor />
            </div>

            <div class="demo-detail">
              <div class="mt-17 ">
                <div class="position-relative d-inline">
                  <h2 class="fs-9 fw-700 text-gray-700 position-relative z-2 d-inline">
                    活動簡介
                  </h2>
                  <img
                    class="position-absolute z-0 demo-title-underline"
                    src="../assets/images/deco/line-4.png"
                    alt="line-3"
                  />
                </div>

                <p class="mt-10 mb-4">
                  現代藝術展是一場充滿創新與思想碰撞的視覺盛宴，匯集了來自全球的前衛藝術家和創作者,他們以獨特的視角和風格呈現了當代藝術的多樣性和豐富性。本次展覽以“無限創意"為主題,探索了當代社會中的多元文化、科技變革、環境保護等議題,並以藝術的形式展現出對這些主題的深刻思考與詮釋。展覽涵蓋了繪畫、雕塑、裝置藝術、數位媒體藝術、影像藝術等多種藝術形式,觀眾將有機會親身體驗從傳統媒介到現代科技的藝術轉變，感受當代藝術家如何打破常規,挑戰傳統美學的界限。每件展品背後都有著創作者的個人故事和藝術理念,觀眾不僅能欣賞到視覺上的震撼,更能通過作品深入瞭解現代藝術的核心精神--勇於創新、追求自由、關注社會。
                </p>
                <p>
                  此外，本次展覽特別設置了互動區域，觀眾可以參與到創作過程中，親自體驗現代藝術的創作方式。展覽還將舉辦一系列與藝術家對話的講座、工作坊和現場表演,為觀眾提供更多瞭解和參與現代藝術的機會。無論您是資深藝術愛好者還是初次接觸現代藝術，這次展覽都將是一個難得的機會，讓您在感官與思想的雙重衝擊中，重新思考藝術的定義與價值。歡迎所有熱愛藝術、渴望探索創新思想的朋友們前來參觀,一起走進現代藝術的無限世界,感受當代藝術家的創造力和他們對世界的深刻洞見。讓我們共同見證這場充滿活力與創意的藝術盛典！
                </p>
              </div>

              <div class="mt-8 p-10 bg-secondary-100 rounded-2 d-flex flex-column gap-4">
                <h4 class="fs-6 fw-700">體驗亮點</h4>
                <ul class="d-flex flex-column gap-4 demo-highlight fs-5 fw-700">
                  <li>
                    創作互動：
                    <p class="ps-7 fs-4 fw-400 pt-1">
                      參觀者可以親身參與到互動式裝置藝術創作中，體驗從構思到完成的創作過程，感受藝術家的創作思維與技巧。這將是一個難得的機會，讓您成為作品的一部分，親自為藝術作品增添色彩。
                    </p>
                  </li>
                  <li>
                    數位藝術體驗：
                    <p class="ps-7 fs-4 fw-400 pt-1">
                      體驗最前沿的數位媒體藝術，透過AR（擴增實境）與VR（虛擬實境）技術，進入虛擬世界中的藝術空間，與虛擬雕塑、影像互動，感受科技與藝術的完美結合。
                    </p>
                  </li>
                  <li>
                    環保藝術啟發：
                    <p class="ps-7 fs-4 fw-400 pt-1">
                      探索由回收材料製作的藝術作品，了解如何透過創意將廢棄物轉化為藝術品，提
                      護與資源再利用的重要性。
                      升環保意識。展覽中特別展示的環保藝術品將引領您思考當代社會中環境保護與資源再利用的重要性。
                    </p>
                  </li>
                  <li>
                    藝術家交流：
                    <p class="ps-7 fs-4 fw-400 pt-1">
                      在指定時間段，參與與展出藝術家的面對面交流會，深入了解每件作品的創作理
                      念和背後故事，這是與藝術家直接對話的寶貴機會，讓您對現代藝術有更深層的理解。
                    </p>
                  </li>
                  <li>
                    限量藝術品抽獎：
                    <p class="ps-7 fs-4 fw-400 pt-1">
                      參觀展覽並完成互動體驗的觀眾，將有機會參加抽獎，贏取由參展藝術家親手創
                      作的限量版作品.為您的收藏增添獨特且極具價值的藝術品。
                    </p>
                  </li>
                  <li>
                    限量藝術品抽獎：
                    <p class="ps-7 fs-4 fw-400 mt-1">
                      所有參觀者將獲贈展覽限量版紀念品，包括定制畫冊、藝術家簽名小型海報等，為您的藝術之旅留下永久的美好回憶。{" "}
                    </p>
                  </li>
                </ul>
              </div>

              <div class="d-flex flex-column gap-4 mt-8">
                <h2 class="fs-5 fw-700">注意事項</h2>
                <ol class="d-flex flex-column gap-1 demo-notice">
                  <li>所有活動內容、主講人、時段異動之權利。</li>
                  <li>
                    安排工作人員拍攝照片、影像、聲音等作為活動過程紀錄，並於社群公開宣傳，如
                    不同意請勿報名。
                  </li>
                  <li>
                    票券一旦售出，恕不接受退款。若因私人因素無法參與，請自行將票券轉讓。
                  </li>
                </ol>
              </div>

              <div class="mt-17 ">
                <div class="position-relative d-inline">
                  <h2 class="fs-9 fw-700 text-gray-700 position-relative z-2 d-inline">
                    活動嘉賓
                  </h2>
                  <img
                    class="position-absolute z-0 demo-title-underline"
                    src="../assets/images/deco/line-4.png"
                    alt="line-3"
                  />
                </div>

                <div class="demo-cast d-flex gap-14 mt-10">
                  <div class="d-flex flex-column align-items-center gap-2">
                    <img src="../assets/images/cast01.png" alt="" />
                    <p class="fs-5 fw-700">小智</p>
                  </div>
                  <div class="d-flex flex-column align-items-center gap-2">
                    <img src="../assets/images/cast02.png" alt="" />
                    <p class="fs-5 fw-700">小霞</p>
                  </div>
                  <div class="d-flex flex-column align-items-center gap-2">
                    <img src="../assets/images/cast03.png" alt="" />
                    <p class="fs-5 fw-700">小剛</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="other-info">
            <div class="d-flex flex-column gap-4">
              <DemoSponsor />
              <DemoLike />
            </div>
          </div>
        </div>

        <div class="demo-map mt-17 mb-17">
          <div class="position-relative d-inline">
            <h2 class="fs-9 fw-700 text-gray-700 position-relative z-2 d-inline">
              活動地圖
            </h2>
            <img
              class="position-absolute z-0 demo-title-underline"
              src="../assets/images/deco/line-4.png"
              alt="line-3"
            />
          </div>

          <iframe
            id="map"
            height="600px"
            allowfullscreen=""
            loading="lazy"
            class="w-100 mt-10 rounded-4 border-3 border-gray-200"
          ></iframe>
        </div>

        <div class="sm-showed mb-17">
          <DemoLike />
        </div>
      </div>
    </>
  );
}
