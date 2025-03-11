const GoodsModal = ({ isOpen, onClose, product }) => {
    if (!isOpen || !product) return null; // 如果沒選擇商品，則不顯示
  
    return (
      <div className="modal-overlay">
        <div className="modal-content bg-secondary-50 p-3 px-md-14 col-12">
          {/* Header */}
          <div className="modal-header border-0">
            <h5 className="modal-title font-size-4 font-size-md-5 fw-bold">{product.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
  
          {/* Body */}
          <div className="modal-body">
            {/* 商品圖片 */}
            <div className="goods-image mb-3">
              <img src={product.image} alt={product.name} className="w-100 rounded" />
            </div>
  
            {/* 商品描述 */}
            <div className="goods-description">
              <h6 className="fw-bold text-primary-800">商品介紹</h6>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
  
          {/* Footer */}
          <div className="modal-footer border-0">
            <button type="button" className="btn btn-dark mx-auto px-6 py-4" onClick={onClose}>
              我了解惹！
            </button>
          </div>
        </div>
      </div>
    );
  };
  