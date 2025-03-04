import PropTypes from "prop-types";

function Pagination({ page, totalPages, handlePageChange }) {
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          <li className={`page-item ${page === 1 ? "disabled" : ""} preBtn`}>
            <button
              onClick={() => handlePageChange(page - 1)}
              className="page-link desktop-pre"
              aria-label="Previous"
            >
              <span className="material-symbols-outlined fs-6">
                keyboard_arrow_left
              </span>
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              className={`page-item ${page === index + 1 ? "active" : ""}`}
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
          <li
            className={`page-item ${
              page === totalPages ? "disabled" : ""
            } nextBtn`}
          >
            <button
              onClick={() => handlePageChange(page + 1)}
              className="page-link desktop-next"
              aria-label="Next"
              disabled={page === totalPages}
            >
              <span className="material-symbols-outlined fs-6">
                keyboard_arrow_right
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  handlePageChange: PropTypes.func,
  page: PropTypes.object,
  totalPages: PropTypes.number.isRequired,
};
export default Pagination;
