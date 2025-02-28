import React, { useState, useEffect } from "react";

export default function DemoSponsor({ }) {
    return (
        <>
            <div class="sub-sponsor d-flex align-items-center gap-6">
                <div class="score-info d-flex flex-column border border-gray-700 rounded-3 p-6">
                    <div class="demo-score d-flex justify-content-between">
                    <div class="average d-flex flex-column gap-2 justify-content-center align-items-center">
                        <p class="fs-12 fw-700">4.8</p>
                        <div class="rate_count d-flex gap-2">
                            <p class="fs-3">52,536</p>
                            <p class="fs-3 nowrap">人評論</p>
                        </div>
                        
                    </div>

                    <div class="stars-group d-flex flex-column align-items-end gap-2">
                        <div class="stars d-flex gap-3">
                        <div class="star d-flex align-items-center gap-4">
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div class="percentage">63%</div>
                        </div>
                        <div class="stars d-flex gap-3">
                        <div class="star d-flex align-items-center gap-4">
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div class="percentage">21%</div>
                        </div>
                        <div class="stars d-flex gap-3">
                        <div class="star d-flex align-items-center gap-4">
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div class="percentage">7%</div>
                        </div>
                        <div class="stars d-flex gap-3">
                        <div class="star d-flex align-items-center gap-4">
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div class="percentage">5%</div>
                        </div>
                        <div class="stars d-flex gap-3">
                        <div class="star d-flex align-items-center gap-4">
                            <span class="material-symbols-rounded p-0 kid-star">kid_star</span>
                        </div>
                        <div class="percentage">4%</div>
                        </div>

                    </div>

                    </div>

                    <hr class="hr w-100" />

                    <div class="user-score d-flex align-items-center">
                        <div class="user-rate d-flex gap-4 align-items-center justify-content-space-between">
                            <div class="d-flex gap-2 align-items-center">
                                <img src="../assets/images/user.png" alt="" />
                                <p class="fs-3 nowrap rating-status">已經評價過</p>
                            </div>
                            
                            <div class="star d-flex align-items-center gap-3">
                                <span class="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span class="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span class="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span class="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                                <span class="material-symbols-rounded p-0 kid-star kid-star-btn">kid_star</span>
                            </div>
                        </div>
                        <span class="material-symbols-outlined fs-6 p-0 align-items-center demo-delete">delete</span>

                    </div>

                </div>


                <div class="demo-sponsor d-flex flex-column border border-gray-700 rounded-3 p-6 gap-4">
                    <div class="sponsor-title fs-3">主辦方</div>
                    <div class="sponsor-announce d-flex flex-column gap-4">
                    <div class="sponsor d-flex bg-gray-50 py-4 align-items-center">
                        <img src="../assets/images/sponsor.png" alt="" class="ms-8" />
                        <p class="sponsor-name fs-6 fw-700 ms-8">台灣藝術中心</p>
                    </div>

                    <div class="announce d-flex bg-primary-900 py-4 align-items-center rounded-3 py-4 px-3 position-relative">
                        <img src="../assets/images/icon/Polygon.png" alt="" class="position-absolute triangel" />
                        <img src="../assets/images/icon/mdi_announcement-outline.png" alt="" />
                        <p class="sponsor-name text-gray-000 ms-3">活動會安排工作人員拍攝照片、影像、聲音等作為活動過程紀錄，並於社群公開 宣傳，如不同意請勿報名。 </p>
                    </div>

                    </div>

                </div>



            </div>
        </>
    )
}