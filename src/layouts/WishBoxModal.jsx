import { useState } from "react";
import PropTypes from "prop-types";

const WishBoxModal = ({
  userInfo,
  isWishBoxModalOpen,
  handleCloseWishBoxModal,
  handleSubmitWish,
}) => {
  const [charCount, setCharCount] = useState(0);
  const maxLength = 500;

  const [expoName, setExpoName] = useState("");
  const [regionId, setRegionId] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const wishData = {
      userId: userInfo.userId,
      userName: userInfo.userName,
      email: userInfo.email,
      expoName,
      regionId,
      description,
    };

    handleSubmitWish(wishData); // 傳回上一層 WishPage
    handleCloseWishBoxModal(); // 關閉 Modal
  };

  return (
    <>
      <div
        className="modal fade"
        id="wishBoxModal"
        tabIndex={-1}
        aria-labelledby="wishBoxModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-secondary-50">
            <div className="modal-header">
              <h5 className="modal-title" id="wishBoxModalLabel">
                許願展覽
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    會員:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={`${userInfo.userId} - ${userInfo.userName}`}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="message-text"
                    value={`${userInfo.email}`}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    展覽名稱:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={expoName}
                    onChange={(e) => setExpoName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    希望展覽在哪個縣市舉辦？
                  </label>
                  <select
                    className="form-select"
                    id="location-select"
                    value={regionId}
                    onChange={(e) => setRegionId(e.target.value)}
                    required
                  >
                    <option value="">請選擇縣市</option>
                    <option value="Taipei">台北市</option>
                    <option value="NewTaipei">新北市</option>
                    <option value="Taichung">台中市</option>
                    <option value="Tainan">台南市</option>
                    <option value="Kaohsiung">高雄市</option>
                    <option value="Keelung">基隆市</option>
                    <option value="Hsinchu">新竹市</option>
                    <option value="Chiayi">嘉義市</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="describe-text" className="col-form-label">
                    請描述你希望主辦單位推出什麼展覽？
                  </label>
                  <textarea
                    className="form-control"
                    id="describe-text"
                    maxLength={maxLength}
                    style={{ height: "120px" }}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setCharCount(e.target.value.length);
                    }}
                    required
                  ></textarea>
                  <div
                    id="char-count"
                    className="fs-3 text-muted text-end mt-2"
                  >
                    <p className="fs-3 text-muted text-end mt-2">
                      {charCount}/{maxLength}
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center flex-column">
              <button
                type="button"
                className="btn btn-secondary-800 text-white"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                送出許願
              </button>
              <p className="fs-3 text-muted text-end mt-2">
                按下 [送出許願] 會將內容送至 email@expoanygate.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WishBoxModal.propTypes = {
  isWishBoxModalOpen: PropTypes.bool,
  handleCloseWishBoxModal: PropTypes.func,
  userInfo: PropTypes.object,
  handleSubmitWish: PropTypes.func,
};

export default WishBoxModal;
