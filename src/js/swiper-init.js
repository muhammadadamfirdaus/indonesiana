var mediaSlideShow = new Swiper('.modal.media.swiper-container', {
  preventClicks: false,
  paginationClickable: true,
  spaceBetween: 40,
  navigation: {
    nextEl: '.modal.media.swiper-container .swiper-button-next',
    prevEl: '.modal.media.swiper-container .swiper-button-prev',
  },
});