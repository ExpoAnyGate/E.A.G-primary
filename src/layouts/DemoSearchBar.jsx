import { TempusDominus } from "@eonasdan/tempus-dominus";
import "@eonasdan/tempus-dominus/dist/css/tempus-dominus.min.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const DemoSearchBar = () => {
	const timePickerSM = useRef(null);
	const timePickerLG = useRef(null);
	const timePickerInstanceSM = useRef(null);
	const timePickerInstanceLG = useRef(null);

	const [dateSelected, setDateSelected] = useState("");
	const [keyWordInput, setKeyWordInput] = useState("");
	const [regionSelected, setRegionSelected] = useState("");
	const [categorySelected, setCategorySelected] = useState("");

	const [regionList, setRegionList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);
	const [isValid, setIsValid] = useState(false);

	const navigate = useNavigate();

	//以下為整理資料的方法，能夠把使用者提供的資料轉成JSON格式
	const handleSearchInfo = (
		regionSelected,
		categorySelected,
		keyWordInput,
		dateSelected
	) => {
		return {
			regionId: Number(regionSelected),
			category: Number(categorySelected),
			keyWord: keyWordInput,
			start_date: dateSelected[0] && dateSelected[0].split("/").join("-"),
			end_date: dateSelected[1]
				? dateSelected[1].split("/").join("-")
				: dateSelected[0]?.split("/").join("-"),
		};
	};

	//會因為使用者的操作而改變的資料
	const searchInfo = handleSearchInfo(
		regionSelected,
		categorySelected,
		keyWordInput,
		dateSelected
	);

	const checkValid = (info) => {
		const { regionId, category, keyWord } = info;
		if (category || keyWord || regionId) {
			// 有效代表使用者至少有一個篩選條件
			setIsValid(true);
		}
	};
	console.log(searchInfo);

	useEffect(() => {
		checkValid(searchInfo);
	}, [searchInfo]);

	const getSearchInfo = async (info) => {
		const { regionId, category, keyWord, start_date, end_date } = info;
		//動態路由，每一個元素都有一個判斷式，如果有值就加入，沒有就不加入
		const queryParams = [
			start_date ? `startDate=${start_date}` : "",
			end_date ? `endDate=${end_date}` : "",
			"_page=0",
			"_limit=6",
			category ? `exhibitions_categoriesId=${category}` : "",
			keyWord ? `search=${keyWord}` : "",
			regionId ? `regionId=${regionId}` : "",
		]
			.filter(Boolean) // 過濾掉空字串，避免 `&startDate=&endDate=`
			.join("&"); // 以 `&` 連接

		// `${API_URL}/api/exhibitions?startDate=${start_date}&endDate=${end_date}&_page=0&_limit=6&tags=${tags}&search=${search}&regionId=${regionId}`
		// console.log(`${API_URL}/api/exhibitions?${queryParams}`);
		try {
			//至少要有一個篩選條件才打API
			const res = await axios.get(`${API_URL}/api/exhibitions?${queryParams}`, {
				headers: { "api-key": `${API_KEY}` },
			});
			const searchData = res.data.data;
			navigate("/search", {
				state: {
					searchData: {
						searchData: searchData,
						regionList: searchData.map((data) => {
							const region = regionList.find(
								(region) => region.id === data.regionId
							);
							return region ? region.name : "";
						}),
						categoryList: searchData.map((data) => {
							const category = categoryList.find(
								(category) => category.id === data.regionId
							);
							return category ? category.name : "";
						}),
					},
				},
			});
			cleanSearch();
		} catch (error) {}
	};

	const getRegionList = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/regions`, {
				headers: { "api-key": `${API_KEY}` },
			});
			setRegionList(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const getCategoryList = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/exhibitions_categories`, {
				headers: { "api-key": `${API_KEY}` },
			});
			setCategoryList(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const cleanSearch = () => {
		setRegionSelected("");
		setCategorySelected("");
		setKeyWordInput("");
		setDateSelected("");
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

			// 監聽日期變更事件
			timePicker.current.addEventListener("change.td", () => {
				const inputValue = timePicker.current.querySelector("input").value; // 取得 input 標籤裡面的值
				setDateSelected(inputValue.split("-"));
				if (inputValue === "" || inputValue === undefined) {
					setIsValid(false);
				} else {
					setIsValid(true);
				}
			});

			return () => {
				timePickerInstance.current.dispose(); // 清除事件監聽，防止記憶體洩漏
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
			<section className='bg-secondary-600'>
				<div className='container d-lg-none search-demo'>
					<ul className='row gy-9'>
						<li className='col-6'>
							<select
								className='form-select px-6 py-3 fs-4 border-gray-400'
								aria-label='Default select example'
								value={regionSelected}
								onChange={(e) => setRegionSelected(e.target.value)}>
								<option disabled value=''>
									地區(縣/市)
								</option>
								{regionList.map((city) => {
									return (
										<option key={city.id} value={city.id}>
											{city.name}
										</option>
									);
								})}
							</select>
						</li>
						<li className='col-6'>
							<select
								className='form-select px-6 py-3 fs-4 border-gray-400'
								value={categorySelected}
								onChange={(e) => setCategorySelected(e.target.value)}>
								<option value='' disabled>
									展覽類別
								</option>
								{categoryList.map((category) => {
									return (
										<option key={category.id} value={category.id}>
											{category.name}
										</option>
									);
								})}
							</select>
						</li>
						<li className='col-12'>
							<button
								ref={timePickerSM}
								className='input-group w-100 border-0 p-0 bg-secondary-600'>
								<input
									type='text'
									className='form-control py-3 fs-4 border-gray-400 ps-6'
									placeholder='展覽日期'
								/>
								<span className='input-group-text material-symbols-outlined border-gray-400'>
									calendar_month
								</span>
							</button>
						</li>
						<li className='col-12'>
							<form className='position-relative text-gray-500' role='search'>
								<span className='material-symbols-outlined p-0 search-icon-position'>
									search
								</span>
								<input
									className='form-control px-8 py-3 fs-4 border-gray-400'
									type='search'
									placeholder='關鍵字搜尋'
									aria-label='Search'
									onChange={(e) => setKeyWordInput(e.target.value)}
									value={keyWordInput}
								/>
							</form>
						</li>
						<li className='col-12'>
							<div className='d-flex justify-content-between'>
								{isValid ? (
									<Link
										to={"/search"}
										className='btn btn-gray-700 w-65 py-3'
										onClick={() => getSearchInfo(searchInfo)}>
										搜尋
									</Link>
								) : (
									<button className='btn btn-gray-700 w-65 py-3' disabled>
										搜尋
									</button>
								)}

								<button
									type='button'
									onClick={() => cleanSearch()}
									className='btn btn-gray-000 w-30 py-3 border-gray-400'>
									清除篩選
								</button>
							</div>
						</li>
					</ul>
				</div>
				<div className='container d-none d-lg-block search-demo'>
					<ul className='row'>
						<li className='col-12'>
							<div className='d-flex justify-content-between align-items-center'>
								<select
									className='form-select py-3 fs-4 w-bp-20-15 border-gray-400'
									value={regionSelected}
									onChange={(e) => setRegionSelected(e.target.value)}>
									<option value='' disabled>
										地區(縣/市)
									</option>
									{regionList.map((city) => {
										return (
											<option key={city.id} value={city.id}>
												{city.name}
											</option>
										);
									})}
								</select>

								<button
									ref={timePickerLG}
									className='border-0 input-group w-25 p-0 bg-secondary-600'>
									<input
										type='text'
										className='form-control py-3 fs-4 border-gray-400 text-gray-700'
										placeholder='展覽日期'
									/>
									<span className='input-group-text material-symbols-outlined border-gray-400'>
										calendar_month
									</span>
								</button>

								<select
									className='form-select py-3 fs-4 w-15 border-gray-400'
									value={categorySelected}
									onChange={(e) => setCategorySelected(e.target.value)}>
									<option value='' disabled>
										展覽類別
									</option>
									{categoryList.map((category) => {
										return (
											<option key={category.id} value={category.id}>
												{category.name}
											</option>
										);
									})}
								</select>

								<form
									className='position-relative text-gray-500 w-bp-20-25'
									role='search'>
									<span className='material-symbols-outlined p-0 search-icon-position'>
										search
									</span>
									<input
										onChange={(e) => setKeyWordInput(e.target.value)}
										value={keyWordInput}
										className='form-control ps-8 py-3 fs-4 border-gray-400'
										type='search'
										placeholder='關鍵字搜尋'
										aria-label='Search'
									/>
								</form>

								{isValid ? (
									<Link
										to={"/search"}
										className='btn btn-gray-700 w-10 py-3'
										onClick={() => getSearchInfo(searchInfo)}>
										搜尋
									</Link>
								) : (
									<button className='btn btn-gray-700 w-10 py-3' disabled>
										搜尋
									</button>
								)}

								<button
									type='button'
									onClick={() => cleanSearch()}
									className='btn btn-gray-000 w-auto py-3 border-gray-400'>
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

export default DemoSearchBar;
