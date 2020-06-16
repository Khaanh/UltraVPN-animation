if ($('.form-control').length) {
  $('.js-validCard').mask('0000 0000 0000 0000')
  $('.js-validMY').mask('00/00')
  $('.js-validCVC').mask('000')
}


$('.js-adminForm').on('blur keydown', function() {
  if ($(this).val() == '') {
    $(this).next().next().removeClass('is-saved')
    $(this).siblings().removeClass('is-none');
  } else if (!$(this).val() == '') {
    $(this).next().next().addClass('is-saved')
    $(this).siblings().addClass('is-none');

  }
})
