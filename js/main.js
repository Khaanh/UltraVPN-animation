$(function() {
	//= include/markuplist
	//= include/default
	//= include/popup
  //= include/validate-form
  //= include/animation
  //= include/mobile-menu
  
  $('.wow').css("visibility", "visible")

  jcf.replaceAll();

  $(window).on('beforeunload', function() {
    $(window).scrollTop(0);
  })



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


  // Скприпт для внутренних страниц
  function cotrolAcc() {
    $('.js-accOpen').on('click', function() {
      $(this).toggleClass('is-toggle')
    })

    $(document).mouseup(function (e){
      let acc = $('.js-accOpen'); 
      if (!acc.is(e.target) && acc.has(e.target).length === 0) { 
        acc.removeClass('is-toggle');
      }
    });
  }cotrolAcc();

  // Отключение уведомления
  $('.js-closeNotice').on('click', function() {
    $(this).closest('.notice').removeClass('is-visible')
  })

  window.dataLayer = window.dataLayer || [];
  $('.form-control').on('focus', function () {

    window.dataLayer.push({ 
      'event' : 'credit_form',
      'step_name' : 'phone',
      'step_status' : 'valid',
    });
    
  })









});


