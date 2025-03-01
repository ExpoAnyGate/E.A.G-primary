const DemoSearch = () => {
	return (
		<section className='bg-secondary-600'>
			{/* <!-- 手機至平板版 --> */}
			<div className='container d-lg-none search-demo'>
				<ul className='row gy-9'>
					<li className='col-6'>
						<select
							className='form-select px-6 py-3 fs-4 border-gray-400'
							aria-label='Default select example'>
							<option selected>地區(縣/市)</option>
							<option value='台北市'>台北市</option>
							<option value='新北市'>新北市</option>
							<option value='桃園市'>桃園市</option>
							<option value='台中市'>台中市</option>
							<option value='台南市'>台南市</option>
							<option value='高雄市'>高雄市</option>
						</select>
					</li>
					<li className='col-6'>
						<select
							className='form-select px-6 py-3 fs-4 border-gray-400'
							aria-label='Default select example'>
							<option selected>展覽類別</option>
							<option value='藝文'>藝文</option>
							<option value='學習'>學習</option>
							<option value='漫畫'>漫畫</option>
							<option value='互動'>互動</option>
							<option value='資訊'>資訊</option>
							<option value='科學'>科學</option>
							<option value='圖文'>圖文</option>
							<option value='其他'>其他</option>
						</select>
					</li>
					<li className='col-12'>
						<div
							className='input-group w-100'
							id='dateTimepickerSM'
							data-td-target-input='nearest'
							data-td-target-toggle='nearest'>
							<input
								id='dateTimepicker1Input'
								type='text'
								className='form-control py-3 fs-4 border-gray-400 ps-6'
								data-td-target='#dateTimepicker1'
								placeholder='展覽日期'
							/>
							<span
								className='input-group-text material-symbols-outlined border-gray-400'
								data-td-target='#dateTimepicker1'
								data-td-toggle='dateTimepicker'>
								calendar_month
							</span>
						</div>
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
								className='btn btn-gray-000 w-30 py-3 border-gray-400'>
								清除篩選
							</button>
						</div>
					</li>
				</ul>
			</div>
			{/* <!-- 電腦版以上 --> */}
			<div className='container d-none d-lg-block search-demo'>
				<ul className='row'>
					<li className='col-1'></li>
					<li className='col-10'>
						<div className='d-flex justify-content-between align-items-center'>
							<select
								className='form-select py-3 fs-4 w-bp-20-15 border-gray-400'
								aria-label='Default select example'>
								<option selected>地區(縣/市)</option>
								<option value='台北市'>台北市</option>
								<option value='新北市'>新北市</option>
								<option value='桃園市'>桃園市</option>
								<option value='台中市'>台中市</option>
								<option value='台南市'>台南市</option>
								<option value='高雄市'>高雄市</option>
							</select>

							<div
								className='input-group w-20'
								id='dateTimepickerLG'
								data-td-target-input='nearest'
								data-td-target-toggle='nearest'>
								<input
									id='dateTimepicker1Input'
									type='text'
									className='form-control py-3 fs-4 border-gray-400 text-gray-700'
									data-td-target='#dateTimepicker1'
									placeholder='展覽日期'
								/>
								<span
									className='input-group-text material-symbols-outlined border-gray-400'
									data-td-target='#dateTimepicker1'
									data-td-toggle='dateTimepicker'>
									calendar_month
								</span>
							</div>

							<select
								className='form-select py-3 fs-4 w-15 border-gray-400'
								aria-label='Default select example'>
								<option selected>展覽類別</option>
								<option value='藝文'>藝文</option>
								<option value='學習'>學習</option>
								<option value='漫畫'>漫畫</option>
								<option value='互動'>互動</option>
								<option value='資訊'>資訊</option>
								<option value='科學'>科學</option>
								<option value='圖文'>圖文</option>
								<option value='其他'>其他</option>
							</select>

							<form
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

							<a href='search.html' className='btn btn-gray-700 w-10 py-3'>
								搜尋
							</a>

							<button
								type='button'
								className='btn btn-gray-000 w-auto py-3 border-gray-400'>
								清除篩選
							</button>
						</div>
					</li>

					<li className='col-1'></li>
				</ul>
			</div>
		</section>
	);
};

export default DemoSearch;
