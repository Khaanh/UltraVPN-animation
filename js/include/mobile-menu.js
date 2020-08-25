$('.js-openMen').on('click', function() {
  $(this).toggleClass('is-opened');
  $('.nav-wrapper').toggleClass('is-open');
  $('body').toggleClass('js-no-scroll');
})