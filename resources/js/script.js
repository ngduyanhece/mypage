$(document).ready(function() {
  
  $(".js--section-abilities").waypoint(function(direction){
    if(direction == "down") {
      $('.main-nav').addClass('sticky')
    } else {
      $('.main-nav').removeClass('sticky')
    }
  },{
    offset: '60px;'
  });

  $('.js--scroll-to-profile').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-profile').offset().top},1000)
    });

  $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
  });
  
  /*Mobile Navigation*/
  $('.js--nav-icon').click(function(){
    var nav = $('.js--nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(200);
    
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

});