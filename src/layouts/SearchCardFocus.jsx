import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SearchCardFocus = ({ data }) => {
  return (
    <>
      {/* <!-- 左大card --> */}
      <Link to={`/demo/${data.id}`} className="d-flex flex-column h-100">
        <div className="d-flex justify-content-between align-items-center rounded-top-4 border-custom py-4 px-6">
          <p className="mb-0">
            {data.start_date}-{data.end_date}
          </p>
          <div className="d-flex align-items-center">
            <span className="material-symbols-outlined fs-6 px-0">
              location_on
            </span>
            <p className="mb-0 nowrap">{data.region.name}</p>
          </div>
        </div>
        {/* <!-- 圖＋文 --> */}
        <div className=" border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
          <div className="card mx-auto py-0 no-border">
            <div className="overflow-hidden rounded-4">
              <img
                src={data.url}
                className="SearchCardFocus card-img-top rounded-4 img-enlarge object-fit-cover"
                alt="..."
              />
            </div>
            <div className="card-body pb-0">
              <div className="card-title">
                <div className="d-flex align-items-center">
                  <h3 className="fw-700 title-font-size">{data.title}</h3>
                  <span className="material-symbols-outlined title-font-size">
                    bookmark_add
                  </span>
                </div>
              </div>
              {Array.isArray(data.tags) && data.tags.length > 0 && (
                <div className="card-tag mb-4">
                  {data.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`badge rounded-pill border border-gray-700 text-gray-700 fw-400 px-2 py-1 ${
                        index > 0 ? "ms-4" : ""
                      }`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="card-text d-none d-sm-block">
                <p className="mb-4">
                  {data.description.length > 235 ? (
                    <>
                      {data.description.slice(0, 235)}
                      <span className="text-muted">......(看更多)</span>
                    </>
                  ) : (
                    data.description
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
SearchCardFocus.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchCardFocus;
