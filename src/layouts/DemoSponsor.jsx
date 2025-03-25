import PropTypes from 'prop-types';

export default function DemoSponsor({ organizer }) {

    
    return (
        <>
            <div className="sub-sponsor d-flex align-items-center gap-6">
                <div className="score-info d-flex flex-column border border-gray-700 rounded-3 p-6">
                    <div className="demo-score d-flex justify-content-between">
                    <div className="average d-flex flex-column gap-2 justify-content-center align-items-center">
                        <p className="fs-12 fw-700">4.8</p>
                        <div className="rate_count d-flex gap-2">
                            <p className="fs-3">52,536</p>
                            <p className="fs-3 nowrap">人評論</p>
                        </div>
                        
                    </div>

                    <div className="stars-group d-flex flex-column align-items-end gap-2">
                        <div className="stars d-flex gap-3">
                        <div className="star d-flex align-items-center gap-4">
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div className="percentage">63%</div>
                        </div>
                        <div className="stars d-flex gap-3">
                        <div className="star d-flex align-items-center gap-4">
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div className="percentage">21%</div>
                        </div>
                        <div className="stars d-flex gap-3">
                        <div className="star d-flex align-items-center gap-4">
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div className="percentage">7%</div>
                        </div>
                        <div className="stars d-flex gap-3">
                        <div className="star d-flex align-items-center gap-4">
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div className="percentage">5%</div>
                        </div>
                        <div className="stars d-flex gap-3">
                        <div className="star d-flex align-items-center gap-4">
                            <span className="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div className="percentage">4%</div>
                        </div>

                    </div>

                    </div>

                    <hr className="hr w-100" />

                    <div className="user-score d-flex align-items-center">
                        <div className="user-rate d-flex gap-4 align-items-center justify-content-space-between">
                            <div className="d-flex gap-2 align-items-center">
                                <img src="Demo/user.png" alt="" />
                                <p className="fs-3 nowrap rating-status">已經評價過</p>
                            </div>
                            
                            <div className="star d-flex align-items-center gap-3">
                                <span className="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span className="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span className="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span className="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span className="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                            </div>
                        </div>
                        <span className="material-symbols-outlined fs-6 p-0 align-items-center demo-delete">delete</span>

                    </div>

                </div>


                <div className="demo-sponsor d-flex flex-column border border-gray-700 rounded-3 p-6 gap-4">
                    <div className="sponsor-title fs-3">主辦方</div>
                    <div className="sponsor-announce d-flex flex-column gap-4">
                    <div className="sponsor d-flex bg-gray-50 py-4 align-items-center">
                        <img src="Demo/sponsor.png" alt="" className="ms-8" />
                        <p className="sponsor-name fs-6 fw-700 ms-8">{organizer}</p>
                    </div>

                    <div className="announce d-flex bg-primary-900 py-4 align-items-center rounded-3 py-4 px-3 position-relative">
                        <img src="icon/Polygon.png" alt="" className="position-absolute triangel" />
                        <img src="icon/mdi_announcement-outline.png" alt="" />
                        <p className="sponsor-name text-gray-000 ms-3">活動會安排工作人員拍攝照片、影像、聲音等作為活動過程紀錄，並於社群公開 宣傳，如不同意請勿報名。 </p>
                    </div>

                    </div>

                </div>



            </div>
        </>
    )
    
}
DemoSponsor.propTypes = {
    organizer: PropTypes.string.isRequired,
}; 