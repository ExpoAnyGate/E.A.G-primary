import PropTypes from "prop-types";

const SearchCard = ({ data }) => {
  return (
    <>
      {/* <!-- 小card --> */}
    
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
        <div className=" border border-primary-900 py-6 px-6 rounded-bottom-4 h-100">
          <div className="card mx-auto py-0 no-border">
            <div className="img-240 rounded-4">
              <img
                src={data.url}
                className="card-img-top rounded-4 w-100 img-enlarge"
                alt="..."
              />
            </div>
            <div className="card-body pb-0">
              <div className="card-title">
                <div className="d-flex align-items-center">
                  <h3 className="fw-700 title-font-size">{data.title}</h3>
                  {/* <span className="material-symbols-outlined title-font-size">
                    bookmark_add
                  </span> */}

                  <span
                    id="bookmark-icon"
                    className={`material-symbols-outlined title-font-size ${data.isFavorite ? 'material-symbols-rounded demo-bookmark-added' : ''}`}
                    // onClick={toggleFavorite}
                  >
                    {data.isFavorite ? 'bookmark_added' : 'bookmark_add'}
                    {data.isFavorite ? console.log('bookmark true') : console.log('bookmark false')}
                  </span>

                </div>
              </div>
              {Array.isArray(data.tags) && data.tags.length > 0 && (
                <div className="card-tag">
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
            </div>
          </div>
        </div>
    
    </>
  );
};
SearchCard.propTypes = {
  data: PropTypes.object.isRequired, 
};


export default SearchCard;
