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

  // $('#single-post').on('show', function(event) {
  //   window.setTimeout(function() {
  //     $('.pgwSlideshow').pgwSlideshow();
  //   }, 0500);
  // });
  $('#single-post').on('shown.bs.modal', function() {

    var pgwSlideshow = $('.pgwSlideshow').pgwSlideshow();


  })
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
  $('.scroll-chat-list-mobile').slimscroll({
    height: '100vh',
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
  $('.return').on('click', function(e) {
    e.preventDefault();
    $('.chat-mobile .chat-box').toggleClass('open');
  });
  $('.chat-mobile .chat-user-list .channel-list ul li a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.chat-mobile .chat-box').toggleClass('open');
    });
  });

  $('.chat-mobile .chat-user-list .direct-list ul li a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      $('.chat-mobile .chat-box').toggleClass('open');


    });
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
