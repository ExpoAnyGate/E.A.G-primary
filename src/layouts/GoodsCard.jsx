const GoodsCard = ({ good, setSelectedGood }) => {
    return (
        <li
            className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000"
            data-bs-toggle="modal"
            data-bs-target="#goodsModal"
            onClick={() => setSelectedGood(good)} // 設定選擇的商品
        >
            <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
                <div className="goods-number bg-official-good-1 d-flex justify-content-center align-items-center">
                    <p className="fs-5 fs-lg-9 fw-700 text-gray-000">
                        {good.id}
                    </p>
                </div>
            </div>
            <div className="goods-item-bottom p-6">
                <div className="goods-image-wrapper">
                    <img src={good.image} alt={good.name} className="w-100" />
                </div>
                <p className="goods-info fw-700 mt-4 text-center">{good.name}</p>
            </div>
        </li>
    );
};

export default GoodsCard;
