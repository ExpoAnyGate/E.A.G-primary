const GoodsCard = ({ good, setSelectedGood }) => {
    return (
        <li
            className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000"
            data-bs-toggle="modal"
            data-bs-target="#goodsModal"
            onClick={() => setSelectedGood(good)} // 設定選擇的商品
        >
            <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
            <div className={`goods-number ${good.color} d-flex justify-content-center align-items-center`}>
                    <p className="font-family-Noto fs-5 fs-lg-9 fw-bold text-gray-000 pb-1">
                        {good.id}
                    </p>
                </div>
            </div>
            <div className="goods-item-bottom w-100 p-6">
                <div className="goods-image-wrapper w-100 d-flex justify-content-center align-items-center">
                    <img src={good.image} alt={good.name} className="w-100" />
                </div>
                <p className="goods-info fw-bold fs-5 mt-4 text-center">{good.name}</p>
            </div>
        </li>
    );
};

export default GoodsCard;
