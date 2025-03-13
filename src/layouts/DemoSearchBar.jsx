import { TempusDominus } from "@eonasdan/tempus-dominus";
import "@eonasdan/tempus-dominus/dist/css/tempus-dominus.min.css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const DemoSearchBar = ({ setFilters }) => {
  const timePickerSM = useRef(null);
  const timePickerLG = useRef(null);
  const timePickerInstanceSM = useRef(null);
  const timePickerInstanceLG = useRef(null);

  const [dateSelected, setDateSelected] = useState([]);
  const [regionList, setRegionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(() => {
    return (
      JSON.parse(sessionStorage.getItem("searchFilters")) || {
        regionId: "",
        category: "",
        keyWord: "",
        start_date: "",
        end_date: "",
      }
    );
  });

  const handleChangeSearchInfo = (e) => {
    setSearchInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    sessionStorage.setItem("searchFilters", JSON.stringify(searchInput)); // 存入 sessionStorage
    // setFilters(searchInput); // 確保設置最新的 searchInput
    if (location.hash === "#/search") {
      setFilters(searchInput);
    } else {
      navigate("/search");
    }
  };

  const checkValid = (searchInput) => {
    const { regionId, category, keyWord, start_date } = searchInput;
    if (start_date || category || keyWord || regionId) {
      setIsValid(true);
    }
  };

  useEffect(() => {
    checkValid(searchInput);
  }, [searchInput]);

  const getRegionList = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/regions`,
        {
          headers: {
            "api-key": `${API_KEY}`
          }
        }
      );
      setRegionList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryList = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/exhibitions_categories`,
        {
          headers: {
            "api-key": `${API_KEY}`
          }
        }
      );
      setCategoryList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cleanSearch = () => {
    setSearchInput({
      regionId: "",
      category: "",
      keyWord: "",
      start_date: "",
      end_date: "",
    });
    timePickerInstanceSM.current.dates.clear();
    timePickerInstanceLG.current.dates.clear();
    setIsValid(false);
  };

  const getTimePicker = (timePicker, timePickerInstance) => {
    if (timePicker.current) {
      timePickerInstance.current = new TempusDominus(timePicker.current, {
        dateRange: true,
        display: {
          components: {
            calendar: true,
            date: true,
            month: true,
            year: true,
            decades: false,
            clock: false,
            hours: false,
            minutes: false,
          },
          theme: "light",
          buttons: {
            clear: true,
            close: true,
          },
        },
        localization: {
          locale: "en",
          format: "yyyy/MM/dd",
        },
        multipleDatesSeparator: "-",
      });

      timePicker.current.addEventListener("change.td", () => {
        const inputValue = timePicker.current.querySelector("input").value;
        const dates = inputValue.split("-");
        setDateSelected(dates);
        const start_date = dates[0] && dates[0].split("/").join("-");
        const end_date = dates[1] ? dates[1].split("/").join("-") : start_date;

        setSearchInput((prevInput) => ({
          ...prevInput,
          start_date,
          end_date,
        }));
      });

      return () => {
        timePickerInstance.current.dispose();
      };
    }
  };

  useEffect(() => {
    getTimePicker(timePickerSM, timePickerInstanceSM);
    getTimePicker(timePickerLG, timePickerInstanceLG);
    getRegionList();
    getCategoryList();
  }, []);

  return (
    <>
      <section className="bg-secondary-600">
        <div className="container d-lg-none search-demo">
          <ul className="row gy-9">
            <li className="col-6">
              <select
                className="form-select px-6 py-3 fs-4 border-gray-400"
                aria-label="Default select example"
                name="regionId"
                value={searchInput.regionId}
                onChange={handleChangeSearchInfo}
              >
                <option value="">地區(縣/市)</option>
                {regionList.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </li>
            <li className="col-6">
              <select
                className="form-select px-6 py-3 fs-4 border-gray-400"
                name="category"
                value={searchInput.category}
                onChange={handleChangeSearchInfo}
              >
                <option value="">展覽類別</option>
                {categoryList.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </li>
            <li className="col-12">
              <button
                ref={timePickerSM}
                className="input-group w-100 border-0 p-0 bg-secondary-600"
              >
                <input
                  id="startDateInput"
                  type="text"
                  className="form-control py-3 fs-4 border-gray-400 ps-6"
                  placeholder="展覽日期"
                />
                <span className="input-group-text material-symbols-outlined border-gray-400">
                  calendar_month
                </span>
              </button>
            </li>
            <li className="col-12">
              <form className="position-relative text-gray-500" role="search">
                <span className="material-symbols-outlined p-0 search-icon-position">
                  search
                </span>
                <input
                  className="form-control px-8 py-3 fs-4 border-gray-400"
                  type="search"
                  placeholder="關鍵字搜尋"
                  aria-label="Search"
                  name="keyWord"
                  value={searchInput.keyWord}
                  onChange={handleChangeSearchInfo}
                />
              </form>
            </li>
            <li className="col-12">
              <div className="d-flex justify-content-between">
                {isValid ? (
                  <Link
                    to={"/search"}
                    className="btn btn-gray-700 w-65 py-3"
                    onClick={handleSearch}
                  >
                    搜尋
                  </Link>
                ) : (
                  <button className="btn btn-gray-700 w-65 py-3" disabled>
                    搜尋
                  </button>
                )}

                <button
                  type="button"
                  onClick={cleanSearch}
                  className="btn btn-gray-000 w-30 py-3 border-gray-400"
                >
                  清除篩選
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="container d-none d-lg-block search-demo">
          <ul className="row">
            <li className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <select
                  className="form-select py-3 fs-4 w-bp-20-15 border-gray-400"
                  name="regionId"
                  value={searchInput.regionId}
                  onChange={handleChangeSearchInfo}
                >
                  <option value="">地區(縣/市)</option>
                  {regionList.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>

                <button
                  ref={timePickerLG}
                  className="border-0 input-group w-25 p-0 bg-secondary-600"
                >
                  <input
                    type="text"
                    className="form-control py-3 fs-4 border-gray-400 text-gray-700"
                    placeholder="展覽日期"
                  />
                  <span className="input-group-text material-symbols-outlined border-gray-400">
                    calendar_month
                  </span>
                </button>

                <select
                  className="form-select py-3 fs-4 w-15 border-gray-400"
                  name="category"
                  value={searchInput.category}
                  onChange={handleChangeSearchInfo}
                >
                  <option value="">展覽類別</option>
                  {categoryList.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <form
                  className="position-relative text-gray-500 w-bp-20-25"
                  role="search"
                >
                  <span className="material-symbols-outlined p-0 search-icon-position">
                    search
                  </span>
                  <input
                    className="form-control ps-8 py-3 fs-4 border-gray-400"
                    type="search"
                    placeholder="關鍵字搜尋"
                    aria-label="Search"
                    name="keyWord"
                    value={searchInput.keyWord}
                    onChange={handleChangeSearchInfo}
                  />
                </form>

                {isValid ? (
                  <Link
                    onClick={handleSearch}
                    className="btn btn-gray-700 w-10 py-3"
                  >
                    搜尋
                  </Link>
                ) : (
                  <button disabled className="btn btn-gray-700 w-10 py-3">
                    搜尋
                  </button>
                )}

                <button
                  type="button"
                  onClick={cleanSearch}
                  className="btn btn-gray-000 w-auto py-3 border-gray-400"
                >
                  清除篩選
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

DemoSearchBar.propTypes = {
  setFilters: PropTypes.func,
  filters: PropTypes.object,
};

export default DemoSearchBar;