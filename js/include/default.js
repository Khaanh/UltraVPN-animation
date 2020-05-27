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



  // Following Scroll

  // function followLink() {
  //   if (($('#home').length) || ($('#features').length) || ($('#price').length) || ($('#help').length) || ($('#apps').length) || ($('#faq').length)) {

  //     $('.nav > .menu > .menu-item > a').on( 'click', function(e, cb) {

  //       let link = $(this);
  //       let dest = link.data('id'); 
  //       let linkHref = link.attr('href');

  //       if(dest !== undefined && dest !== '') {
  //         // document.location.href = `${linkHref}`
  //         $('html').animate({ 
  //           scrollTop: $(dest).offset().top - 100
  //         }, 1000);

  //         $('.burger').removeClass('is-opened');
  //         $('.nav-wrapper').removeClass('is-open');
  //       }
  //       return false;
  //     });
  //   }
  // }
  // followLink();





  $('.nav > .menu > .menu-item > a').on( 'click', function() {
    let link = $(this);
    let dest = link.attr('name'); 
    // let linkHref = link.attr('href');
// console.log(dest)
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



  // var element = document.getElementById("box");

  // element.scrollIntoView();
  // element.scrollIntoView(false);
  // element.scrollIntoView({block: "end"});
  // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});










  // Acttion btn to top
  $('.back-to-top').on('click', function() {
    $('html, body').animate({scrollTop:0}, 500)
    return false;
  })
  
