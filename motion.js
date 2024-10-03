let mybanner = new Swiper(".mybanner", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500, // 设置为 5000 毫秒 (即 5 秒)
      disableOnInteraction: false, // 用户交互后是否继续自动播放
    },
    // loop: true,
  });

let myrecommend = new Swiper(".myrecommend", {
  slidesPerView: 'auto',  // 設定每個 slide 根據內容自動調整寬度
  spaceBetween: 24,       // slide 之間的間距（可根據需要調整）
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  centeredSlides: true, 
});


// -------
let myrecommend_prevButton = document.querySelector('.myrecommend-button-prev');
let myrecommend_nextButton = document.querySelector('.myrecommend-button-next');

myrecommend_prevButton.addEventListener('click', function() {
  myrecommend.slidePrev(); // 切換到前一個slide
});

myrecommend_nextButton.addEventListener('click', function() {
  myrecommend.slideNext(); // 切換到下一個slide
});