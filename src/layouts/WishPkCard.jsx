import PropTypes from "prop-types";

const WishPkCard = ({
  expoData = {},onButtonClick,regionList}) => {
  const locationName =
    regionList.length > 0
      ? regionList.find((region) => region.id === expoData.regionId)?.name ||
        expoData.location
      : "";
  return (
    <>
      <div className="col-lg-5">
        <div className="mb-6 d-flex flex-column rounded-4 vs-search-card">
          <div className="d-flex justify-content-between align-items-center rounded-top-4 border-custom py-4 px-6">
            <p className="mb-0">{expoData.dateRange}</p>
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined fs-6 px-0">
                location_on
              </span>
              <p className="mb-0 nowrap">{locationName}</p>
            </div>
          </div>
          <div className="border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
            <div className="card mx-auto py-0 no-border rounded-4">
              <div className="img-240 rounded-4">
                <img
                  src={expoData.imageSrc}
                  className="card-img-top rounded-4 w-100 img-enlarge"
                  alt={expoData.title}
                />
              </div>
              <div className="card-body pb-0">
                <div className="card-title">
                  <div className="d-flex align-items-center">
                    <h3 className="fw-700 title-font-size">{expoData.title}</h3>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="card-tag mb-6">
                    {expoData.tags && expoData.tags.length > 0 ? (
                      expoData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 me-4"
                        >
                          #{tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-muted">No tags available</span>
                    )}
                  </div>
                  <button
                    className="btn bg-white rounded-2 border border-gray-200"
                    onClick={onButtonClick}
                  >
                    更多介紹
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WishPkCard.propTypes = {
  expoData: PropTypes.object,
  onButtonClick: PropTypes.func,
  regionList: PropTypes.array
};

export default WishPkCard;
