$(document).ready(function() {
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
    $('.chat-user-list').toggleClass('open');

  });
  $('.scroll-chat-list').slimscroll({
    height: '75%',
    distance: '3px',
    size: '3px',
    railVisible: false



  });
  $('.user-choose-file').popover({
    html: true,
    content: function() {
      return $('#popover-content').html();
    }
  });

});
