import { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "../components/LoginForm"; // 引入登入表單組件

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
    };

    const confirmGacha = async () => {
        setShowConfirmModal(false);
        try {
            const res = await axios.post(`${API_URL}/api/draw`, {
                count: selectedCount,
                userId: userId
            }, {
                headers: { "api-key": API_KEY }
            });
            console.log("🎉 Gacha Result:", res.data);
            setECoins((prev) => prev - selectedCount * costPerGacha);
        } catch (err) {
            console.error("❌ Error drawing gacha:", err);
        }
    };

    return (
        <>
            <div className="text-center mt-17 mt-xl-20">
                <a
                    href="#"
                    className="btn btn-gray-700 text-gray-000 py-2 px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#gachaModal-2"
                >
                    我要轉扭蛋
                </a>
            </div>
            <div className="gacha-modal modal fade" id="gachaModal-2" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-secondary-50 px-6 px-md-15 pt-6 pb-10">
                        <div className="modal-header p-0 border-bottom-0">
                            <h5 className="modal-title fs-5 fw-700">轉扭蛋</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-center">
                            <img src="Goods/goods-gashapon-sm.png" alt="扭蛋機" />
                            <div className="gacha-container text-center">
                                <span className="fw-bold">我想轉</span>
                                <select
                                    id="gachaCount"
                                    className="gacha-select"
                                    value={selectedCount}
                                    onChange={(e) => setSelectedCount(parseInt(e.target.value))}
                                >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                                <span className="fw-bold">次扭蛋</span>
                                <p>
                                    你總共有 <span id="totalEcoins" className="text-primary fw-bold">{eCoins}</span> 個E幣，
                                </p>
                                <p>
                                    此次會花掉 <span id="costEcoins" className="text-danger fw-bold">{selectedCount * costPerGacha}</span> 個E幣
                                </p>
                                {errorMessage && <p className="text-danger fw-bold">{errorMessage}</p>}
                            </div>
                            <button className="btn btn-dark" id="startGacha" onClick={handleGacha}>
                                抽起來
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 確認抽獎 Modal */}
            {showConfirmModal && (
                <div className="modal fade show d-block" tabIndex={-1} aria-modal="true" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-6 text-center">
                            <h5 className="modal-title fw-700">轉扭蛋</h5>
                            <p>確定要花 <span className="text-danger fw-bold">{selectedCount * costPerGacha}</span> 個E幣</p>
                            <p className="fw-bold fs-5">扭 <span className="text-primary fw-bold">{selectedCount}</span> 次扭蛋嗎？</p>
                            <button className="btn btn-dark" onClick={confirmGacha}>確定</button>
                        </div>
                    </div>
                </div>
            )}
            {/* 登入 Modal */}
            {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default GachaModal;