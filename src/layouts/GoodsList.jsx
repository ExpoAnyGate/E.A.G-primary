import { useEffect, useState } from "react";
import GoodsCard from "./GoodsCard";
import GoodsModal from "./GoodsModal";

// 直接在這裡引入環境變數（Vite 專案使用 import.meta.env）
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const GoodsList = () => {
    const [goods, setGoods] = useState([]);
    const [selectedGood, setSelectedGood] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // 控制載入狀態

    const fetchGoods = async () => {
        try {
            setIsLoading(true); // 開始載入
            const response = await fetch(`${API_URL}/api/gotcha_goods`, {
                headers: { "api-key": `${API_KEY}` },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setGoods(data);
        } catch (error) {
            console.error("Error fetching goods:", error);
        } finally {
            setIsLoading(false); // 載入完成
        }
    };

    useEffect(() => {
        fetchGoods();
    }, []);

    return (
        <>

            {isLoading ? (
                <div className="text-center my-6">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <ul className="goods-list row d-flex flex-nowrap flex-md-wrap justify-content-md-center overflow-auto">
                    {goods.map((good) => (
                        <GoodsCard key={good.id} good={good} setSelectedGood={setSelectedGood} />
                    ))}
                </ul>
            )}

            <GoodsModal good={selectedGood} />
        </>
    );
};

export default GoodsList;
