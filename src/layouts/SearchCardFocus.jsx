const SearchCardFocus = ({ data }) => {
  return (
    <>
      {/* <!-- 左大card --> */}
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
              src="Demo/demo-origin-6.png"
              className="card-img-top rounded-4 img-enlarge object-fit-cover"
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
              <p className="mb-4">{data.description}</p>
              {/* <p>
                  透過這些影像，觀眾能夠體驗到光與影如何重新定義我們對周遭世界的感知，從而將看似日常的場景轉化為詩意的視覺體驗。每一張照片都仿佛是光影書寫的故事，讓人們在觀看的過程中沉浸其中，思考光影背後隱藏的細節與情感。展覽提供了一個全新視角，邀請觀眾放慢腳步，重新審視日常生活中的美好與神秘，在光影的舞動之間發現無限的創意與靈感。
                </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCardFocus;
