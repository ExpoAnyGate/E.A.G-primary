
import PropTypes from "prop-types";

const ExpoDetailModal = ({
  isOpen,
  onClose,
  expoData,
  handleVote,
  regionList,
}) => {
  if (!isOpen) return null;
  const locationName =
    regionList.length > 0
      ? regionList.find((region) => region.id === expoData.regionId)?.name ||
        expoData.location
      : "";
  return (
    <div
      className="modal fade show wish-backdrop-modal d-block"
      tabIndex={-1}
      id="expoDetailModal"
      aria-labelledby="expoDetailModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content bg-secondary-50">
          <div className="modal-header">
            <h5 className="modal-title">{expoData.title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="moreDetail modal-body">
            <div className="">
              <div className="modal-div">
                <img
                  className="rounded-3"
                  src={expoData.imageSrc}
                  alt={expoData.title}
                />
              </div>
              <div className="m-5">
                <DetailRow
                  icon="location_on"
                  label="地點"
                  content={locationName}
                />
                <DetailRow
                  icon="calendar_month"
                  label="時間"
                  content={expoData.dateRange}
                />
                <DetailRow
                  icon="kid_star"
                  label="展覽亮點"
                  content={expoData.highlights}
                />
                <DetailRow
                  icon="palette"
                  label="主題體驗"
                  content={expoData.experiences}
                />
                <DetailRow
                  icon="saved_search"
                  label="展覽特色"
                  content={expoData.features}
                />
              </div>
            </div>
          </div>

          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-secondary me-8"
              onClick={onClose}
            >
              關閉
            </button>
            <button
              type="button"
              className="btn btn-secondary-800 text-white"
              onClick={() => handleVote(expoData.id)}
            >
              投我
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailRow = ({ icon, label, content }) => (
  <div className="mb-4 expoRow">
    <div className="d-flex align-items-center title">
      <span className="material-symbols-outlined fs-6 px-0">{icon}</span>
      <p className="">{label}</p>
    </div>
    {Array.isArray(content) ? (
      content.map((text, index) => (
        <p key={index} className="content">
          {text}
        </p>
      ))
    ) : (
      <p className="content">{content}</p>
    )}
  </div>
);

ExpoDetailModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  expoData: PropTypes.object,
  handleVote: PropTypes.func,
  regionList :PropTypes.array,
};

export default ExpoDetailModal;
