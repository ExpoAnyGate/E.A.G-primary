import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from 'bootstrap';

const GachaModal = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    // 檢查使用者是否登入
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserId = isLoggedIn ? localStorage.getItem("userId") : null;

    const [userId, setUserId] = useState(storedUserId);
    const [eCoins, setECoins] = useState(0);
    const [selectedCount, setSelectedCount] = useState(1);
    const [showLogin, setShowLogin] = useState(false); // 控制登入 Modal
    const [showConfirmModal, setShowConfirmModal] = useState(false); // 確認抽獎 Modal
    const [showResultModal, setShowResultModal] = useState(false); // 結果 Modal
    const [prizeSummary, setPrizeSummary] = useState({}); // 存儲獎品資訊
    const [errorMessage, setErrorMessage] = useState(""); // 錯誤訊息狀態
    const costPerGacha = 30;

    useEffect(() => {
        if (!isLoggedIn || !userId) {
            console.warn("⚠️ 未登入，設定 E_coins 為 0");
            setECoins(0);
            return;
        }

        const fetchUserECoins = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/users/${userId}`, {
                    headers: { "api-key": API_KEY }
                });
                console.log("✅ API 回應:", res.data);
                setECoins(res.data.e_coin);
            } catch (err) {
                console.error("❌ Error fetching user data:", err);
            }
        };

        fetchUserECoins();

        // 清理 body 的 padding-right，防止 modal 影響
        return () => {
            document.body.style.paddingRight = "";
        };
    }, [userId]);

    const handleGacha = () => {

        if (!isLoggedIn) {
            console.error("❌ 使用者未登入，彈出登入視窗");
            setShowLogin(true);
            return;
        }

        const totalCost = selectedCount * costPerGacha;
        if (totalCost > eCoins) {
            setErrorMessage("你的E幣不足");
            return;
        }

        setShowConfirmModal(true); // 顯示確認抽獎 Modal
        setErrorMessage(""); // 清除錯誤訊息

        // **關閉 `gachaModal-1`**
        setTimeout(() => {
            const firstModal = document.getElementById("gachaModal-1");
            if (firstModal) {
                const modalInstance = Modal.getInstance(firstModal);
                if (modalInstance) modalInstance.hide(); // **確保 Bootstrap 處理**
            }
        }, 300);

        // **開啟 `gachaModal-2`**
        setTimeout(() => {
            const confirmModal = document.getElementById("gachaModal-2");
            if (confirmModal) {
                const confirmModalInstance = Modal.getOrCreateInstance(confirmModal);
                confirmModalInstance.show();
            }
        }, 300);
    };

    const handleOpenGachaModal = () => {
        const firstModal = document.getElementById("gachaModal-1");
        if (firstModal) {
            firstModal.style.display = "block"; // **確保可見**
            firstModal.removeAttribute("aria-hidden");
            firstModal.classList.add("show");

            // **確保 Bootstrap Modal 狀態**
            const modalInstance = Modal.getOrCreateInstance(firstModal);
            modalInstance.show();
        }
    };
    const handleCloseModal = () => {
        document.body.style.paddingRight = "";
    };

    const closeAllModals = () => {
        setShowConfirmModal(false);
        setShowResultModal(false);

        setTimeout(() => {
            document.body.style.paddingRight = "";
            document.body.classList.remove("modal-open");
        }, 300); // 等待 Bootstrap modal fade-out 動畫結束

        setTimeout(() => {
            // 移除所有 `.modal-backdrop`
            document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.remove());

            // 移除 `modal-open`，恢復頁面可滾動
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";

            // **確保所有 Modal 狀態重置**
            ["gachaModal-1", "gachaModal-2", "gachaModal-3"].forEach(modalId => {
                const modalElement = document.getElementById(modalId);
                if (modalElement) {
                    const modalInstance = Modal.getInstance(modalElement);
                    if (modalInstance) modalInstance.hide();
                    modalElement.classList.remove("show");
                    modalElement.setAttribute("aria-hidden", "true");
                    modalElement.style.display = "none"; // **強制隱藏**
                }
            });

            // **確保 `gachaModal-1` 重新啟動**
            const firstModal = document.getElementById("gachaModal-1");
            if (firstModal) {
                const modalInstance = Modal.getOrCreateInstance(firstModal);
                modalInstance.hide(); // **先確保它是隱藏的**
                firstModal.classList.remove("show");
                firstModal.setAttribute("aria-hidden", "true");
                firstModal.style.display = "none"; // **確保不會被 Bootstrap 錯誤控制**
            }
        }, 300); // **避免 Bootstrap 動畫衝突**
    };





    const confirmGacha = async () => {
        setShowConfirmModal(false);

        if (!userId) {
            console.error("❌ userId 未定義，請檢查登入狀態");
            return;
        }

        console.log("📢 Sending request with userId:", userId, "count:", selectedCount);

        try {
            const res = await axios.post(`${API_URL}/api/draw`, {
                userId: Number(userId), // 確保 userId 為數字
                count: selectedCount
            }, {
                headers: { "api-key": API_KEY }
            });

            console.log("🎉 Gacha Result:", res.data);
            setECoins((prev) => prev - selectedCount * costPerGacha);
            setPrizeSummary(res.data.prizeSummary || {});
            setShowResultModal(true); // 顯示結果 Modal

            // **手動關閉 `gachaModal-2`**
            setTimeout(() => {
                const confirmModal = document.getElementById("gachaModal-2");
                if (confirmModal) {
                    const confirmModalInstance = Modal.getInstance(confirmModal);
                    if (confirmModalInstance) confirmModalInstance.hide();
                }
            }, 300);

        } catch (err) {
            console.error("❌ Error drawing gacha:", err.response?.data || err.message);
        }
    };



    return (
        <>
            <div className="text-center mt-17 mt-xl-20">
                <button
                    type="button"
                    className="btn btn-gray-700 text-gray-000 py-2 px-4"
                    onClick={handleOpenGachaModal} // **開啟 gachaModal-1**
                    onClose={handleCloseModal}
                >
                    我要轉扭蛋
                </button>
            </div>
            {/* gachaModal-1 */}
            <div className="container">
                <div className="gacha-modal modal fade" id="gachaModal-1" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered gacha-modal-width">
                        <div className="modal-content bg-secondary-50 px-6 px-md-15 pt-6 pb-6">
                            <div className="modal-header p-0 border-bottom-0">
                                <h5 className="modal-title fs-5 fw-700">轉扭蛋</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body text-center">
                                <div className="gacha-container d-flex align-items-center justify-content-center">
                                    <div className="gacha-capsule-container d-none d-sm-block mt-auto">
                                        <div className="capsule-box d-flex mx-md-3 mx-md-6 gap-md-3">
                                            <div className="capsule bg-official-good-3 mt-auto mb-12 mb-sm-15"></div>
                                            <div className="capsule bg-official-good-1 mt-auto mb-6"></div>
                                            <div className="capsule bg-official-good-6 mt-auto mb-10 ms-5"></div>
                                        </div>
                                    </div>
                                    <img src="Goods/goods-gashapon-sm.png" alt="扭蛋機" />
                                    <div className="gacha-capsule-container  d-none d-sm-block  mt-auto">
                                        <div className="capsule-box d-flex mx-md-3 mx-md-6 gap-md-3">
                                            <div className="capsule bg-official-good-5 mt-auto mb-6"></div>
                                            <div className="capsule bg-official-good-4 mt-auto"></div>
                                            <div className="capsule bg-official-good-2 mt-auto mb-12"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gacha-text-container text-center align-bottom my-12">
                                    
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="d-inline-block fw-bold fs-7 fs-lg-9">我想轉</span>
                                    <select
                                        id="gachaCount"
                                        className="gacha-select mx-4 mx-md-8 px-6 py-3 "
                                        value={selectedCount}
                                        onChange={(e) => setSelectedCount(parseInt(e.target.value))}
                                        >
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                    <span className="fw-bold fs-7 fs-lg-9">次扭蛋</span>
                                        </div>
                                    <p className="mt-6">
                                        你總共有 <span id="totalEcoins" className="text-primary fw-bold text-secondary-900">{eCoins}</span> 個E幣，
                                        <br className="d-sm-none"/>
                                        此次會花掉 <span id="costEcoins" className="text-danger fw-bold text-secondary-900">{selectedCount * costPerGacha}</span> 個E幣~
                                    </p>
                                    {errorMessage && <p className="text-danger fw-bold">{errorMessage}</p>}
                                </div>
                                <button className="btn btn-dark py-4 px-6" id="startGacha" onClick={handleGacha}>
                                    <span className="fw-bold">抽起來</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 確認抽獎 gachaModal-2 */}
            {showConfirmModal && (
                <div
                    className="modal fade show d-block"
                    id="gachaModal-2"
                    tabIndex={-1}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-6 text-center">
                            <div className="modal-header">
                                <h5 className="modal-title fw-700">轉扭蛋</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeAllModals} // **確保取消後不會卡住**
                                    onClose={handleCloseModal}
                                />
                            </div>
                            <div className="modal-body">
                                <p>確定要花 <span className="text-danger fw-bold">{selectedCount * costPerGacha}</span> 個E幣</p>
                                <p className="fw-bold fs-5">扭 <span className="text-primary fw-bold">{selectedCount}</span> 次扭蛋嗎？</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary me-3"
                                    onClick={closeAllModals}
                                >
                                    取消
                                </button>
                                <button
                                    className="btn btn-dark"
                                    onClick={confirmGacha}
                                >
                                    確定
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* 抽獎結果 gachaModal-3*/}
            {showResultModal && (
                <div className="modal fade show d-block" tabIndex={-1} aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-6 text-center">
                            <div className="modal-header">
                                <h5 className="modal-title fw-700">登登登登～</h5>
                                <button type="button" className="btn-close" onClick={closeAllModals} onClose={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>恭喜獲得</p>
                                {Object.entries(prizeSummary).map(([key, value], index) => (
                                    <p key={index} className="text-primary fw-bold">
                                        {key}   {value}個
                                    </p>
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-dark" onClick={closeAllModals}>確定</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default GachaModal;