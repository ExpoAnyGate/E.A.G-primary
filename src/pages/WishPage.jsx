export default function WishPage() {
  return (
    <>
      {/* <!-- 頂圖 --> */}
      <section className="topBanner container-fluid p-0 m-0 position-relative">
        <div className="w-100" style={{ height: "900px" }}>
          <img
            src="src/assets/images/Wish/wish-lg-1.jpeg"
            className="w-100 h-100 object-fit-cover"
            alt="..."
          />
          {/* <!-- 電腦版（單行）d-md-block : ≥768px（平板以上）時顯示 --> */}
          <h1 className="fs-8 fw-700 position-absolute top-50 start-50 translate-middle text-white text-nowrap d-none d-md-block">
            還在祈禱夢寐以求的展覽嗎？沒關係，湖中女神幫您實現。
          </h1>

          {/* <!-- 平板 & 手機版（兩行） --> */}
          <h1 className="fs-8 fw-700 position-absolute text-center top-50 start-50 translate-middle text-white text-nowrap d-block d-md-none text-center">
            還在祈禱夢寐以求的展覽嗎？
            <br />
            沒關係，湖中女神幫您實現。
          </h1>
        </div>
      </section>
    </>
  );
}
