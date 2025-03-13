import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchData } from "../hook/useSearchData"; // 確保這裡有正確引入
import { setFilters } from "../hook/useFilter";
import ContactFooter from "../layouts/ContactFooter";
import DemoSearchBar from "../layouts/DemoSearchBar";
import SearchCardFocus from "../layouts/SearchCardFocus";
import SearchCard from "../layouts/SearchCard";
import Pagination from "../components/Pagination";
import FloatingButton from "../components/WalletKun";
import { Link, useLocation } from "react-router-dom";

export default function SearchPage() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchData);
  const totalPages = useSelector((state) => state.search.totalPages);
  const status = useSelector((state) => state.search.status); // 修正 loading 狀態
  const filters = useSelector((state) => state.filters); // 確保 filters 來自正確的 slice
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [filtersSet, setFiltersSet] = useState(false);

  useEffect(() => {
    const storedFilters = JSON.parse(sessionStorage.getItem("searchFilters")) || {
      regionId: "",
      category: "",
      keyWord: "",
      start_date: "",
      end_date: "",
    };

    dispatch(setFilters(storedFilters));
    setFiltersSet(true);
  }, [dispatch]);

  useEffect(() => {
    if (filtersSet) {
      dispatch(fetchSearchData({ filters, page })); // 使用 Redux action 來請求 API
    }
  }, [filters, page, dispatch, filtersSet]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
    setPage(1);
  };

  return (
    <>
      <DemoSearchBar setFilters={handleFilterChange} />
      <section className="container mt-17 mb-17">
        {status === "loading" && <p>加載中...</p>}
        {status === "failed" && <p>加載失敗，請稍後再試。</p>}

        {searchData.length > 0 && status === "succeeded" && (
          <>
            <div className="row gx-6 h-100 mb-6">
              <div className="col-lg-8 col-sm-12 focus-card">
                <div className="d-flex flex-column h-100 search-card rounded-4">
                  <SearchCardFocus data={searchData[0]} />
                </div>
              </div>
              {searchData.length > 1 && (
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="h-100 row align-items-stretch">
                    {searchData.length > 1 && (
                      <div className="col-lg-12 col-sm-12 d-flex flex-column mb-6">
                        <Link to={`/demo/${searchData[1].id}`} className="d-block">
                          <div
                            className={`rightT d-flex flex-column rounded-4 search-card ${
                              searchData.length === 2 ? "h-auto" : "h-100"
                            }`}
                          >
                            <SearchCard data={searchData[1]} />
                          </div>
                        </Link>
                      </div>
                    )}
                    {searchData.length > 2 && (
                      <div className="col-lg-12 col-sm-12 d-flex flex-column">
                        <Link to={`/demo/${searchData[2].id}`} className="d-block">
                          <div className="rightB d-flex flex-column search-card rounded-4 h-100">
                            <SearchCard data={searchData[2]} />
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {searchData.length > 3 && (
              <div className="row h-100">
                {searchData.slice(3, 6).map((data) => (
                  <div className="col-lg-4" key={data.id}>
                    <Link to={`/demo/${data.id}`} className="d-block">
                      <div className="mb-6 d-flex flex-column rounded-4 search-card">
                        <SearchCard data={data} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {searchData.length === 0 && status === "succeeded" && <p>無符合條件的展覽</p>}
      </section>

      <div className="container">
        <div className="mb-17">
          <Pagination handlePageChange={handlePageChange} totalPages={totalPages} page={page} />
        </div>
      </div>

      <ContactFooter />
      <FloatingButton />
    </>
  );
}