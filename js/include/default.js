$(window).on('scroll', function() {
  // Active header
  if( $(this).scrollTop() > 150) {
    $('.header').addClass('is-active')
  } else {
    $('.header').removeClass('is-active')
  }

  if( $(this).scrollTop() > 300) {
    $('.back-to-top').addClass('is-show')
  } else {
    $('.back-to-top').removeClass('is-show')
  }

})

  $('.nav > .menu > .menu-item > a').on( 'click', function() {
    let link = $(this);
    let dest = link.attr('name'); 
    let elem = $(dest).addClass('sets')
    console.log(elem)

    if(dest !== undefined && dest !== '') {

      $('html').animate({ 
        scrollTop: $(dest).offset().top - 110
      }, 1000);

      $('.burger').removeClass('is-opened');
      $('.nav-wrapper').removeClass('is-open');
      $('body').removeClass('js-no-scroll');
    }
  
    return false;
  });


  // Acttion btn to top
  $('.back-to-top').on('click', function() {
    $('html, body').animate({scrollTop:0}, 500)
    return false;
  })
  
function changeLang() {
  $('.lang').on('click', function() {
    $(this).toggleClass('is-toggle');
  })
}changeLang();