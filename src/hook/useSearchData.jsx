import { useState } from "react";
import axios from "axios";

//const API_URL = import.meta.env.VITE_API_URL;
const API_URL = "http://localhost:3000/";
export const useSearchData = () => {
  const [searchData, setSearchData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getSearchData = async (filters, page = 1) => {
    const { regionId, category, keyWord, start_date, end_date } = filters;
    try {
      const response = await axios.get(
        `${API_URL}api/exhibitions?_page=${page}&_limit=6&start_date=${start_date}&end_date=${end_date}&category=${category}&search=${keyWord}&regionId=${regionId}&_expand=region`
      );
      setSearchData(response.data.data);
      setTotalPages(response.data.meta.totalPages);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  return { searchData, totalPages, getSearchData };
};
