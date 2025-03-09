const GoodsCard = ({ id, name, image, onOpen }) => {
  return (
    <li
      className="goods-card col-12 col-lg-4 d-flex flex-column align-items-center justify-content-center bg-gray-000"
      onClick={() => onOpen({ id, name, image })}
    >
      <div className="goods-item-upper d-flex justify-content-center border-bottom border-primary-900 py-4">
        <div className={`goods-number bg-official-good-${id} d-flex justify-content-center align-items-center`}>
          <p className="font-size-5 font-size-lg-9 fw-700 text-gray-000">{id}</p>
        </div>
      </div>
      <div className="goods-item-bottom p-6">
        <div className="goods-image-wrapper">
          <img src={image} alt={name} className="w-100" />
        </div>
        <p className="goods-info fw-700 mt-4 text-center">{name}</p>
      </div>
    </li>
  );
};

export default GoodsCard;
