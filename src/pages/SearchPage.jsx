import { useEffect, useState } from "react";
import ContactFooter from "../layouts/ContactFooter";
import DemoSearchBar from "../layouts/DemoSearchBar";
import axios from "axios";
import SearchCardFocus from "../layouts/SearchCardFocus";
import SearchCard from "../layouts/SearchCard";
import Pagination from "../components/Pagination"; 
//const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

// {{DOMAIN}}/api/exhibitions?startDate=2025-9-05&endDate=2025-11-10&_page=0&_limit=6&tags=時尚&search=時尚潮流&regionId=8

const API_URL = "http://localhost:3000/";


  
export default function SearchPage() {
  const [searchData, setSearchData] = useState([]);
    const [page, setPage] = useState(1); //資料頁
    const [totalPages, setTotalPages] = useState(1); //總頁數
   // const [total, setTotal] = useState(0); //總筆數
    
  const getSearchData = async (page) => {
    try {
      //   const response = await axios.get(
      //     `${API_URL}api/exhibitions?startDate=2025-8-08&endDate=2025-09-18&_page=0&_limit=6&regionId=1`,
      //     {
      //       headers: { "api-key": `${API_KEY}` },
      //     }
      //   );

      //打本地API
      const response = await axios.get(
        `${API_URL}api/exhibitions?_page=${page}&_limit=6&regionId=1&_expand=region`
      );
        setSearchData(response.data.data);
        setTotalPages(response.data.meta.totalPages);
        
      console.log("response.data", response.data);
      console.log("searchData", searchData);
    } catch (error) {
      console.error("Error fetching demo data:", error);
      //   return null;
    }
  };

  useEffect(() => {
    getSearchData(page);
  }, []);
    
    const handlePageChange = (page) => {
        getSearchData(page);
        setPage(page)
    };


  return (
    <>
      <DemoSearchBar />
      <section className="container mt-17 mb-17">
        {/* 第一組區塊 (左側大卡 + 右側兩個小卡) */}
        {searchData.length > 0 && (
          <div className="row gx-6 h-100 mb-6">
            {/* 左邊的大卡片 */}
            <div className="col-lg-8 col-sm-12 focus-card">
              <div className="d-flex flex-column h-100 search-card rounded-4">
                <SearchCardFocus data={searchData[0]} />
              </div>
            </div>

            {/* 右側兩個小卡片（如果有足夠的資料才渲染） */}
            {searchData.length > 1 && (
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="h-100 row align-items-stretch">
                  {searchData.length > 1 && (
                    <div className="col-lg-12 col-sm-12 d-flex flex-column">
                      <div className="rightT mb-6 d-flex flex-column rounded-4 search-card h-100">
                        <SearchCard data={searchData[1]} />
                      </div>
                    </div>
                  )}
                  {searchData.length > 2 && (
                    <div className="col-lg-12 col-sm-12 d-flex flex-column">
                      <div className="rightB d-flex flex-column search-card rounded-4 h-100">
                        <SearchCard data={searchData[2]} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 下方 3 個小卡片 */}
        {searchData.length > 3 && (
          <div className="row h-100">
            {searchData.slice(3, 6).map((data, index) => (
              <div className="col-lg-4" key={data.id}>
                <div className="mb-6 d-flex flex-column rounded-4 search-card">
                  <SearchCard data={data} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 無資料顯示 */}
        {searchData.length === 0 && <p>無符合條件的展覽</p>}
      </section>

      {/* <!-- 分頁 --> */}
      <div className="container">
        <div className="mb-17">
          <Pagination
            handlePageChange={handlePageChange}
            totalPages={totalPages}
            page={page}
          />
        </div>
      </div>
      {/* footer    */}
      <ContactFooter />
    </>
  );
}
