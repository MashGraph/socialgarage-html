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

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: -5,
    nav: true,
    items: 1
  });
  var demo3 = $('.colorpickerplus-embed .colorpickerplus-container');
  demo3.colorpickerembed();
  demo3.on('changeColor', function(e) {
    if (e.color == null) {
      $('#demo3').val('transparent').css('background-color', '#fff'); //tranparent
    } else {
      $('#demo3').val(e.color).css('background-color', e.color);
    }
  });
  // $('#single-post').on('show', function(event) {
  //   window.setTimeout(function() {
  //     $('.pgwSlideshow').pgwSlideshow();
  //   }, 0500);
  // });
  $('#single-post').on('shown.bs.modal', function() {

    var pgwSlideshow = $('.pgwSlideshow').pgwSlideshow();


  });
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
    container: 'body',
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
