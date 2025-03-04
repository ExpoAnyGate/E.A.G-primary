import PropTypes from "prop-types";

function Pagination({ page, totalPages, handlePageChange, setPage }) {
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          {/* <li className="page-item preBtn">
            <button
              className="page-link mobile-pre d-flex align-items-center"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined fs-12">
                keyboard_arrow_left
              </span>
            </button>
          </li> */}
          <li className="page-item preBtn">
            <button
              onClick={() => handlePageChange(page - 1)}
              className="page-link desktop-pre"
              aria-label="Previous"
            >
              上一頁
            </button>
          </li>

          {/* <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li> */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              className={`page-item ${page === index + 1 && "active"}`}
              key={index}
            >
              <button
                onClick={() => handlePageChange(index + 1)}
                className="page-link"
                href="#"
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li className="page-item nextBtn">
            <button
              onClick={() => handlePageChange(page + 1)}
              className="page-link desktop-next"
              aria-label="Next"
            >
              下一頁
            </button>
          </li>
          {/* <li className="page-item nextBtn">
            <button
              className="page-link mobile-next d-flex align-items-center"
              aria-label="Next"
            >
              <span className="material-symbols-outlined fs-12">
                keyboard_arrow_right
              </span>
            </button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  handlePageChange: PropTypes.func,
  page: PropTypes.object,
};
export default Pagination;
