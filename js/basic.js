var typed = new Typed('.main-title', {
    stringsElement: '#typed-strings1',
    typeSpeed: 40,
    startDelay: 1000,
    fadeOut: true,
    loop: true
});
var $win = $(window);
$win.on('scroll', function() {
  var top = $win.scrollTop();
  var top1 = $win.scrollTop() / 400;
  var scrollBottom = $win.scrollTop() + $win.height();
  var threediv1 = $('.body2-row3-col1').offset().top;
  var threediv2 = $('.body2-row3-col2').offset().top;
  var threediv3 = $('.body2-row3-col3').offset().top;
  var divBottom = $('.background-width').offset().top;
  var divBottom2 = $('.background-width2').offset().top;
  var divBottom3 = $('.background-width3').offset().top;
  var divBottom4 = $('.background-width4').offset().top;
  var divBottom5 = $('.background-width5').offset().top;
  var divBottom6 = $('.background-width6').offset().top;
  var divBottom7 = $('.background-width7').offset().top;
  var divBottom8 = $('.background-width8').offset().top;
  var divBottom9 = $('.background-width9').offset().top;
  console.log(top, scrollBottom, divBottom);
  $('.body1-row2').css('opacity', 1 - top1);

  if(scrollBottom >= divBottom) {
    $('.background-width1').addClass('background-width-shorten');
    $('.background-width-div1').addClass('background-div-anim');
    if(scrollBottom >= divBottom2) {
      $('.background-width2').addClass('background-width-shorten');
      $('.background-width-div2').addClass('background-div-anim');
      if(scrollBottom >= divBottom3) {
        $('.background-width3').addClass('background-width-shorten');
        $('.background-width-div3').addClass('background-div-anim');
        if(scrollBottom >= divBottom4) {
          $('.background-width4').addClass('background-width-shorten');
          $('.background-width-div4').addClass('background-div-anim');
          if(scrollBottom >= divBottom5) {
            $('.background-width5').addClass('background-width-shorten');
            $('.background-width-div5').addClass('background-div-anim');
            if (scrollBottom >= divBottom6) {
              $('.background-width6').addClass('background-width-shorten');
              $('.background-width-div6').addClass('background-div-anim');
              if(scrollBottom >= divBottom7) {
                $('.background-width7').addClass('background-width-shorten');
                $('.background-width-div7').addClass('background-div-anim');
                if(scrollBottom >= divBottom8) {
                  $('.background-width8').addClass('background-width-shorten');
                  $('.background-width-div8').addClass('background-div-anim');
                  if (scrollBottom >= divBottom9) {
                    $('.background-width9').addClass('background-width-shorten');
                    $('.background-width-div9').addClass('background-div-anim');
                    }
                }

              }
            }
          } else {

            $('.background-width6').removeClass('background-width-shorten');
            $('.background-width7').removeClass('background-width-shorten');
            $('.background-width8').removeClass('background-width-shorten');
            $('.background-width9').removeClass('background-width-shorten');
            $('.background-width-div6').removeClass('background-div-anim');
            $('.background-width-div7').removeClass('background-div-anim');
            $('.background-width-div8').removeClass('background-div-anim');
            $('.background-width-div9').removeClass('background-div-anim');
          }
        }
      }
    }
    else {
      $('.background-width5').removeClass('background-width-shorten');
      $('.background-width-div5').removeClass('background-div-anim');
      $('.background-width2').removeClass('background-width-shorten');
      $('.background-width3').removeClass('background-width-shorten');
      $('.background-width4').removeClass('background-width-shorten');
      $('.background-width-div2').removeClass('background-div-anim');
      $('.background-width-div3').removeClass('background-div-anim');
      $('.background-width-div4').removeClass('background-div-anim');
    }
  }


  if(top >= $('.body1-row2').offset().top + 100) {
    $('.bar').addClass('bar-resize');
    $('.bar-row1-svg').addClass('bar-row1-svg-resize');
    $('.hamburger').addClass('hamburger-resize');

    if(top > $('.body1-row2').offset().top + 200){
       $('.body1-row3-row1, .body1-row3-row2').addClass('smooth-scrolling1');
       if (window.innerWidth > 1000) {
         if(top > $('.body2').offset().top - 100) {
           $('.bar').addClass("bar-color");
           $('.body2-row3-col1').css('opacity',1).addClass("animated bounceInLeft");
              $('.body2-row3-col2').css('opacity',1).addClass("animated bounceInUp");
                 $('.body2-row3-col3').css('opacity',1).addClass("animated bounceInRight");
         } else {
            $('.bar').removeClass("bar-color");
           $('.body2-row3-col1').css('opacity',0).removeClass("animated bounceInLeft");
              $('.body2-row3-col2').css('opacity',0).removeClass("animated bounceInUp");
                 $('.body2-row3-col3').css('opacity',0).removeClass("animated bounceInRight");
         }
       } if (window.innerWidth < 1000) {
          if(top > $('.body2').offset().top - 100) {
            $('.bar').addClass("bar-color");
            if (scrollBottom >= threediv1) {
             $('.body2-row3-col1').css('opacity',1).addClass("animated bounceInLeft");
             if (scrollBottom >= threediv2) {
                $('.body2-row3-col2').css('opacity',1).addClass("animated bounceInRight");
                if (scrollBottom >= threediv3) {
                  $('.body2-row3-col3').css('opacity',1).addClass("animated bounceInLeft");
                }
              }


      }
           }   else {
           $('.bar').removeClass("bar-color");
           $('.body2-row3-col1').css('opacity',0).removeClass("animated bounceInLeft");
              $('.body2-row3-col2').css('opacity',0).removeClass("animated bounceInRight");
                 $('.body2-row3-col3').css('opacity',0).removeClass("animated bounceInLeft");
         }
       }

    } else {
       $('.body1-row3-row1, .body1-row3-row2').removeClass('smooth-scrolling1');
    }
  }
    else {
        $('.bar').removeClass('bar-resize');
        $('.bar-row1-svg').removeClass('bar-row1-svg-resize');
        $('.hamburger').removeClass('hamburger-resize');
        $('.background-width1').removeClass('background-width-shorten');
        $('.background-width-div1').removeClass('background-div-anim');
  }
})
$('.body1-row3').on('click', function () {
 $('.body1-row3-row1, .body1-row3-row2').addClass('smooth-scrolling');
 $('html,body').animate({scrollTop: $(".body2").offset().top - 700},500);
  $('html,body').animate({scrollTop: $(".body2").offset().top - 50},800,function(){
        $(".body1-row3-row1, .body1-row3-row2").removeClass("smooth-scrolling");
  });
});
$('.navbar > div').on('click', function () {
  $('.body5-row4 div').removeClass('contact-button');
  $('body').removeClass('stop-scrolling');
  $('.body5-row5, .body5-row6').removeClass('body5-row5-hide');
})
$('.nav-home').on('click', function() {
  $('.navbar').toggleClass('navbar-slide');
  $('.body1-row1-col1 svg').toggleClass('hamburger-cross');
  $('html,body').animate({scrollTop: $(".body1").offset().top},500);
});
$('.nav-about').on('click', function() {
  $('.navbar').toggleClass('navbar-slide');
  $('.body1-row1-col1 svg').toggleClass('hamburger-cross');
  $('html,body').animate({scrollTop: $(".body2").offset().top - 90},500);
});
$('.nav-works').on('click', function() {
  $('.navbar').toggleClass('navbar-slide');
  $('.body1-row1-col1 svg').toggleClass('hamburger-cross');
  $('html,body').animate({scrollTop: $(".body4").offset().top},500);
});
$('.nav-contact').on('click', function() {
  $('.navbar').toggleClass('navbar-slide');
  $('.body1-row1-col1 svg').toggleClass('hamburger-cross');
  $('html,body').animate({scrollTop: $(".body5").offset().top + 100},500);
});
$('.body1-row1-col1 svg').on('click', function () {
  $('.navbar').toggleClass('navbar-slide');
  $(this).toggleClass('hamburger-cross');
})

$('.body5-row4 div').on('click', function(e) {
  e.preventDefault();
  $(this).addClass('contact-button');
  $('body').addClass('stop-scrolling');
  $('.body5-row5, .body5-row6').addClass('body5-row5-hide');
})
$(".body5-row4-row1-row2 > div input, .body5-row4-row1-row2 > div textarea").focusout(function(){
      var text_value = $(this).val();
      if(text_value === "")
      {
              $(this).removeClass('has-value');
      }
      else
      {
       $(this).addClass('has-value');
      }
  })
