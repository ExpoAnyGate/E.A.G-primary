import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY; 

export default function DemoLike({}) {
  const [exhibitions, setExhibitions] = useState([]);
  
  useEffect(() => {
    // 隨機生成第一個數字
    const randomIndex1 = Math.floor(Math.random() * 10); // 假設有10筆資料

    // 隨機生成第二個數字，確保不與第一個數字相同
    let randomIndex2;
    do {
      randomIndex2 = Math.floor(Math.random() * 10);
    } while (randomIndex1 === randomIndex2);

    // 分別呼叫兩次 API 並取得資料
    Promise.all([
      axios.get(
        `${API_URL}/api/exhibitions/${randomIndex1}?&_expand=region`,{
          headers: { "api-key": `${API_KEY}` }
      }),
      axios.get(
        `${API_URL}/api/exhibitions/${randomIndex2}?&_expand=region`,{
          headers: { "api-key": `${API_KEY}` }
      })
    ])
      .then((responses) => {
        // 提取兩筆資料並設定狀態
        const randomExhibitions = [
          responses[0].data,
          responses[1].data,
        ];
        setExhibitions(randomExhibitions);
      })
      .catch((error) => {
        console.error("Error fetching exhibitions:", error);
      });
  }, []);

  // 確保 exhibitions 已經有值再進行渲染
  if (exhibitions.length === 0) {
    return <div>正在加載...</div>; // 或是顯示載入中的提示
  }

  return (
    <>
      <div class="demo-special py-4 px-6 bg-gray-100 rounded-4">
        <h2 class="fs-5 fw-700 text-gray-700 mb-4">你可能會喜歡</h2>
        <div class="d-flex flex-column gap-4 w-100">
          {/* <Link to={`/demo/2`} className="text-decoration-none text-dark">
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
          </Link>

          <Link to={`/demo/1`} className="text-decoration-none text-dark">
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
          </Link> */}
          {exhibitions.map((exhibition, index) => (
            <Link to={`/demo/${exhibition.id}`} className="text-decoration-none text-dark">
          <div key={index} className="demo-card d-flex flex-column">
            <div className="demo-small-info d-flex justify-content-between align-items-center bg-gray-000 rounded-top-2 w-100 px-6 py-4">
              <div>
                <p className="fs-4 fw-400">{exhibition.start_date} - {exhibition.end_date}</p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined fs-6 px-0 py-0">
                  location_on
                </span>
                <span className="nowrap">{exhibition.region?.name}</span>
              </div>
            </div>

            <div className="demo-small-info d-flex flex-column justify-content-between bg-gray-000 rounded-bottom-2 w-100 p-6 gap-4">
              <img
                src={exhibition.url}
                alt={exhibition.title}
                className="youmaylikeimg w-100"
              />
              <div className="demo-small-title d-flex flex-column gap-4">
                <p className="fs-8 fw-700">{exhibition.title}</p>
                <ul className="demo-tags d-flex align-items-center gap-3 fs-3">
                  {exhibition.tags?.map((tag, idx) => (
                    <li key={idx}>
                      <span className="rounded-pill text-gray-700 border-gray-700 border bg-gray-000 py-1 px-2">
                        #{tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          </Link>
        ))}
        </div>
      </div>
    </>
  );
}
