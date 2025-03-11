
const GoodsModal = ({ good }) => {
    if (!good) return null;

    // 預設內容（如果 API 沒有完整的商品描述，就使用這些）
    const defaultContent = {
        name: "dtto friends | 繽紛浴巾",
        image: "https://raw.githubusercontent.com/ExpoAnyGate/E.A.G-primary/refs/heads/main/public/Goods/goods-3.png",
        description: "繽紛浴巾以絕佳觸感與高品質設計，為您打造沐浴後的極致享受。輕柔的材質包裹身體，不僅迅速吸水，還讓每一次接觸都如雲朵般輕盈。",
        features: [
            { title: "高吸水力", content: "精選細緻纖維，快速吸乾水分，讓您時刻保持清爽。" },
            { title: "柔軟親膚", content: "適合各種肌膚，溫和呵護敏感肌膚也不在話下。" },
            { title: "繽紛設計", content: "多款明亮色彩，為您的浴室增添活力與時尚感。" },
        ],
        usage: "居家沐浴、運動後清潔、泳池派對必備，甚至是送禮的首選！",
        offer: "立即擁有繽紛浴巾，用色彩與柔軟點綴您的生活！"
    };

    return (
        <div className="modal fade goods-modal" id="goodsModal" tabIndex={-1} aria-labelledby="goodsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-secondary-50 p-3 px-md-14 col-12">
                    {/* Header */}
                    <div className="modal-header border-0">
                        <h5 className="modal-title fs-4 fs-md-5 fw-bold" id="goodsModalLabel">
                            {good.name || defaultContent.name}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                        {/* 商品圖片 */}
                        <div className="goods-image mb-3">
                            <img src={good.image || defaultContent.image} alt={good.name || defaultContent.name} className="w-100 rounded" />
                        </div>

                        {/* 產品描述 */}
                        <div className="goods-description">
                            <h6 className="fw-bold text-primary-800">
                                <span className="material-symbols-outlined">campaign</span>
                                {good.description ? "商品介紹" : "繽紛色彩，點亮每一天！"}
                            </h6>
                            <p className="text-gray-700">{good.description || defaultContent.description}</p>
                        </div>

                        {/* 產品特色 */}
                        <div className="goods-features mt-4">
                            <h6 className="fw-bold text-primary-800">
                                <span className="material-symbols-outlined">kid_star</span>
                                產品特色
                            </h6>
                            <ul className="list-unstyled">
                                {(good.features || defaultContent.features).map((feature, index) => (
                                    <li key={index} className="mt-2">
                                        <strong>{feature.title} - </strong>{feature.content}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 適用場景 */}
                        <div className="goods-usage mt-4">
                            <h6 className="fw-bold text-primary-800">
                                <span className="material-symbols-outlined">public</span>
                                適用場景
                            </h6>
                            <p className="text-gray-700">{good.usage || defaultContent.usage}</p>
                        </div>

                        {/* 限時優惠 */}
                        <div className="goods-offer mt-4">
                            <h6 className="fw-bold text-primary-800">
                                <span className="material-symbols-outlined">schedule</span>
                                限時兌換，讓幸福觸手可及！
                            </h6>
                            <p className="text-gray-700">{good.offer || defaultContent.offer}</p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-dark mx-auto px-6 py-4" data-bs-dismiss="modal">
                            我了解惹！
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default GoodsModal;
