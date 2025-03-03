import { TempusDominus } from "@eonasdan/tempus-dominus";
import "@eonasdan/tempus-dominus/dist/css/tempus-dominus.min.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DemoSearchBar = () => {
	const timePickerSM = useRef(null);
	const timePickerLG = useRef(null);
	const timePickerInstanceSM = useRef(null);
	const timePickerInstanceLG = useRef(null);
	const keyWordInputSM = useRef(null);
	const keyWordInputLG = useRef(null);
	const [citySelectedSM, setCitySelectedSM] = useState("");
	const [categorySelectedSM, setCategorySelectedSM] = useState("");
	const [citySelectedLG, setCitySelectedLG] = useState("");
	const [categorySelectedLG, setCategorySelectedLG] = useState("");
	const [cityList, setCityList] = useState([]);
	const [categoryList, setCategoryList] = useState([]);

	const API_URL = "https://e-a-g-api.vercel.app";
	const API_KEY = "ZtQ5rmRFtoev3sK1eFTLnEaP";

	const getCityList = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/regions`, {
				headers: { "api-key": `${API_KEY}` },
			});
			setCityList(res.data);
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

	const cleanSearchSM = () => {
		setCitySelectedSM("");
		setCategorySelectedSM("");
		keyWordInputSM.current.reset();
		timePickerInstanceSM.current.dates.clear();
	};

	const cleanSearchLG = () => {
		setCitySelectedLG("");
		setCategorySelectedLG("");
		keyWordInputLG.current.reset();
		timePickerInstanceLG.current.dates.clear();
	};

	const getTimePicker = (timePicker, timePickerInstance) => {
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
				format: "yy/MM/dd",
			},
			multipleDatesSeparator: "-",
		});
	};

	useEffect(() => {
		getTimePicker(timePickerSM, timePickerInstanceSM);
		getTimePicker(timePickerLG, timePickerInstanceLG);
		getCityList();
		getCategoryList();
	}, []);

	return (
		<section className='bg-secondary-600'>
			<div className='container d-lg-none search-demo'>
				<ul className='row gy-9'>
					<li className='col-6'>
						<select
							className='form-select px-6 py-3 fs-4 border-gray-400'
							aria-label='Default select example'
							value={citySelectedSM}
							onChange={(e) => setCitySelectedSM(e.target.value)}>
							<option disabled value=''>
								地區(縣/市)
							</option>
							{cityList.map((city) => {
								return (
									<option key={city.id} value={city.name}>
										{city.name}
									</option>
								);
							})}
						</select>
					</li>
					<li className='col-6'>
						<select
							className='form-select px-6 py-3 fs-4 border-gray-400'
							value={categorySelectedSM}
							onChange={(e) => setCategorySelectedSM(e.target.value)}>
							<option value='' disabled>
								展覽類別
							</option>
							{categoryList.map((category) => {
								return (
									<option key={category.id} value={category.name}>
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
						<form
							ref={keyWordInputSM}
							className='position-relative text-gray-500'
							role='search'>
							<span className='material-symbols-outlined p-0 search-icon-position'>
								search
							</span>
							<input
								className='form-control px-8 py-3 fs-4 border-gray-400'
								type='search'
								placeholder='關鍵字搜尋'
								aria-label='Search'
							/>
						</form>
					</li>
					<li className='col-12'>
						<div className='d-flex justify-content-between'>
							<a href='search.html' className='btn btn-gray-700 w-65 py-3'>
								搜尋
							</a>
							<button
								type='button'
								onClick={() => cleanSearchSM()}
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
								value={citySelectedLG}
								onChange={(e) => setCitySelectedLG(e.target.value)}>
								<option value='' disabled>
									地區(縣/市)
								</option>
								{cityList.map((city) => {
									return (
										<option key={city.id} value={city.name}>
											{city.name}
										</option>
									);
								})}
							</select>

							<button
								ref={timePickerLG}
								className='border-0 input-group w-20 p-0 bg-secondary-600'>
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
								value={categorySelectedLG}
								onChange={(e) => setCategorySelectedLG(e.target.value)}>
								<option value='' disabled>
									展覽類別
								</option>
								{categoryList.map((category) => {
									return (
										<option key={category.id} value={category.name}>
											{category.name}
										</option>
									);
								})}
							</select>

							<form
								ref={keyWordInputLG}
								className='position-relative text-gray-500 w-bp-20-25'
								role='search'>
								<span className='material-symbols-outlined p-0 search-icon-position'>
									search
								</span>
								<input
									className='form-control ps-8 py-3 fs-4 border-gray-400'
									type='search'
									placeholder='關鍵字搜尋'
									aria-label='Search'
								/>
							</form>

							<Link to={"/search"} className='btn btn-gray-700 w-10 py-3'>
								搜尋
							</Link>

							<button
								type='button'
								onClick={() => cleanSearchLG()}
								className='btn btn-gray-000 w-auto py-3 border-gray-400'>
								清除篩選
							</button>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default DemoSearchBar;
