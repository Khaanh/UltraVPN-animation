$(function() {
	//= include/markuplist
	//= include/default
	//= include/popup
  //= include/validate-form
  //= include/animation
  //= include/mobile-menu

  jcf.replaceAll();

  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  })

  $('.wow').css("visibility", "visible")

  

// Скрипт для демонстрации работы модальных окон.
// Можно отключить

  $('.forgot-pass').on('click', function() {
    $(this).closest('.js-account').addClass('is-none')
    $('.js-reset').removeClass('is-none')
  })

  $('.register-link').on('click', function() {
    $(this).closest('.js-reset').addClass('is-none');
    $('.js-account').removeClass('is-none')
  })

// Скрипт для показа внутренних страниц зарегестрированным пользователям
// Можно отключить

  if (($('.admin-page').length) || ($('.admin-question').length)) {
    $('.account-info').removeClass('is-hidden');
    $('.header__btn').addClass('is-hidden');
  } else {
    $('.account-info').addClass('is-hidden');
    $('.header__btn').removeClass('is-hidden');
  }




});


