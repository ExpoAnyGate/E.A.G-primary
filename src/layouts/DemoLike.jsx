import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY; 

export default function DemoLike({}) {
  const [exhibitions, setExhibitions] = useState([]);
  const [loading, setLoading] = useState(true); // 加入 loading 狀態

  useEffect(() => {
    const fetchExhibitions = async () => {
      try {
        // 先假設 API 內有 10 筆資料 (根據你的 API 需求調整)
        const maxExhibitions = 5; 
        const randomIndex1 = Math.floor(Math.random() * maxExhibitions) + 1;
        let randomIndex2;
        do {
          randomIndex2 = Math.floor(Math.random() * maxExhibitions) + 1;
        } while (randomIndex1 === randomIndex2);

        const responses = await Promise.all([
          axios.get(`${API_URL}/api/exhibitions/${randomIndex1}?&_expand=region`, {
            headers: { "api-key": API_KEY }
          }),
          axios.get(`${API_URL}/api/exhibitions/${randomIndex2}?&_expand=region`, {
            headers: { "api-key": API_KEY }
          })
        ]);

        const validExhibitions = responses
          .map((res) => res.data)
          .filter((item) => item !== undefined); // 避免 API 回傳 undefined

        setExhibitions(validExhibitions);
      } catch (error) {
        console.error("Error fetching exhibitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExhibitions();
  }, []);

  // **新增 Loading 狀態**
  if (loading) {
    return <div>正在加載...</div>;
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
