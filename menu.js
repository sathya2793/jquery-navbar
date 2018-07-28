$(document).ready(() => {
  $('#hamburger').hide();

/* click */
  $('#hamburger').click(() => {
    $('.nav-bar').slideToggle('slow');
  });

/* close on click on window */
  $(window).click(function(event) {
    if ($(window).width() <= 710) {
      if (!$(event.target).is('#hamburger')) {
        $('.nav-bar').hide('slow');
      }
    }
  });

  /* media */
  if ($(window).width() <= 710) {
    $('.nav-bar').hide();
    $('#hamburger').show();
    $('.banner').hide();
  } else {
    $('.nav-bar').show();
    $('#hamburger').hide();
    $('.banner').show();
  }

  /* resize the window */
  $(window).on('resize', function() {
    var win = $(this);
    if ($(window).width() <= 710) {
      $('.nav-bar').hide();
      $('#hamburger').show();
      $('.banner').hide();
    } else {
      $('.nav-bar').show();
      $('#hamburger').hide();
      $('.banner').show();
    }
  });
});
