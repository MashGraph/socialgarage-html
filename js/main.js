$(document).ready(function(){var l,o=$(window).width();o>=768&&(l="81%"),o>=1024&&(l="75%"),o<=767&&(l="66%"),console.log(l),$("#nav-icon1").click(function(){$(this).toggleClass("open"),$(".chat-user-list").toggleClass("open")}),$(".chat-toggle").click(function(){$(".chat-box").toggleClass("open")}),$(".scroll-chat-list").slimscroll({height:l,distance:"3px",size:"3px",railVisible:!1}),$(".direct-scroll").slimscroll({height:"300px",distance:"3px",size:"3px",railVisible:!1}),$(".user-choose-file").popover({html:!0,content:function(){return $("#popover-content").html()}})});px',
    size: '3px',
    railVisible: false



  });
  $('.direct-scroll').slimscroll({
    height: '300px',
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
