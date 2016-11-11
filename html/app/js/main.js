'use strict';
$(document).ready(function() {
  var wWidth = $(window).width();
  var curScrollHeight;
  if (wWidth >= 768) {
    curScrollHeight = '81%';
  }
  if (wWidth >= 1024) {
    curScrollHeight = '80%';
  }
  if (wWidth <= 767) {
    curScrollHeight = '66%';
  }

  console.log(curScrollHeight);
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
    $('.chat-user-list').toggleClass('open');

  });

  $('.chat-toggle').click(function() {

    $('.chat-box').toggleClass('open');

  });
  $('.scroll-chat-list').slimscroll({
    height: curScrollHeight,
    distance: '3px',
    size: '3px',
    railVisible: false



  });
  $('.direct-scroll').slimscroll({
    height: '300px',
    distance: '3px',
    size: '3px',
    railVisible: false



  });

  $('.channel-list').slimscroll({
    height: '230px',
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




  $('.user-popover').popover({
    html: true,
    container: '.post-item',
    trigger: 'click',

    content: function() {
      return $(this).next('.user-popover-content').html();

    }
  });

  $('.fancybox').fancybox({
    helpers: {
      overlay: {
        locked: false
      }
    }
  });


});
